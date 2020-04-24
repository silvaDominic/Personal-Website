$(document).ready(function() {
    document.domain = "www.domsilva.com";
    var url = "https://www.domsilva.com/images/professional-album/";
    console.log($.ajax());

    //Retrieve JSON from specified url and create JSON object
    $.getJSON(url, function(data){
        var items = [];
        $.each(data.images, function(key, val){
        items.push("<img src = \"" + url + JSON.parse(val).filename + "\"/>");
        console.log(url + JSON.parse(val).filename);
        console.log(JSON.parse(val).filename);
    });

    //Dynamically input html for galleria
    $( "<div/>", {
        "class": "galleria",
        html: items.join( "" )
      }).appendTo( "body" );
    });
});