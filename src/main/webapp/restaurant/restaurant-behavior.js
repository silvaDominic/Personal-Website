$(document).ready(function() {
    document.domain = "domsilva.com";
    var url = "http://domsilva.com/images/restaurant-album/";
    console.log($.ajax());

    //Retrieve JSON from specified url and create JSON object
    $.getJSON(url, function(data){
        var items = [];
        $.each(data.images, function(key, val){
        items.push("<img src = \"" + url + JSON.parse(val).filename + "\"/>")
        console.log(url + JSON.parse(val).filename);
        console.log(JSON.parse(val).filename);
    });

    //Dynamically input html for galleria
    $( "<div/>", {
        "class": "galleria",
        html: items.join( "" )
      }).appendTo( "body" );
    });

    //If Galleria is detected, loadTheme, run, and configure
    if (Galleria) {
        Galleria.loadTheme('../galleria/themes/classic/galleria.classic.min.js');
        Galleria.run('.galleria');
        Galleria.configure({
            thumbnails: 'lazy', //lazy-loads thumbnails; not implemented yet
            responsive: true, //Dynamically resizes Galleria stage
            trueFullscreen: true, //Enables fullscreen
            });

        //Configures keys for navigating through gallery
        Galleria.ready(function() {
            this.attachKeyboard({
            left: this.prev,
            right: this.next
            });
        });

    } else {
        console.log("The Galleria App could not be found.");
    }
});