document.domain = "localhost";
var url = "http://localhost:8080/church_album/"
console.log($.ajax());

$.getJSON(url, function(data){
	var items = [];
	$.each(data.images, function(key, val){
	items.push("<img height=\"400px\" src = \"" + url + JSON.parse(val).filename + "\"/>")
	console.log(url + JSON.parse(val).filename)
	console.log(JSON.parse(val).filename)
});

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});