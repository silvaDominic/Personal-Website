// ----------------------------------------- CONTAINER DEFINITION ------------------------------------------------------
function Container(id){
    // Ensures an id is passed in
    if (!(this.is_set(id))){
        console.log("Container needs at least an id to be instantiated");
    } else {
    // Sets initial properties
    this.id = id;
    this.origDim = this.getDimensions();
    this.currDim = {};
    this.altDim = {};
    this.hasChanged = false;
    }
}

// --------------------------------- PROTOTYPE METHODS FOR CONTAINER CLASS ---------------------------------------------
Container.prototype.is_set = function(prop){
        return (typeof prop != 'undefined');
}

Container.prototype.getDimensions = function() {

    var dimensions = {
        height: $(this.id).height() + 'px',
        width: $(this.id).width() + 'px'
    }
    return dimensions;
}

Container.prototype.setAltDimensions = function(newDim) {
    if (!(this.is_set(newDim))){
        console.log("A new set of dimensions must be provided.");
    } else {
        this.altDim = {
            height: (this.is_set(newDim.height) ? newDim.height:this.CurrDim.height),
            width: (this.is_set(newDim.width) ? newDim.width:this.CurrDim.width)
        };
    }
    return this;
}

Container.prototype.toggle = function(duration){
    // If container has not changed then animate to alternate dimensions
    // Otherwise, animate back to original dimensions
    if (!this.hasChanged){
        $(this.id).animate(this.altDim, duration);
        this.hasChanged = true;
    } else {
        $(this.id).animate(this.origDim, duration);
        this.hasChanged = false;
    }
    return this;
}

// ------------------------------------------ BUTTON DEFINITION --------------------------------------------------------

// Button class
function Button(id, section){
    Container.call(this, id);
    // Ensures an id is passed in
    if (!(this.is_set(id) ||
          this.is_set(section))){
        console.log("Button needs at least a section to be instantiated");
    } else {
    // Sets initial properties
    this.section = section;
    this.isClicked = false;
    this.backgroundColor = null;
    }
}

Button.prototype = Object.create(Container.prototype);
Button.prototype.constructor = Button;

// ----------------------------------  PROTOTYPE METHODS FOR BUTTON CLASS ----------------------------------------------

Button.prototype.toggle = function(newDim, animateDur, fadeInDur, fadeOutDur){
    // If button has not been clicked then animate all buttons and fade in respective content
    // Otherwise, fade out respective content and animate back to original dimensions
    if (!this.isClicked){
        $(this.id).css(this.backgroundColor);
        $('.button').animate(newDim, animateDur).promise().done(function() {
         $(this.section).find('.content').fadeIn(fadeInDur);
        });
        this.isClicked = true;
    } else {
        $(this.section).find('.content').fadeOut(fadeOutDur).promise().done(function() {
            $('.button').animate(this.origDim, animateDur); // All buttons can be reset to dimensions of any button
            $(this.id).css('background-color', 'transparent');
        });
        this.isClicked = false;
    }
    return this;
}

// ------------------------------------------------- MAIN -------------------------------------------------------------
$(document).ready(function() {

    //Hide all content initially
    //Fade in body
    $('.content').hide();
    $('body').hide();
    $('body').fadeIn(2000);

    // General button properties
    var buttonProps = {dimensions : {height: '5vw', width: '5vw'},
                            duration : 500};

   var buttons = new Set();

    // Setup for button container
    var buttonContainer = new Container('#button-container');
    buttonContainer.altDim = {height: '100%', width: '100%'};

    // Setup for buttons
    var aboutmeButton = new Button('#person-icon', '#aboutme-section');
    aboutmeButton.setAltDimensions(buttonProps.dimensions);
    aboutmeButton.backgroundColor = {'background-color' : '#1549FF'};
    buttons.add(aboutmeButton);

    var toolboxButton = new Button('#toolbox-icon', '#toolbox-section');
    toolboxButton.setAltDimensions(buttonProps.dimensions);
    toolboxButton.backgroundColor = {'background-color' : '#FFF314'};
    buttons.add(toolboxButton);

    var gamesButton = new Button('#gamepad-icon', '#games-section');
    gamesButton.setAltDimensions(buttonProps.dimensions);
    gamesButton.backgroundColor = {'background-color' : '#8DC63F'};
    buttons.add(gamesButton);

    var photographyButton = new Button('#camera-icon', '#photography-section');
    photographyButton.setAltDimensions(buttonProps.dimensions);
    photographyButton.backgroundColor = {'background-color' : '#BE4E58'};
    buttons.add(photographyButton);

    // Handle click behavior for each button and its respective section
    $('.button').click(function() {
        // Animate container and all buttons
        buttonContainer.toggle(500);
        switch($(this).attr('id')){
            case 'person-icon':
            aboutmeButton.toggle(buttonProps.dimensions, 500, 500, 250);
            break;

            case 'toolbox-icon':
            toolboxButton.toggle(buttonProps.dimensions, 500, 500, 250);
            break;

            case 'gamepad-icon':
            gamesButton.toggle(buttonProps.dimensions, 500, 500, 250);
            break;

            case 'camera-icon':
            photographyButton.toggle(buttonProps.dimensions, 500, 500, 250);
            break;

            default:
            break;
        }
    });
});

