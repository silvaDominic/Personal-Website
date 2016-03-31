var aboutMeSection = {container: "#aboutme-container",
                       content: "#aboutme-content",
                       image: "#aboutme-image"};

var toolsSection = {container: "#tools-container",
                       content: "#tools-content",
                       image: "#tools-image"};

var gamesSection = {container: "#games-container",
                       content: "#games-content",
                       image: "#games-image"};

var photoSection = {container: "#photo-container",
                       content: "#photo-content",
                       image: "#photo-image"};

function getContainer() { return container; }

function getContent() { return content; }

function getImage() { return image; }

alert(aboutMeSection.getContainer());
$(function() {

    switch($(this)){
        case "#aboutme-container":
            alert(this);
            animateSection(aboutMeSection.getContainer(), aboutMeSection.getContent(), aboutMeSection.getImage());
            break;
        default:
            break;
    }

    function animateSection (container, content, image){
        $(content).hide();
        $(container).click(function() {
            if ($(container).hasClass("active")) {
                $(image).fadeOut(150);
                $(container)
                    .animate({width: '80%'}, 500)
                    .animate({top: '60px', height: '300px'}, {duration: 500,
                        complete: function() {
                        $(content).fadeIn(1000);
                        $(this).removeClass("active");
                        }
                     });
            }
            else {
                $(content).fadeOut(500).hide();
                $(container)
                    .animate({top: '25%', height: '120px'}, 500)
                    .animate({width: '120px'}, {duration: 500,
                    complete: function() {
                    $(image).fadeIn(500);
                    $(this).addClass("active");
                            }
                    });
            }
        });
    }

/*    $("#tools-content").hide();
    $("#tools-container").click(function() {
        if ($(this).hasClass("active")) {
            $("#tools-image").fadeOut(150);
            $("#tools-container")
                .animate({width: '80%'}, 500)
                .animate({height: '325px'}, {duration: 500,
                    complete: function() {
                    $("#tools-content").fadeIn(1000);
                    $(this).removeClass("active");
                    }
                 });
        }
        else {
            $("#tools-content").fadeOut(500).hide();
            $("#tools-container")
                .animate({height: '120px'}, 500)
                .animate({width: '120px'}, {duration: 500,
                complete: function() {
                $("#tools-text").fadeIn(500);
                $(this).addClass("active");
                        }
                });
        }
    });*/
});
