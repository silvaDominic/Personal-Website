$(document).ready(function() {

// Definitions -------------------------------------------------------------------------------------------------------

    //Define object literals
    var aboutmeSection = {id: '#aboutme-section', get ID() {return this.id;},
                          selector: '#person-icon', get Selector() {return this.selector;},
                          origWidth: $('#aboutme-section').css('width'), get OrigWidth() {return this.origWidth;},
                          origLeft: $('#aboutme-section').css('left'), get OrigLeft() {return this.origLeft;},
                          origHeight: $('#aboutme-section').css('height'), get OrigHeight() {return this.origHeight;},
                          origTop: $('#aboutme-section').css('top'), get OrigTop() {return this.origTop;},
                          origBottom: $('#aboutme-section').css('bottom'), get OrigBottom() {return this.origBottom;},
                          expandedWidth: '65%', get ExpandedWidth() {return this.expandedWidth;},
                          expandedHeight: '450px', get ExpandedHeight() {return this.expandedHeight;},
                          expandedTop: '65%', get ExpandedTop() {return this.expandedTop;}};

    var photographySection = {id: '#photography-tab', get ID() {return this.id;},
                               selector: '#camera-icon', get Selector() {return this.selector;},
                               origWidth: $('#photography-tab').css('width'), get OrigWidth() {return this.origWidth;},
                               origRight: $('#photography-tab').css('right'), get OrigRight() {return this.origRight;},
                               expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;}};

    var gamesSection = {id: '#games-tab', get ID() {return this.id;},
                              selector: '#gamepad-icon', get Selector() {return this.selector;},
                              origWidth: $('#games-tab').css('width'), get OrigWidth() {return this.origWidth;},
                              origLeft: $('#games-tab').css('left'), get OrigLeft() {return this.origLeft;},
                              expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;}};


// Handlers ---------------------------------------------------------------------------------------------------------

    // Handles aboutme section functionality
    function handleAboutMeSection(elemToAnimate, selectedElem, active){
        // First click
        if (active){
            // Animate vertically first
            animateVertically(elemToAnimate.ID,
                              elemToAnimate.ExpandedHeight,
                              elemToAnimate.ExpandedTop,
                              elemToAnimate.OrigBottom);
            // Animate horizontally second
            animateHorizontally(elemToAnimate.ID,
                                 elemToAnimate.ExpandedWidth,
                                 elemToAnimate.OrigLeft,
                                 'auto',
                                 500);

            // Fade in content and remove active class
            $(elemToAnimate.ID).find(".content").fadeIn(1250);
            $(selectedElem).removeClass('active');
        // Second click
        } else {
            // Fade out content
            $(elemToAnimate.ID).find(".content").fadeOut(250, function(){
                // Animate horizontally first
                animateHorizontally(elemToAnimate.ID,
                                     elemToAnimate.OrigWidth,
                                     elemToAnimate.OrigLeft,
                                     'auto',
                                     250);
                // Animate vertically second
                animateVertically(elemToAnimate.ID,
                                  elemToAnimate.OrigHeight,
                                  elemToAnimate.OrigTop,
                                  elemToAnimate.OrigBottom);
            });
            // Add active class back in
            $(selectedElem).addClass('active');
        }
    }

    //Handles photography tab functionality
    function handlePhotographyTab(elemToAnimate, selectedElem, active){
        // First click
        if (active){
            // Only animate horizontally
            animateHorizontally(elemToAnimate.ID,
                                elemToAnimate.ExpandedWidth,
                                'auto',
                                elemToAnimate.OrigRight,
                                500);

            // Fade in content and remove active class
            $(elemToAnimate.ID).find(".content").fadeIn(1250);
            $(selectedElem).removeClass('active');
        // Second click
        } else {
            // Fade out content and only animate horizontally
            $(elemToAnimate.ID).find(".content").fadeOut(250, function(){
                animateHorizontally(elemToAnimate.ID,
                                    elemToAnimate.OrigWidth,
                                    'auto',
                                    elemToAnimate.OrigRight,
                                    500);
            });
            // Add active class back in
            $(selectedElem).addClass('active');
        }
    }

    //Handles game tab functionality
    function handleGamesTab(elemToAnimate, selectedElem, active){
       // First click
       if (active){
           // Only animate horizontally
           animateHorizontally(elemToAnimate.ID,
                               elemToAnimate.ExpandedWidth,
                               elemToAnimate.OrigLeft,
                               'auto',
                               500);
           // Fade in content and remove active class
           $(elemToAnimate.ID).find(".content").fadeIn(1250);
           $(selectedElem).removeClass('active');
       // Second click
       } else {
           // Fade out content and only animate horizontally
           $(elemToAnimate.ID).find(".content").fadeOut(250, function(){
               animateHorizontally(elemToAnimate.ID,
                                   elemToAnimate.OrigWidth,
                                   elemToAnimate.OrigLeft,
                                   'auto',
                                   500);
           });
           // Add active class back in
           $(selectedElem).addClass('active');
       }
    }

// Helper functions --------------------------------------------------------------------------------------------------
    // Animate element vertically
    function animateVertically(elemID, duration=0, newHeight='auto', newTop='auto', newBottom='auto'){
        $(elemID).animate({height: newHeight,
                            top: newTop,
                            bottom: newBottom}, duration);
    }
    // Animate horizontally
    function animateHorizontally(elemID, duration=0, newWidth='auto', newLeft='auto', newRight='auto', ){
        $(elemID).animate({width: newWidth,
                            left: newLeft,
                            right: newRight}, duration);
    }

// Main --------------------------------------------------------------------------------------------------------------

    //Hide content initially
    $(".content").hide();
    //Handle click events
    $(".image").click(function() {
        //On first click
        if ($(this).hasClass("active")) {
            switch($(this).attr('id')) {
                case 'person-icon':
                handleAboutMeSection(aboutmeSection, aboutmeSection.Selector, true);
                break;

                case 'gamepad-icon':
                handleGamesTab(gamesSection, gamesSection.Selector, true);
                break;

                case 'camera-icon':
                handlePhotographyTab(photographySection, photographySection.Selector, true);
                break;

                default:
                break;
            }
        // On second click
        } else {
            switch($(this).attr('id')) {
                case 'person-icon':
                handleAboutMeSection(aboutmeSection, aboutmeSection.Selector, false);
                break;

                case 'gamepad-icon':
                handleGamesTab(gamesSection, gamesSection.Selector, false);
                break;

                case 'camera-icon':
                handlePhotographyTab(photographySection, photographySection.Selector, false);
                break;

                default:
                break;
            }
        }
    });

});