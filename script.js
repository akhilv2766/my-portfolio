AOS.init();

$(document).ready(function(){

    $(".logo").hover(function(){
        $(this).css({
            'transition': 'transform 1000ms',
            'transform': 'scale(1.5)'
        });
    },function(){
        $(this).css({
            'transition': 'transform 500ms',
            'transform': 'scale(1)'
        });
    });



});