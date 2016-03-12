document.domain = "localhost";
var url = "http://localhost:8080/port_jeff_album/";
console.log($.ajax());

$.getJSON(url, function(data){
	var items = [];
	$.each(data.images, function(key, val){
	items.push("<img height=\"400px\" src = \"" + url + JSON.parse(val).filename + "\"/>")
	//console.log(url + JSON.parse(val).filename)
	//console.log(JSON.parse(val).filename)
});

  $( "<div/>", {
    "class": "galleria",
    html: items.join( "" )
  }).appendTo( "body" );
});


if (Galleria) {
    Galleria.loadTheme('galleria/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria', {
        extend: function() {
        var gallery = this;
            $('#fullscreen').click(function() {
              gallery.enterFullscreen();
              });
        }
    });
}

//TODO: Find out why '../galleria...' isn't working.