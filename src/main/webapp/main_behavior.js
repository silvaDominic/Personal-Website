$(function() {
    $("#about-button").toggle(function() {
        console.log("1st");
        $(this)
            .animate({width: '800px'}, 500)
            .animate({height: '300px'});
        }, function() {
            console.log("2nd");
            $(this)
                .animate({height: '100px'}, 500)
                .animate({width: '100px'}, 500);
            });
});

//TODO: Drop .toggle method, use 'toggle' attributes instead