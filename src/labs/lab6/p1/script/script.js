$(function() {
    var $error = $(".error");
    var $pass = $('#password');
    var $repPass = $('#repeatPW');
    $error.hide();
    var password;

    function checkPassword(pw) {
        if (pw.length >= 6) {
            return /^[a-zA-Z0-9- ]*$/.test(pw) != true;

        }
        return false;
    }
    $( "#dialog-form" ).dialog({
        autoOpen: true,
        width: 500,
        modal: true,
        closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        },
        buttons: {
            "Ok": function() {
                var passV = $pass.val();
                var repPassV = $repPass.val();
                if(checkPassword(passV)) {
                    if(passV == repPassV) {
                        $error.hide();
                        $pass.val("");
                        $repPass.val("");
                        password = passV;
                        $(this).dialog("close");
                    }else {
                        $error.show();
                    }
                }else {
                    $error.show();
                }
            }
        }
    });
    $( "#dialog-insert" ).dialog({
        autoOpen: false,
        width: 500,
        modal: true,
        closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        },
    });
    $( "#dialog-password" ).dialog({
        autoOpen: false,
        width: 500,
        modal: true,
        closeOnEscape: false,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog | ui).hide();
        },
        buttons: {
            "Ok": function() {
                var passV = $('#passwordCheck').val();
                if(password == passV) {
                    $('#passwordCheck').val("");
                    $('#to').val("");
                    $('#cc').val("");
                    $('#subject').val("");
                    $('.content').text("");
                    $(this).dialog("close");
                    alert("Message sent!")
                }else {
                    $error.show();
                }
            }
        }
    });
    $("#insert2").click(function () {
        var to = $('#to').val();
        $('#toContent').text(to);
        var cc = $('#cc').val();
        $('#ccContent').text(cc);
        var subj = $('#subject').val();
        $('#subjectContent').text(subj);
        $("#dialog-insert" ).dialog("open");
    });
    $('#clear').click(function () {
        $('#description').val("");
    });
    $('#insert').click(function () {
        var desc = $('#description').val();
        $('.content').text(desc);
        $("#dialog-insert" ).dialog("close");
    })
    $('#send').click(function () {
        $( "#dialog-password" ).dialog("open");
    })
});