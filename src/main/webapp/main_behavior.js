$(function() {
    $('#about_node').hover(function(){
        $('#about_text').text("About");
        }, function() {
            $('#about_text').text("A");
            });

    $('#about_node').click(function() {
        alert("clicked");
    });
});

//TODO: Figure out how to make text transition; add conditionals to click function