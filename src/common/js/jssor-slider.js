jQuery(document).ready(function ($) {

  $('.arrow').hide();

  $('#jssor_1').hover(function() {
    $('.arrow').fadeIn(250);
  }, function() {
    $('.arrow').fadeOut(250);
  });

  var jssor_1_SlideshowTransitions = [
    {$Duration:1200,$Opacity:2}
  ];

  var jssor_1_options = {
    $AutoPlay: 1,
    $SlideshowOptions: {
      $Class: $JssorSlideshowRunner$,
      $Transitions: jssor_1_SlideshowTransitions,
      $TransitionsOrder: 1
    },
    $ArrowNavigatorOptions: {
      $Class: $JssorArrowNavigator$
    },
    $BulletNavigatorOptions: {
      $Class: $JssorBulletNavigator$
    }
  };

  var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

  /*#region responsive code begin*/
  /*remove responsive code if you don't want the slider scales while window resizing*/
  function ScaleSlider() {
    var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
    if (refSize) {
      refSize = Math.min(refSize, 1400);
      jssor_1_slider.$ScaleWidth(refSize);
    }
    else {
      window.setTimeout(ScaleSlider, 30);
    }
  }
  ScaleSlider();
  $(window).bind("load", ScaleSlider);
  $(window).bind("resize", ScaleSlider);
  $(window).bind("orientationchange", ScaleSlider);
  /*#endregion responsive code end*/
});