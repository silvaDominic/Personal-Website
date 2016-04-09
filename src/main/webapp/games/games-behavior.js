$(document).ready(function(){

    $('.dummy').hover(function(){
       $(this).find(".title").slideDown(200);
       }, function() {
       $(this).find(".title").slideUp(200);
       });
});