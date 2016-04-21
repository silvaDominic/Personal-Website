$(document).ready(function() {
    console.log("Here");
    document.domain = "localhost";
    var url = "http://localhost:8080/images/port-jeff-album/";
    console.log($.ajax());

    $.getJSON(url, function(data){
        var items = [];
        $.each(data.images, function(key, val){
        items.push("<img src = \"" + url + JSON.parse(val).filename + "\"/>")
        console.log(url + JSON.parse(val).filename);
        console.log(JSON.parse(val).filename);
    });

      $( "<div/>", {
        "class": "galleria",
        html: items.join( "" )
      }).appendTo( "body" );
    });


});

//TODO: Find out why images aren't loading