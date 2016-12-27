$(function() {
    $( ".selectable" ).selectable();
    $("#add").click(function () {
        $('.selectable').append("<li class=\"ui-widget-content\">" + $("#name").val() + "</li>")
    })
});