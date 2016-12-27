$(document).ready(function () {
    $('.accordionContent').hide();
    $('.accordionHeader').click(function () {
        $('.accordionDiv .accordionContent').stop().slideUp();
        $('.accordionHeader').removeClass('green');
        $(this).addClass('green');
        $(this).siblings().stop().slideDown();
    })
});