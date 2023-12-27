jQuery(document).ready(function(){
    
    $('.open_menu').on('click', function () {
        $('header').addClass('mobile_menu_open');
    });

    $('.close_menu').on('click', function () {
        $('header').removeClass('mobile_menu_open');
    });

});
