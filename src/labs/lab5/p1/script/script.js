$(function() {
    var $code = $('#code');
    var $name = $('#name');
    var $to = $('#to');
    var $cat = $('#category');

    $("#addFlight").click(function() {
        $( "#dialog-form" ).dialog( "open" );
    }).button();

    $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 500,
        width: 500,
        modal: true,
        buttons: {
            "Додади": function() {
                var table = $("#flights");
                var codeV = $code.val();
                var nameV = $name.val();
                var toV = $to.val();
                var catV = $cat.val();
                if($.isNumeric(codeV)) {
                    table.append($('<tr>')
                        .append($('<td>')
                            .append(codeV)
                        ).append($('<td>')
                            .append(nameV)
                        ).append($('<td>')
                            .append(toV)
                        ).append($('<td>')
                            .append(catV)
                        )
                    );
                    $(this).dialog("close");
                }else {
                    alert(codeV + "must be numeric.");
                }
            }
            ,
            "Откажи": function() {
                $( this ).dialog("close");
            }
        },
        close: function() {
            $code.val("");
            $name.val("");
            $to.val("");
            $cat.val("");
        }
    });
});