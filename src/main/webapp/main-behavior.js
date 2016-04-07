$(document).ready(function() {

    //Define object literals
    var aboutmeSection = {id: '#aboutme-section', get ID() {return this.id;},
                          selector: '#person-icon', get Selector() {return this.selector;},
                          OrigWidth: $('#aboutme-section').width(),
                          OrigLeft: $('#aboutme-section').position().left,
                          OrigHeight: $('#aboutme-section').height(),
                          OrigTop: $('#aboutme-section').position().top,
                          OrigBottom: $('#aboutme-section').position().bottom,
                          expandedWidth: '65%', get ExpandedWidth() {return this.expandedWidth;},
                          expandedHeight: '450px', get ExpandedHeight() {return this.expandedHeight;},
                          expandedTop: '65%', get ExpandedTop() {return this.expandedTop;}};

    var photographySection = {id: '#photography-tab', get ID() {return this.id;},
                               selector: '#camera-icon', get Selector() {return this.selector;},
                               OrigWidth: $('#photography-tab').width(),
                               OrigRight: $('#photography-tab').position().right,
                               expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;}};

    var gamesSection = {id: '#games-tab', get ID() {return this.id;},
                              selector: '#gamepad-icon', get Selector() {return this.selector;},
                              OrigWidth: $('#games-tab').width(),
                              OrigLeft: $('#games-tab').position().left,
                              expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;}};

    $(".content").hide();
    $(".image").click(function() {
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

    function handleAboutMeSection(elemToAnimate, selectedElem, active){
        if (active){
            animateVertically(elemToAnimate.ID,
                              elemToAnimate.ExpandedHeight,
                              elemToAnimate.ExpandedTop,
                              elemToAnimate.OrigBottom);

            animateHorizontally(elemToAnimate.ID,
                                 elemToAnimate.ExpandedWidth,
                                 elemToAnimate.OrigLeft,
                                 null,
                                 500);

            $(elemToAnimate.ID).find(".content").fadeIn(1250);
            $(selectedElem).removeClass('active');

        } else {
            $(elemToAnimate.ID).find(".content").fadeOut(250, function(){
                animateHorizontally(elemToAnimate.ID,
                                     elemToAnimate.OrigWidth,
                                     elemToAnimate.OrigLeft,
                                     null,
                                     250);
                animateVertically(elemToAnimate.ID,
                                  elemToAnimate.OrigHeight,
                                  elemToAnimate.OrigTop,
                                  elemToAnimate.OrigBottom);
            });
            $(selectedElem).addClass('active');
        }
    }

    function handlePhotographyTab(elemToAnimate, selectedElem, active){
        if (active){
            alert($('#photography-tab').data('right'));
            animateHorizontally(elemToAnimate.ID,
                                elemToAnimate.ExpandedWidth,
                                null,
                                elemToAnimate.OrigRight,
                                500);

            $(elemToAnimate.ID).find(".content").fadeIn(1250);
            $(selectedElem).removeClass('active');

        } else {
            $(elemToAnimate.ID).find(".content").fadeOut(250, function(){
                animateHorizontally(elemToAnimate.ID,
                                    elemToAnimate.OrigWidth,
                                    null,
                                    elemToAnimate.OrigRight,
                                    500);
            });
            $(selectedElem).addClass('active');
        }
    }

      function handleGamesTab(elemToAnimate, selectedElem, active){
           if (active){
               animateHorizontally(elemToAnimate.ID,
                                   elemToAnimate.ExpandedWidth,
                                   elemToAnimate.OrigLeft,
                                   null,
                                   500);

               $(elemToAnimate.ID).find(".content").fadeIn(1250);
               $(selectedElem).removeClass('active');

           } else {
               $(elemToAnimate.ID).find(".content").fadeOut(250, function(){
                   animateHorizontally(elemToAnimate.ID,
                                       elemToAnimate.OrigWidth,
                                       elemToAnimate.OrigLeft,
                                       null,
                                       500);
               });
               $(selectedElem).addClass('active');
           }
      }

    function animateVertically(elemID, newHeight=null, newTop=null, newBottom=null, duration=0){
        $(elemID).animate({height: newHeight,
                            top: newTop,
                            bottom: newBottom}, duration);
    }

    function animateHorizontally(elemID, newWidth=null, newLeft=null, newRight=null, duration=0){
        $(elemID).animate({width: newWidth,
                            left: newLeft,
                            right: newRight}, duration);
    }

});

//TODO: Find out how to access original CSS properties