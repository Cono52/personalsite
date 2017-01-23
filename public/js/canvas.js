let canvas = document.getElementById('top')
ctx = canvas.getContext("2d")

function calcVH() {
    $('body').innerHeight( $(this).innerHeight() );
}
(function($) { 
  calcVH();
  $(window).on('orientationchange', function() {
    calcVH();
  });
})(jQuery);