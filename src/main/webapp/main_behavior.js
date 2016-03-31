$(function() {
    $("#aboutme-content").hide();
    $("#aboutme-container").click(function() {
        if ($(this).hasClass("active")) {
            $("#button-text").fadeOut(150);
            $("#aboutme-container")
                .animate({width: '800px'}, 500)
                .animate({top: '50px', height: '300px'}, {duration: 500,
                    complete: function() {
                    $("#aboutme-content").fadeIn(1000);
                    $(this).removeClass("active");
                    }
                 });
        }
        else {
            $("#aboutme-content").fadeOut(500).hide();
            $("#aboutme-container")
                .animate({top: '25%', height: '100px'}, 500)
                .animate({width: '100px'}, {duration: 500,
                complete: function() {
                $("#button-text").fadeIn(500);
                $(this).addClass("active");
                        }
                });
        }
    });

    $("#tools-content").hide();
    $("#tools-container").click(function() {
        if ($(this).hasClass("active")) {
            $("#tools-image").fadeOut(150);
            $("#tools-container")
                .animate({width: '800px'}, 500)
                .animate({height: '300px'}, {duration: 500,
                    complete: function() {
                    $("#tools-content").fadeIn(1000);
                    $(this).removeClass("active");
                    }
                 });
        }
        else {
            $("#tools-content").fadeOut(500).hide();
            $("#tools-container")
                .animate({height: '100px'}, 500)
                .animate({width: '100px'}, {duration: 500,
                complete: function() {
                $("#tools-text").fadeIn(500);
                $(this).addClass("active");
                        }
                });
        }
    });
});
