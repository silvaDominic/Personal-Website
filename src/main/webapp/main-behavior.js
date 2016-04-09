$(document).ready(function() {

    $('body').hide();
    $('body').fadeIn(2500, function() {
    handleAboutMeSection(aboutmeSection, aboutmeSection.Selector, true);
    });


// Definitions -------------------------------------------------------------------------------------------------------

    // Define object literals
    var aboutmeSection = {id: '#aboutme-section', get ID() {return this.id;},
                          selector: '#person-icon', get Selector() {return this.selector;},
                          origWidth: $('#aboutme-section').css('width'), get OrigWidth() {return this.origWidth;},
                          origLeft: $('#aboutme-section').css('left'), get OrigLeft() {return this.origLeft;},
                          origRight: 'auto', get OrigRight() {return this.origRight;},
                          origHeight: $('#aboutme-section').css('height'), get OrigHeight() {return this.origHeight;},
                          origTop: $('#aboutme-section').css('top'), get OrigTop() {return this.origTop;},
                          origBottom: $('#aboutme-section').css('bottom'), get OrigBottom() {return this.origBottom;},
                          expandedWidth: '65%', get ExpandedWidth() {return this.expandedWidth;},
                          expandedLeft: $('#aboutme-section').css('left'), get ExpandedLeft() {return this.expandedLef;},
                          expandedRight: $('#aboutme-section').css('right'), get ExpandedRight() {return this.expandedRight;},
                          expandedHeight: '450px', get ExpandedHeight() {return this.expandedHeight;},
                          expandedTop: '65%', get ExpandedTop() {return this.expandedTop;},
                          expandedBottom: $('#aboutme-section').css('bottom'), get ExpandedBottom() {return this.expandedBottom;}};

    var photographySection = {id: '#photography-tab', get ID() {return this.id;},
                               selector: '#camera-icon', get Selector() {return this.selector;},
                               origWidth: $('#photography-tab').css('width'), get OrigWidth() {return this.origWidth;},
                               origLeft: 'auto', get OrigLeft() {return this.origLeft;},
                               origRight: $('#photography-tab').css('right'), get OrigRight() {return this.origRight;},
                               expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;},
                               expandedLeft: 'auto', get ExpandedLeft() {return this.expandedLeft;},
                               expandedRight: $('#photography-tab').css('right'), get ExpandedRight() {return this.expandedRight;}};

    var gamesSection = {id: '#games-tab', get ID() {return this.id;},
                              selector: '#gamepad-icon', get Selector() {return this.selector;},
                              origWidth: $('#games-tab').css('width'), get OrigWidth() {return this.origWidth;},
                              origLeft: $('#games-tab').css('left'), get OrigLeft() {return this.origLeft;},
                              expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;}};


// Handlers ---------------------------------------------------------------------------------------------------------

    // Handles aboutme section functionality
    function handleAboutMeSection(elemToAnimate, selectedElem, active,
                                  animateDuration=500, fadeInDuration=500, fadeOutDuration=250) {
        // First click
        if (active){
            // Animate vertically first
            $(elemToAnimate.ID).animate({height: elemToAnimate.ExpandedHeight,
                                     top: elemToAnimate.ExpandedTop,
                                     bottom: elemToAnimate.OrigBottom}, animateDuration);
            // Animate horizontally second
            $(elemToAnimate.ID).animate({width: elemToAnimate.ExpandedWidth,
                                 left: elemToAnimate.ExpandedLeft,
                                 right: elemToAnimate.ExpandedRight}, animateDuration)

            //Animate Name
            $('#name').animate({bottom: '80%'}, animateDuration);

            // Fade in content and remove active class
            $(elemToAnimate.ID).promise().done(function() {
                $(elemToAnimate.ID).find(".content").fadeIn(fadeInDuration);
            });
            $(selectedElem).removeClass('active');
        // Second click
        } else {
            // Fade out content
            $(elemToAnimate.ID).find(".content").fadeOut(fadeOutDuration, function(){
                // Animate horizontally first
                $(elemToAnimate.ID).animate({width: elemToAnimate.OrigWidth,
                                         left: elemToAnimate.OrigLeft,
                                         right: elemToAnimate.OrigRight}, animateDuration);
                // Animate vertically second
                $(elemToAnimate.ID).animate({height: elemToAnimate.OrigHeight,
                                          top: elemToAnimate.OrigTop,
                                          bottom: elemToAnimate.OrigBottom}, animateDuration);

                // Animate Name
                $('#name').animate({bottom: '-240px'}, animateDuration);
            });
            // Add active class back in
            $(selectedElem).addClass('active');
        }
    }

    // Handles photography tab functionality
    function handleTabs(elemToAnimate, selectedElem, active, animateDuration=500, fadeInDuration=500, fadeOutDuration=250){
        // First click
        if (active){
            // Only animate horizontally
            $(elemToAnimate.ID).animate({width: elemToAnimate.ExpandedWidth,
                                  left: elemToAnimate.ExpandedLeft,
                                  right: elemToAnimate.ExpandedRight}, animateDuration);

            // Fade in content and remove active class
            $(elemToAnimate.ID).promise().done(function() {
                $(elemToAnimate.ID).find(".content").fadeIn(fadeInDuration);
            });
            $(selectedElem).removeClass('active');
        // Second click
        } else {
            // Fade out content and only animate horizontally
            $(elemToAnimate.ID).find(".content").fadeOut(fadeOutDuration, function(){
                $(elemToAnimate.ID).animate({width: elemToAnimate.OrigWidth,
                                         left: elemToAnimate.OrigLeft,
                                         right: elemToAnimate.OrigRight}, animateDuration);
            });
            // Add active class back in
            $(selectedElem).addClass('active');
        }
    }

// Main --------------------------------------------------------------------------------------------------------------

    // Hide content initially
    $(".content").hide();
    //Handle click events
    $(".image").click(function() {
        //On first click
        if ($(this).hasClass("active")) {
            switch($(this).attr('id')) {
                case 'person-icon':
                /*handleAboutMeSection(aboutmeSection, aboutmeSection.Selector, true);*/
                break;

                case 'gamepad-icon':
                handleTabs(gamesSection, gamesSection.Selector, true);
                break;

                case 'camera-icon':
                handleTabs(photographySection, photographySection.Selector, true);
                break;

                default:
                break;
            }
        // On second click
        } else {
            switch($(this).attr('id')) {
                case 'person-icon':
                // Don't retract section if currently expanding
                /*if($(aboutmeSection.ID).is(':animated')) {return false;}
                handleAboutMeSection(aboutmeSection, aboutmeSection.Selector, false);*/
                break;

                case 'gamepad-icon':
                // Don't retract section if currently expanding
                if($(gamesSection.ID).is(':animated')) {return false;}
                handleTabs(gamesSection, gamesSection.Selector, false);
                break;

                case 'camera-icon':
                // Don't retract section if currently expanding
                if($(photographySection.ID).is(':animated')) {return false;}
                handleTabs(photographySection, photographySection.Selector, false);
                break;

                default:
                break;
            }
        }
    });

});