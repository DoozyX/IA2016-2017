$(document).ready(function () {
    $('.memoryValue').hide();
    var chooses = 0;
    var temp1 = 0;
    var temp2 = 0;
    var correct = 0;
    function toggleFeild(element) {
        $(element).children('.memoryValue').toggle();
        $(element).children('.memoryName').toggle();
        $(element).children('.memoryValue').css('font-size','20px');
        $(element).toggleClass('selected');
    }
    function checkValue(element) {
        return $(element).children('.memoryValue').text();
    }
    $('.memoryField').click(function () {
        if(correct < 8) {
            if (chooses == 2) {
                if (checkValue(temp1) != checkValue(temp2)) {
                    toggleFeild(temp1);
                    toggleFeild(temp2);
                }else if (temp1 != temp2) {
                    $(temp1).addClass('final');
                    $(temp2).addClass('final');
                }
                temp1 = 0;
                temp2 = 0;
                chooses = 0;
            }
            ++chooses;
            if (temp1 == 0) {
                if (!$(this).hasClass('final')){
                    temp1 = this;
                }
            }else if (temp2 == 0) {
                if (!$(this).hasClass('final')){
                    temp2 = this;
                }
                if (checkValue(temp1) == checkValue(temp2) && temp1 != temp2) {
                    ++correct;
                    if (correct == 8) {
                        alert("You won!")
                        $('.memoryField').removeClass('selected').removeClass('final');
                        $('.memoryValue').hide();
                        $('.memoryName').show();
                        temp1 = 0;
                        temp2 = 0;
                        correct = 0;
                        toggleFeild(this);
                    }
                }
            }
            if (!$(this).hasClass('final')) {
                toggleFeild(this);
            }
        } else {

        }

    })
});
