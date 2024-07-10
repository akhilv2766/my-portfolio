$(document).ready(function() {
    $('.logo').on('click',function(){
        $(this).css('transition', 'transform 0.5s ease');
        $(this).css('transform', 'rotate(360deg)');
        $(this).one('transitionend', function() { // Use .one() for a single execution
            isRotating = false;
            $(this).css('transition', 'transform 0.5s ease'); // Optional: Prevent jump on next rotation
            $(this).css('transform', 'rotate(0deg)');
          });
    });


});