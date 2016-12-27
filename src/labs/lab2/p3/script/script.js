$(document).ready(function () {
    console.log(1);
    $( "#dialog" ).dialog({
        autoOpen: false,
        modal: true,
        show: 'slide',
        hide: 'slide',
        buttons: {
            Add: function(){
                var title = $("#input-title").val();
                var author = $("#input-author").val();
                var comment = $("#input-comment").val();
                var div = $("<div />").append(title).append('<br />').append(author).append('<br />').append(comment);
                div.addClass("gridElement");
                $('#grid').append(div);
                //validation here
                $("#dialog").dialog("close");
            }
        }
    });

    $("#button").click(function(){
        $( "#dialog" ).dialog("open");
    });
});