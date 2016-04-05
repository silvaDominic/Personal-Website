$(function() {
    var aboutmeSection = {id: '#aboutme-section', get SectionID() {return this.id;},
                          originalHeight: $('#aboutme-section').height(),
                          originalWidth: $('#aboutme-section').width(),
                          originalTop: $('#aboutme-section').position().top,
                          animatesHorizontally: false, get AnimatesHorizontally() {return this.animatesHorizontally},
                          expandedHeight: '320px', get ExpandedHeight() {return this.expandedHeight;},
                          expandedWidth: '80%', get ExpandedWidth() {return this.expandedWidth;},
                          expandedTop: '5%', get ExpandedTop() {return this.expandedTop;}};

    var toolsSection = {id: '#tools-section', get SectionID() {return this.id;},
                        originalHeight: $('#tools-section').height(),
                        originalWidth: $('#tools-section').width(),
                        originalTop: $('#tools-section').position().top,
                        animatesHorizontally: false, get AnimatesHorizontally() {return this.animatesHorizontally},
                        expandedHeight: '320px', get ExpandedHeight() {return this.expandedHeight;},
                        expandedWidth: '80%', get ExpandedWidth() {return this.expandedWidth;},
                        expandedTop: '50%', get ExpandedTop() {return this. expandedTop;}};

    var gamesSection = {id: '#games-section', get SectionID() {return this.id;},
                          originalHeight: $('#games-section').height(),
                          originalWidth: $('#games-section').width(),
                          originalTop: $('#games-section').position().top,
                          animatesHorizontally: true, get AnimatesHorizontally() {return this.animatesHorizontally},
                          expandedHeight: '80%', get ExpandedHeight() {return this.expandedHeight;},
                          translate: '50%', get Translate() {return this.translate;},
                          expandedTop: '50%', get ExpandedTop() {return this.expandedTop;}};

    var photographySection = {id: '#photography-section', get SectionID() {return this.id;},
                        originalHeight: $('#photography-section').height(),
                        originalWidth: $('#photography-section').width(),
                        originalTop: $('#photography-section').position().top,
                        animatesHorizontally: true, get AnimatesHorizontally() {return this.animatesHorizontally},
                        expandedHeight: '80%', get ExpandedHeight() {return this.expandedHeight;},
                        expandedWidth: '400px', get ExpandedWidth() {return this.expandedWidth;},
                        expandedTop: '50%', get ExpandedTop() {return this. expandedTop;}};

    $(".content").hide();
    $(".container").click(function() {
        if ($(this).hasClass("active")) {
            switch($(this).attr('id')) {
                case 'aboutme-section':
                growSection(aboutmeSection);
                break;
4
                case 'tools-section':
                growSection(toolsSection);
                break;

                case 'games-section':
                growSection(gamesSection);
                break;

                case 'photography-section':
                growSection(photographySection);
                break;

                default:
                break;
            }
        } else {
            switch($(this).attr('id')) {
                case 'aboutme-section':
                shrinkSection(aboutmeSection);
                break;

                case 'tools-section':
                shrinkSection(toolsSection);
                break;

                case 'games-section':
                shrinkSection(gamesSection);
                break;

                case 'photography-section':
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
                .animate({left: section.Translate}, 500)
                .animate({top: section.ExpandedTop, height: section.ExpandedHeight}, {duration: 500,
                    complete: function() {
                    $(elem).find(".content").fadeIn(750);
                    $(elem).removeClass("active");
                    }
                 });

        } else {
            $(elem)
                .animate({top: section.ExpandedTop, height: section.ExpandedHeight}, 500)
                .animate({width: section.ExpandedWidth}, {duration: 500,
                    complete: function() {
                    $(elem).find(".content").fadeIn(750);
                    $(elem).removeClass("active");
                    }
                 });
        }
    }

    function shrinkSection(section){
        var elem = section.SectionID;

        if (section.animatesHorizontally){
            $(elem).find(".content").fadeOut(500);
            $(elem)
                .animate({top: section.originalTop, height: section.originalHeight}, 500)
                .animate({width: section.originalWidth}, 500);
                $(elem).addClass("active");
        } else {
           $(elem).find(".content").fadeOut(500);
           $(elem)
               .animate({width: section.originalWidth}, 500)
               .animate({top: section.originalTop, height: section.originalHeight}, 500);
               $(elem).addClass("active");
        }
    }
});

//TODO: Fix animations.