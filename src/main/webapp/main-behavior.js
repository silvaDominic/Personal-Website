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

    $(".content").hide();
    $(".container").click(function() {
        if ($(this).hasClass("active")) {
            $(this).find(".icon").fadeOut(150);
            $(this)
                .animate({width: '80%'}, 500)
                .animate({height: '325px'}, {duration: 500,
                    complete: function() {
                    $(this).find(".content").fadeIn(750);
                    $(this).removeClass("active");
                    }
                 });
        }
        else {
            $(this).find(".content").fadeOut(500);
            $(this)
                .animate({height: '120px'}, 500)
                .animate({width: '120px'}, {duration: 500,
                complete: function() {
                $(this).find(".icon").fadeIn(500);
                $(this).addClass("active");
                        }
                });
        }
    });
});
