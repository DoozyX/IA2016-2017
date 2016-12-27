$(document).ready(function () {
    console.log("1");
    $('.footerContent').hide();
    $('.footerPanel').click(function () {
        $('.footerContent').hide();
        $(this).children().show();
    })
});