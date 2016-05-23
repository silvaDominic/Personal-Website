// ----------------------------------------- CONTAINER DEFINITION ------------------------------------------------------
// Container class
function Container(id, contentId){
    // Ensures an id is passed in
    if (!(this.is_set(id))){
        console.log("Container needs at least an id to be instantiated");
    } else {
        // Handle optional content parameter
        if (!(this.is_set(contentId))) {
            this.contentId = null;
        } else {
            this.contentId = contentId;
            this.contentFaded = false;
        }
        // Sets initial properties
        this.id = id;
        this.origDim = this.getDimensions();
        this.altDim = {};
        this.hasChanged = false;
    }
}

// --------------------------------- PROTOTYPE METHODS FOR CONTAINER CLASS ---------------------------------------------
// Validates whether a property is a valid type (not undefined)
Container.prototype.is_set = function(prop){
        return (typeof prop != 'undefined');
}

// Returns current dimensions
Container.prototype.getDimensions = function() {
    var dimensions = {
        height: $(this.id).height() + 'px',
        width: $(this.id).width() + 'px'
    }
    return dimensions;
}

// Sets dimensions if different then current
Container.prototype.setAltDimensions = function(newDim) {
    if (!(this.is_set(newDim))){
        console.log("A new set of dimensions must be provided.");
    } else {
        this.altDim = {
            height: (this.is_set(newDim.height) ? newDim.height:this.CurrDim.height),
            width: (this.is_set(newDim.width) ? newDim.width:this.CurrDim.width)
        };
    }
    return this; // Allows chaining
}

Container.prototype.toggle = function(animateDur){
    // If container has not animated, then animate to alternate dimensions
    // Otherwise, animate back to original dimensions
    if (!this.hasChanged){
        $(this.id).animate(this.altDim, animateDur);
        this.hasChanged = true;
    } else {
        $(this.id).animate(this.origDim, animateDur);
        this.hasChanged = false;
    }
    return this; // Allows chaining
}

// ------------------------------------------ BUTTON DEFINITION --------------------------------------------------------
// Button class
function Button(id, contentId){
    Container.call(this, id, contentId);
    // Ensures an id is passed in
    if (!(this.is_set(contentId))){
        console.log("Button needs at least a contentId to be instantiated");
    } else {
    // Sets initial properties
    this.contentId = contentId;
    this.isClicked = false;
    this.backgroundColor = null;
    }
}

// Creates button prototype
Button.prototype = Object.create(Container.prototype);
Button.prototype.constructor = Button;

// ----------------------------------  PROTOTYPE METHODS FOR BUTTON CLASS ----------------------------------------------
// Override method for Container toggle method
Button.prototype.toggle = function(newDim, animateDur){
    // If button has not been animated, then animate to new dimensions
    // Otherwise, animate back to original dimensions
    if (!this.hasChanged){
        $(this.id).animate(newDim, animateDur)
        this.hasChanged = true;
    } else {
        $(this.id).animate(this.origDim, animateDur)
        this.hasChanged = false;
    }
    return this; // Allows chaining
}

// Fades in content and locks button background-color
Button.prototype.toggleContent = function(fadeInDur, fadeOutDur){
    // If button is click, then lock button background-color, fade in content, and set flags
    // Otherwise, fade out content,unlock background-color, and set flags
    if (!this.isClicked){
        $(this.id).addClass('clicked');
        $(this.contentId).find('.content').fadeIn(fadeInDur);
        this.isClicked = true;
        this.contentFaded = true;
    } else {
        $(this.contentId).find('.content').fadeOut(fadeOutDur)
        $(this.id).removeClass('clicked');
        this.isClicked = false;
        this.contentFaded = false;
    }
    return this; // Allows chaining
}

// ------------------------------------------------- MAIN --------------------------------------------------------------
$(document).ready(function() {

    //Hide all content initially and fade in body
    $('.content').hide();
    $('body').hide();
    $('body').fadeIn(2000);

    // Sets static variables
    var button_Props = {dimensions : {height: '5vw', width: '5vw'},
                            animateDur : 500};
    var previous_Button = null;
    var menuHasChanged = false;
    var buttons = new Set();

    // Setup for button container
    var buttonContainer = new Container('#button-container');
    buttonContainer.setAltDimensions({height: '100%', width: '100%'});

    // Setup for buttons
    var aboutmeButton = new Button('#person-icon', '#aboutme-section');
    aboutmeButton.setAltDimensions(button_Props.dimensions);
    buttons.add(aboutmeButton);

    var toolboxButton = new Button('#toolbox-icon', '#toolbox-section');
    toolboxButton.setAltDimensions(button_Props.dimensions);
    buttons.add(toolboxButton);

    var gamesButton = new Button('#gamepad-icon', '#games-section');
    gamesButton.setAltDimensions(button_Props.dimensions);
    buttons.add(gamesButton);

    var photographyButton = new Button('#camera-icon', '#photography-section');
    photographyButton.setAltDimensions(button_Props.dimensions);
    buttons.add(photographyButton);

    // Handle click behavior for each button and its respective section
    $('.button').click(function() {
        switch($(this).attr('id')){
            case 'person-icon':
                sectionHandler(aboutmeButton);
            break;

            case 'toolbox-icon':
                sectionHandler(toolboxButton);
            break;

            case 'gamepad-icon':
                sectionHandler(gamesButton);
            break;

            case 'camera-icon':
                sectionHandler(photographyButton);
            break;

            default:
            break;
        }
    });

// ---------------------------------- PUBLIC METHODS FOR MAIN FUNCTION -------------------------------------------------
    // Toggles main menu
    function toggleMenu(){
        // If menu has not yet expanded, then animate to new dimensions
        // Otherwise, animate back to original dimensions
        if (!buttonContainer.hasChanged){
            buttonContainer.toggle(500); // Toggles container
            for (var button of buttons){ // Toggles buttons
                button.toggle(button_Props.dimensions, button_Props.animateDur);
            }
            menuHasChanged = true;
        } else {
            buttonContainer.toggle(500); // Toggles container
            for (var button of buttons){ // Toggles buttons
                button.toggle(button_Props.dimensions, button_Props.animateDur);
            }
            menuHasChanged = false;
        }
    }

    // Handles all behavior for each section
    // If menu has opened, then toggle content appropriately
    // Otherwise, toggle content and close menu
    function sectionHandler(currButton){
        if (menuHasChanged) {
            // If current button is clicked again, fade out content and close menu
            // Otherwise, fade out previous content and fade in content of current button
            if (previous_Button == currButton) {
                currButton.toggleContent(500, 250);
                toggleMenu();
            } else if (previous_Button != null) {
                previous_Button.toggleContent(500, 250);
                currButton.toggleContent(500, 250);
            }
        } else {
            currButton.toggleContent(500, 250);
            toggleMenu();
        }
        previous_Button = currButton; // Sets current button to previous button after every call
    }
});