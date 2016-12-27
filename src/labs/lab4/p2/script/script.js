$(document).ready(function () {
    $( "#datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        duration: "fast",
        showAnim: "fold",
        dateFormat: "d MM yy",
        beforeShowDay: function(date) {
            var valid = true;
            var total = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
            if (total % 2 == 0) {
                valid = (date.getDate() % 2 != 0);
            }else {
                valid = (date.getDate() % 2 == 0);
            }
            return [valid, ""]
        }
    });
});