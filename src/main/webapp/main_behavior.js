$(function() {
    $("#about-section").hide();
    $("#about-button").toggle(function() {
        $("#about-button")
            .animate({width: '800px'}, 500)
            .animate({height: '300px'}, {duration: 500,
                complete: function() {
                $("#about-section").fadeIn(1000);
                }
             });
        }, function() {
            $("#about-section").fadeOut(500);
            $("#about-button")
                .animate({height: '100px'}, 500)
                .animate({width: '100px'}, 500);
            });
});

//TODO: Drop .toggle method, use 'toggle' attributes instead