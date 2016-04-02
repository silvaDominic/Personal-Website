$(function() {
/*        $(this.content).hide();
        $(this.container).click(function() {
            if ($(this.container).hasClass("active")) {
                $(this.icon).fadeOut(150);
                $(this.container)
                    .animate({width: '80%'}, 500)
                    .animate({top: '60px', height: '300px'}, {duration: 500,
                        complete: function() {
                        $(this.content).fadeIn(1000);
                        $(this).removeClass("active");
                        }
                     });
            }
            else {
                $(this.content).fadeOut(500).hide();
                $(this.container)
                    .animate({top: '25%', height: '120px'}, 500)
                    .animate({width: '120px'}, {duration: 500,
                    complete: function() {
                    $(this.icon).fadeIn(500);
                    $(this).addClass("active");
                            }
                    });
            }
        });*/

    var aboutmeSection = {id: '#aboutme-section', get SectionID() {return this.id;},
                          expandedHeight: '325px', get ExpandedHeight() {return this.expandedHeight;},
                          expandedWidth: '80%', get ExpandedWidth() {return this.expandedWidth;},
                          expandedTop: '60px', get ExpandedTop() {return this.expandedTop;}};

    var toolsSection = {id: '#tools-section', get SectionID() {return this.id;},
                        expandedHeight: '325px', get ExpandedHeight() {return this.expandedHeight;},
                        expandedWidth: '80%', get ExpandedWidth() {return this.expandedWidth;},
                        expandedTop: '50%', get ExpandedTop() {return this. expandedTop;}};

    $(".content").hide();
    $(".container").click(function() {
        if ($(this).hasClass("active")) {
            switch($(this).attr('id')) {
                case 'aboutme-section':
                growSection(aboutmeSection);
                break;

                case 'tools-section':
                growSection(toolsSection);
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

                default:
                break;
            }
        }
    });

    function growSection(section) {
            var elem = section.SectionID;
            $(elem).find(".icon").fadeOut(150);
            $(elem)
                .animate({width: section.ExpandedWidth}, 500)
                .animate({top: section.ExpandedTop, height: section.ExpandedHeight}, {duration: 500,
                    complete: function() {
                    $(elem).find(".content").fadeIn(750);
                    $(elem).removeClass("active");
                    }
                 });
        }

    function shrinkSection(section){
        var elem = section.SectionID;
        $(elem).find(".content").fadeOut(500);
        $(elem)
            .animate({top: $(elem).css('top'), height: $(elem).css('height')}, 500)
            .animate({width: $(elem).css('width')}, {duration: 500,
            complete: function() {
            $(elem).find(".icon").fadeIn(500);
            $(elem).addClass("active");
                    }
            });
    }
});
