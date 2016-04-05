$(document).ready(function() {
    var aboutmeSection = {id: '#aboutme-section', get SectionID() {return this.id;},
                          originalHeight: $('#aboutme-section').height(),
                          originalWidth: $('#aboutme-section').width(),
                          originalTop: $('#aboutme-section').position().top,
                          animatesHorizontally: false, get AnimatesHorizontally() {return this.animatesHorizontally},
                          expandedHeight: '450px', get ExpandedHeight() {return this.expandedHeight;},
                          expandedWidth: '65%', get ExpandedWidth() {return this.expandedWidth;},
                          expandedTop: '65%', get ExpandedTop() {return this.expandedTop;}};

    var gamesSection = {id: '#games-tab', get SectionID() {return this.id;},
                          originalWidth: $('#games-tab').width(),
                          animatesHorizontally: true, get AnimatesHorizontally() {return this.animatesHorizontally},
                          expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;}};

    var photographySection = {id: '#photography-tab', get SectionID() {return this.id;},
                        originalWidth: $('#photography-tab').width(),
                        animatesHorizontally: true, get AnimatesHorizontally() {return this.animatesHorizontally},
                        expandedWidth: '40%', get ExpandedWidth() {return this.expandedWidth;}};

    $(".content").hide();
    $(".container").add(".image").click(function() {
        if ($(this).hasClass("active")) {
            switch($(this).attr('id')) {
                case 'person-icon':
                growSection(aboutmeSection);
                break;

                case 'games-tab':
                growSection(gamesSection);
                break;

                case 'photography-tab':
                growSection(photographySection);
                break;

                default:
                break;
            }
        } else {
            switch($(this).attr('id')) {
                case 'person-icon':
                shrinkSection(aboutmeSection);
                break;

                case 'games-tab':
                shrinkSection(gamesSection);
                break;

                case 'photography-tab':
                shrinkSection(photographySection);
                break;

                default:
                break;
            }
        }
    });

    function growSection(section) {
        var elem = section.SectionID;
        if (section.animatesHorizontally){
            $(elem)
                .animate({width: section.ExpandedWidth}, {duration: 500,
                    complete: function() {
                    $(elem).find(".content").fadeIn(750);
                    $(elem).removeClass("active");
                    }
                 });

        } else {
            $(elem)
                .animate({top: section.ExpandedTop, height: section.ExpandedHeight}, 250)
                .animate({width: section.ExpandedWidth}, {duration: 250,
                    complete: function() {
                    $(elem).find(".content").fadeIn(750);
                    $('#person-icon').removeClass("active");
                    }
                 });
        }
    }

    function shrinkSection(section){
        var elem = section.SectionID;

        if (section.animatesHorizontally){
            $(elem).find(".content").fadeOut(250, function(){
                $(elem)
                    .animate({width: section.originalWidth}, 500);
                    $(elem).addClass("active");
            });
        } else {
           $(elem).find(".content").fadeOut(250, function() {
               $(elem)
                   .animate({width: section.originalWidth}, 500)
                   .animate({top: section.originalTop, height: section.originalHeight}, 500);
                   $('#person-icon').addClass("active");
           });
        }
    }
});