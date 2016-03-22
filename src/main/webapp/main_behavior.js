$(function() {

    $('#about_node').hover(function(){
        $('#about_text').fadeOut(500, function() {
            $(this).text("About").fadeIn(500);
            });
    });

    $('#about_node').click(function() {
        alert("clicked");
    });
});

//TODO: Figure out how to make text transition; add conditionals to click function