//TODO: Find out why section content is not fading in; handle previous element and correct fade in/out behavior

//---------------------------------------------------------------------------------------------------------------------
/*
    var state = {expanded: false, get isExpanded() {return this.expanded;},
                                  set isExpanded(newState) {
                                        if (newState == true || newState == false){ //Check if state is boolean
                                            this.expanded = newState; //Set state if valid
                                        } else {
                                            console.log("Invalid state. Must be boolean.");
                                        }
                                  }
                 };
     var
                 //Used to keep track of previously selected button
                 previousButton: '', get PreviousButton() {return this.previousButton;},
                                   set PreviousButton(newButton) {
                                        if ($('#' + newButton).hasClass('button')){ //Check if element is a button
                                                this.previousButton = '#' + newButton; //Set state if valid
                                            } else {
                                                console.log("Invalid element. Must be a button.");
                                            }
                                   }
                };

    //Fades in respective section
    function showSection(elem, duration) {
        var elemID = $(elem).attr('id');
        switch(elemID){
            case 'person-icon':
            $(aboutMeSection.ID).find('.content').fadeIn(duration);
            break;

            case 'toolbox-icon':
            $(toolboxSection.ID).find('.content').fadeIn(duration);
            break;

            case 'gamepad-icon':
            $(gamesSection.ID).find('.content').fadeIn(duration);
            break;

            case 'camera-icon':
            $(photographySection.ID).find('.content').fadeIn(duration);
            break;

            default:
            break;
        }
    }

    //Hides respective section, uses callback function for fading out content before animating buttons
    function hideSection(elem, duration, callback) {
        var elemID = $(elem).attr('id');
        switch(elemID){
            case 'person-icon':
            $(aboutMeSection.ID).find('.content').fadeOut(duration, callback);
            break;

            case 'toolbox-icon':
            $(toolsSection.ID).find('.content').fadeOut(duration, callback);
            break;

            case 'gamepad-icon':
            $(gamesSection.ID).find('.content').fadeOut(duration, callback);
            break;

            case 'camera-icon':
            $(photographySection.ID).find('.content').fadeOut(duration, callback);
            break;

            default:
            break;
        }
    }


    //Handle click events for home-page buttons
    $('.button').click(function(e) {
        var $elem = $(this);
        //Check whether element is still animating, return false if it is; prevents double clicking
        if ($elem.is(":animated")) {return false;}
        //If button is active and main menu is NOT expanded, expand buttons and fade in respective content
        if ($elem.hasClass('active')){
            if (!state.isExpanded){
                //Grows button container
                $('#button-container').animate({height: '100%', width: '100%'}, 500);

                //Reduces size of buttons and fades in content
                $('.button').animate({height: '5vw', width: '5vw'}, 500).promise().done(function() {
                showSection($elem, 500);
                });

                //Remove class from button, change state, and set previous element
                $(this).removeClass('active');
                state.isExpanded = true;
                state.PreviousElem = $(this).attr('id');

              //If menu is expanded and other button is clicked, hide current section and fade in new section
            } else if (state.isExpanded) {
                //swap content
                hideSection($(state.previousElem), 250);
                showSection($(this), 750);

                //Remove class from button, change state, and set previous element
                $(this).removeClass('active');
                $(state.PreviousElem).addClass('active');
                state.PreviousElem = $(this).attr('id');
              //Invalid state entered
            } else {
                console.log("Invalid state.");
            }
          //If menu is expanded and current button is clicked again, fade out content and retract menu to default state
        } else {
            //Hide section and animate menu
            hideSection($(this), 250, function(){
                $('.button').animate({height: '15vw', width: '15vw'}, 500);
                $('#button-container').animate({height: '35vw', width: '35vw'}, 500);

                //Remove class from button, change state
                //Encapsulating in hideSection callback prevents double click event from happening
                $($elem).addClass('active');sectionID
                state.isExpanded = false;
                });
            }
        });
});
*/
