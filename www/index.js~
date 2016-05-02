$(document).ready(function() {

    //Hide all content initially
    //Fade in body on initial load
    $('.content').hide();
    $('body').hide();
    $('body').fadeIn(2000);

    //Define object literals for respective sections
    var aboutMeSection = {id: '#aboutme-section', get ID() {return this.id;}};
    var toolsSection = {id: '#tools-section', get ID() {return this.id;}};
    var gamesSection = {id: '#games-section', get ID() {return this.id;}};
    var photographySection = {id: '#photography-section', get ID() {return this.id;}};

    //Define object literal for states of section
    var state = {expanded: false, get isExpanded() {return this.expanded;},
                                  set isExpanded(newState) {
                                        if (newState == true || newState == false){ //Check if state is boolean
                                            this.expanded = newState; //Set state if valid
                                        } else {
                                            console.log("Invalid state. Must be boolean.");
                                        }
                                  },
                 //Used to keep track of previously selected element
                 previousElem: '', get PreviousElem() {return this.previousElem;},
                                   set PreviousElem(newElem) {
                                        if ($('#' + newElem).hasClass('button')){ //Check if element is a button
                                                this.previousElem = '#' + newElem; //Set state if valid
                                            } else {
                                                console.log("Invalid state. Must be a valid element.");
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
            $(toolsSection.ID).find('.content').fadeIn(duration);
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
        //Check whether element is still animating, return false if it is
        if ($elem.is(":animated")) {return false;}
        //If button is active and main menu is NOT expanded, expand buttons and fade in content
        if ($elem.hasClass('active')){
            if (!state.isExpanded){
                $('#button-container').animate({height: '100%', width: '100%'}, 500); //Grows button container
                $('.button').animate({height: '5vw', width: '5vw'}, 500, function() { //Reduces size of buttons and fades in content
                showSection($elem, 500); /*<---- Fix this; executed 4 times*/
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
            } else {
                console.log("Invalid state.");
            }
            //If menu is expanded and current button is clicked again, fade out content and retract menu to default state
        } else {
            //Hide section and animate menu
            hideSection($(this), 250, function(){
                $('.button').animate({height: '15vw', width: '15vw'}, 500);
                $('#button-container').animate({height: '600px', width: '600px'}, 500);

                //Remove class from button, change state
                //Encapsulating in hideSection call back prevents double click event from happening
                $($elem).addClass('active');
                state.isExpanded = false;
                });
            }
        });
});