$(function () {
    $(window).scroll(function () {
        if ($('html,body').scrollTop() > 100) {
            
            $('.logo').addClass('maucam');
            $('.navbar').addClass('nentrang');
            $('.nav-link').addClass('menucam');
            $('.nuttop').addClass('hienthi');
        }
        else {
            $('.logo').removeClass('maucam');
            $('.navbar').removeClass('nentrang');
            $('.nav-link').removeClass('menucam');
            $('.nuttop').removeClass('hienthi');
            
        }
    })
})