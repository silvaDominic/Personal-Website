$(function() {

    var aboutNode = $('#about_node');
    var gamephotoNode = $('#game_photo_node');
    var selfstudyNode = $('#self_study_node');

    $(aboutNode.mouseover(function() {
        hoverInHandler('#about_text', "About");
        hoverOutHandler('#about_text', "A");
        //alert("About Check");
    }));

    $(gamephotoNode.mouseover(function() {
        //aboutNode.hover(hoverInHandler('about_text', "About"), hoverOutHandler('about_text', "A"))
        //alert("gp Check");
    }));

    $(selfstudyNode.mouseover(function() {
        //aboutNode.hover(hoverInHandler('about_text', "About"), hoverOutHandler('about_text', "A"))
        //alert("ss Check");
    }));
        //});

    function hoverInHandler(nodeName, nodeText){
        $(nodeName).fadeOut(300, function() {
            $(this).text(nodeText).fadeIn(300);
            });
    }

    function hoverOutHandler(nodeName, nodeText) {
         $(nodeName).fadeOut(300, function() {
            $(this).text(nodeText).fadeIn(5000);
           });
    }

    /*$('#about_node').click(function() {
        alert("clicked");
    });*/
});

//TODO: Fix hoverIn/hoverOut functions, Add conditionals to click function

/*    function nodeHandler(node)
      $('#about_node').hover(function(){
          $('#about_text').fadeOut(300, function() {
              $(this).text("About").fadeIn(300);
              })
      }, function() {
              $('#about_text').fadeOut(300, function() {
              $(this).text("A").fadeIn(300);
             });
      });

      $('#about_node').click(function() {
          alert("clicked");
      });
*/