$(function() {
    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        duration: "fast",
        showAnim: "fold",
        dateFormat: "dd/mm/yy"
    });

    $( ".selectable" ).selectable();


    $("#dialog-form" ).dialog({
        autoOpen: false,
        height: 600,
        width: 500,
    });

    $('button').click(function(){
        if(validate()) {
            var $p1 = $('#name');
            var $p2 = $('#surname');
            var $p3 = $('#pw');
            var $p4 = $('#date');
            var name = "<p> Name: " + $p1.val() + "</p>";
            var surname = "<p> Surname: " + $p2.val() + "</p>";
            var pw = "<p> Password: " + $p3.val() + "</p>";
            var date = "<p> DateOfBirth: " + $p4.val() + "</p>";
            var br = "<br>";
            var dialgtext = "<div>" + name + br + surname + br + pw + br + date + br + "</div>";
            $("#dialog-form").html(dialgtext).dialog("open");
        }
        return false;
    });

});

function validate(){
    var valid = true;
    $("#general input").each(function(index, item){
        if( $(item).val().trim() == "" ){
            $(item).css('border', 'solid red');
            $(item).next().show();
            valid = false;
        } else {
            $(item).next().hide();
        }
    });



    return valid;
}
