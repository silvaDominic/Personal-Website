$(document).ready(function() {

    var aboutMeSection = {id: '#aboutme-section', get ID() {return this.id;},
                          color: '#1549ff', get Color() {return this.color;}};
    var toolsSection = {id: '#tools-section', get ID() {return this.id;}};
    var gamesSection = {id: '#games-section', get ID() {return this.id;}};
    var photographySection = {id: '#photography-section', get ID() {return this.id;}};

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

    var state = {expanded: false, get isExpanded() {return this.expanded;},
                                  set isExpanded(newState) {
                                        if (newState == true || newState == false){
                                            this.expanded = newState;
                                        } else {
                                            console.log("Invalid state. Must be boolean.");
                                        }
                                  },
                 previousElem: '', get PreviousElem() {return this.previousElem;},
                                   set PreviousElem(newElem) {
                                        if (newElem == 'person-icon' ||
                                            newElem =='camera-icon' ||
                                            newElem == 'toolbox-icon' ||
                                            newElem == 'gamepad-icon'){
                                                this.previousElem = '#' + newElem;
                                            } else {
                                                console.log("Invalid state. Must be a valid element.");
                                            }
                                   }
                };

    $('.content').hide();
    $('.container').on('click', '.button', function() {
        var $elem = $(this);
        if ($elem.hasClass('active')){
            if (!state.isExpanded){
                $('#button-container').animate({height: '100%', width: '100%'}, 500);
                $('.button').animate({height: '5vw', width: '5vw'}, 500, function() {
                showSection($elem, 500);
                });

                $(this).removeClass('active');
                state.isExpanded = true;
                state.PreviousElem = $(this).attr('id');
            } else if (state.isExpanded) {
                //swap content
                hideSection($(state.previousElem), 250);
                showSection($(this), 500);
                $(this).removeClass('active');
                $(state.PreviousElem).addClass('active');
                state.PreviousElem = $(this).attr('id');
            } else {
                console.log("Invalid state.");
            }
        } else {
            hideSection($(this), 250, function(){
                $('.button').animate({height: '15vw', width: '15vw'}, 500);
                $('#button-container').animate({height: '600px', width: '600px'}, 500);
                });
            state.isExpanded = false;
            $(this).addClass('active');
            }

        });
});