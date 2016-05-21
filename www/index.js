//Define object literals

function Container(id, contentId){
    this.id = id;
    this.contentId = contentId;
    this.origDim = {};
    this.currDim = {};
    this.altDim = {};
    this.isExpanded = false;

    this.is_set: function(prop){
        return (typeof prop != 'undefined')
    }
    this.getDimensions: function() {
        var dimensions = {
            height: $(this.id).height() + 'vw',
            width: $(this.id).width() + 'vw'
        }
    }
    this.setAltDimensions: function(newDim) {
        if (!(this.is_set(newDim))){
            console.log("A set of new dimensions must be provided.");
        } else {
            this.altDim = {
                height: (this.is_set(newDim.height) ? newDim.height:this.CurrDim.height),
                width: (this.is_set(newDim.width) ? newDim.width:this.CurrDim.width)
            };
        }
        return this;
    }
    this.expand: function(newDim, duration) {
        $(this.ID).animate(newDim, duration);

        return this;
    }
    this.retract: function(newDim, duration) {
        $(this.ID).animate(newDim, duration);

        return this;
    }
}

 = function(id, backgroundColor){
    this.backgroundColor;
}

var button = {
    id: null, get ID() {return this.id;},
    container: null, get Container() {return this.id;},
    origDim: {}, get OrigDim() {return this.origDim;},
    currDim: {}, get CurrDim() {return this.currDim;},
    altDim: {}, get AltDim() {return this.altDim;},
    backgroundColor: null,
    isClicked: false, get IsClicked() {return this.isClicked;},
    cstr: function (properties) {
        var self = this;
        if (!(self.is_set(properties) ||
              self.is_set(properties.id) ||
              self.is_set(properties.backgroundColor)
              )
           ){
            console.log("Button needs at least an id and a background color to be instantiated");
        } else {
            self.id = properties.id;
            self.backgroundColor = properties.backgroundColor;
            self.origDim = self.getDimensions()
        }
        return self;
    },
    is_set: function(prop){
        return (typeof prop != 'undefined')
    },
    getDimensions: function() {
        var self = this;
        var dimensions = {
            height: $(self.id).height() + 'vw',
            width: $(self.id).width() + 'vw'
        }
    },
    setAltDimensions: function(newDim) {
        var self = this;
        if (!(self.is_set(newDim))){
            console.log("A set of new dimensions must be provided.");
        } else {
            self.altDim = {
                height: (self.is_set(newDim.height) ? newDim.height:self.CurrDim.height),
                width: (self.is_set(newDim.width) ? newDim.width:self.CurrDim.width)
            };
        }
        return self;
    },
    expand: function(newDim, duration) {
        var self = this;
        $(self.ID).animate(newDim, duration);

        return self;
    },
    retract: function(newDim, duration) {
        var self = this;
        $(self.ID).animate(newDim, duration);

        return self;
    }
}

$(document).ready(function() {

    //Hide all content initially
    //Fade in body
    $('.content').hide();
    $('body').hide();
    $('body').fadeIn(2000);

    var aboutme_button = button;
    aboutme_button.cstr({
    id:'#person-icon',
    background: 'blue'
    }).setAltDimensions({
    height: '5vw',
    width: '5vw'
    });

    $('.button').click(function() {
        switch($(this).attr('id')){
            case 'person-icon':
            button_container.expand(button_container.AltDim, 500);
            aboutme_button.expand(aboutme_button.AltDim, 500);
            break;

            default:
            break;
        }
    });

});


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
//----------------------------------------------------------------------------------------------------------------------
