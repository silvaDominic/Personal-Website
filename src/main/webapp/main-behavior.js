$(document).ready(function() {

    var aboutMeSection = {id: '#aboutme-section', get ID() {return this.id;}};
    var toolsSection = {id: '#tools-section', get ID() {return this.id;}};
    var gamesSection = {id: '#games-section', get ID() {return this.id;}};
    var photographySection = {id: '#photography-section', get ID() {return this.id;}};

    function showSection(elem, duration) {
        var elemID = $(elem).attr('id');
        console.log(elemID);
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

    function hideSection(elem, duration) {
        var elemID = $(elem).attr('id');
        console.log(elemID);
        switch(elemID){
            case 'person-icon':
            $(aboutMeSection.ID).find('.content').fadeOut(duration);
            break;

            case 'toolbox-icon':
            $(toolsSection.ID).find('.content').fadeOut(duration);
            break;

            case 'gamepad-icon':
            $(gamesSection.ID).find('.content').fadeOut(duration);
            break;

            case 'camera-icon':
            $(photographySection.ID).find('.content').fadeOut(duration);
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
    $('.image').click(function() {
        if ($(this).hasClass('active')){
            if (!state.isExpanded){
                $('.image').animate({height: '10%', width: '10%'}, 500);
                $('#button-container').animate({height: '100%', width: '100%'}, 500);
                showSection($(this), 1000);


                $(this).removeClass('active');
                state.isExpanded = true;
                state.PreviousElem = $(this).attr('id');
            } else if (state.isExpanded) {
                //swap content
                hideSection($(state.previousElem), 250);
                showSection($(this), 1000);
                $(this).removeClass('active');
                $(state.PreviousElem).addClass('active');
                state.PreviousElem = $(this).attr('id');
            } else {
                console.log("Invalid state.");
            }
        } else {
            hideSection($(this), 250);
            $('.image').animate({height: '47%', width: '47%'}, 500);
            $('#button-container').animate({height: '600px', width: '600px'}, 500);
            state.isExpanded = false;
            $(this).addClass('active');
        }
    });
});

//TODO: Figure out how to load/unload content, animate fades sequentially