$(document).scroll(function() { 
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
        $('nav.navbar-custom').css('background-color', '#f0f0f0');
    } else {
        $('nav.navbar-custom').css('background-color', 'transparent');
    }
});