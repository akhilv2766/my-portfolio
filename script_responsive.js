$(document).ready(function () {
    $('.logo').on('click', function () {
        $(this).css('transition', 'transform 0.5s ease');
        $(this).css('transform', 'rotate(360deg)');
        $(this).one('transitionend', function () { // Use .one() for a single execution
            isRotating = false;
            $(this).css('transition', 'transform 0.5s ease'); // Optional: Prevent jump on next rotation
            $(this).css('transform', 'rotate(0deg)');
        });
    });


});

$(document).ready(function () {
    function adjustPosition() {
        if ($(window).width() < 760) {
            // Get the position of .about-img
            var aboutImgPosition = $('.about-img').position();

            // Calculate the new position for .text4
            var newTopPosition = aboutImgPosition.top + $('.about-img').outerHeight();
            var newLeftPosition = aboutImgPosition.left;

            // Apply the new position to .text4
            $('.text4').css({
                'position': 'absolute',
                'top': newTopPosition + 'px',
                'left': newLeftPosition + '125px'
            });
        } else {
            // Reset the position for larger screens
            $('.text4').css({
                'position': 'absolute',
                'left': '500px',
                'top': '0px',
                'line-height': '120px'
            });
        }
    }

    // Call the function on page load and window resize
    adjustPosition();
    $(window).resize(adjustPosition);
});