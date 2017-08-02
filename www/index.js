// ----------------------------------------- ADVANCED CONTAINER DEFINITION ------------------------------------------------------
// Container class
function Container(id, contentId,  children = new Map(), isAugmented = false, isClicked = false, isFaded = false){
	this.id = id;
	this.contentId = contentId;
	this.children = children;
	this.isAugmented = isAugmented;
	this.isClicked = isClicked;
	this.isFaded = isFaded;
}

Container.prototype.toggleAugment = function(doAnimation = false) {
	doAnimation ? $(this.id).addClass('animate') : $(this.id).removeClass('animate');

	if (!this.isAugmented) {
		$(this.id).addClass('augmented');
		this.isAugmented = true;
	} else {
		$(this.id).removeClass('augmented');
		this.isAugmented = false;
	}
	return this; // Allows chaining
}

Container.prototype.toggleFade = function(fadeInDur, fadeOutDur, target = this.id) {
	if (!this.isFaded){
			$(target).fadeIn(fadeInDur);
			this.isFaded = true;
    } else {
			$(target).fadeOut(fadeOutDur)
			this.isFaded = false;

    }
  return this; // Allows chaining
}

Container.prototype.setClickState = function(clickState) {
	if (clickState == true) {
		$(this.id).addClass('clicked');
		this.isClicked = true;
	} else {
		$(this.id).removeClass('clicked');
		this.isClicked = false;
	}
}

// ------------------------------------------------- MAIN --------------------------------------------------------------

$(document).ready(function() {
	//Hide all content initially
	$('.primary-section').hide();

	// Static variables
	var prevNode = null;
	var	nodes = new Map();

	// Create URI instance
	var uri = new URI();

	// Setup for nodes
	// Instantiate node with parent id and content id object
	nodes.set('aboutmeNode', new Container('#aboutme-icon', '#aboutme-section'));
	nodes.set('currentProjectNode', new Container('#current-project-icon', '#current-project-section'));
	nodes.set('portfolioNode', new Container('#portfolio-icon', '#portfolio-section'));
	nodes.set('photographyNode', new Container('#photography-icon', '#photography-section'));
	// Setup for node container
	var nodeContainer = new Container('#node-container', null, nodes);

	// Check for initial load using query parameters
	// Reset containers if not
	if (uri.hasQuery("section")) {
		var prevSection = uri.search(true)['section'];
		var targetNode = nodeContainer.children.get(prevSection);
		resetContainers(targetNode);
	} else {
		 //Fade in on initial load
	 	$('body').hide();
		$('body').fadeIn(2000);
	}

  // Handle click behavior for each node and its respective section
  $('.node').click(function() {
      switch($(this).attr('id')){
          case 'aboutme-icon':
				window.history.pushState(nodeContainer,'', uri.setSearch('section', 'aboutmeNode'));
				sectionHandler(nodeContainer.children.get('aboutmeNode'));
          break;

          case 'current-project-icon':
				window.history.pushState(nodeContainer,'', uri.setSearch('section', 'currentProjectNode'));
				sectionHandler(nodeContainer.children.get('currentProjectNode'));
          break;

          case 'portfolio-icon':
				window.history.pushState(nodeContainer,'', uri.setSearch('section', 'portfolioNode'));
				sectionHandler(nodeContainer.children.get('portfolioNode'));
          break;

          case 'photography-icon':
				window.history.pushState(nodeContainer,'', uri.setSearch('section', 'photographyNode'));
				sectionHandler(nodeContainer.children.get('photographyNode'));
          break;

          default:
          break;
      }
  });
// ---------------------------------- PUBLIC METHODS FOR MAIN FUNCTION -------------------------------------------------
    // Toggles main menu
    function toggleMenu(){
	    // If menu has not yet expanded, add active classes to animate to new dimensions
	    // Otherwise, remove active class to animate back to original dimensions
	    if (!nodeContainer.isAugmented){
			nodeContainer.toggleAugment(true); // Toggles node container
			for (let child of nodeContainer.children.values()) {
				child.toggleAugment(true);
			}
		} else {
			nodeContainer.toggleAugment(true);
			for (let child of nodeContainer.children.values()) {
				child.toggleAugment(true);
			}
        }
	}

    // Handles all behavior for each section
    // If menu has opened, then toggle content appropriately
    // Otherwise, toggle content and close menu
    function sectionHandler(currNode){
        if (nodeContainer.isAugmented) {

            // If current node is clicked again, fade out content and close menu
            // Otherwise, fade out previous content and fade in content of current node
            if (prevNode == currNode) {
				window.history.pushState(nodeContainer, '', uri.removeSearch('section')); //Removes section when menu is closed query parameters
                currNode.toggleFade(550, 200, currNode.contentId).setClickState(false);
                toggleMenu();
            } else if (prevNode != null) {
				window.scrollTo(0, 0); // Reset view when fading between content
                prevNode.toggleFade(550, 200, prevNode.contentId).setClickState(false);
                currNode.toggleFade(550, 200, currNode.contentId).setClickState(true);
            }
        } else {
            currNode.toggleFade(550, 200, currNode.contentId).setClickState(true);
            toggleMenu();
        }
        	prevNode = currNode; // Sets current node to previous node after every call
    }

	// Handles resetting containers on page return
	// Explicitly sets previous state of menu and content
	function resetContainers(targetNode) {
			for (let child of nodeContainer.children.values()) {
				child.toggleAugment();
			}
			targetNode.setClickState(true);
			targetNode.toggleFade(550, 200, targetNode.contentId);
			nodeContainer.toggleAugment();
			prevNode = targetNode;
	}
});
