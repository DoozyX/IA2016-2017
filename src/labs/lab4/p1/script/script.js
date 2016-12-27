$(function() {
    $("#effect").change(function(){
        $( document ).tooltip({
            show: {
                effect: $( "#effect" ).val(),
                delay: 50
            },
            position: {
                my: "center bottom-20",
                at: "left top",
                using: function( position, feedback ) {
                    $( this ).css( position );
                    $( "<div>" )
                        .addClass( "arrow" )
                        .addClass( feedback.vertical )
                        .addClass( feedback.horizontal )
                        .appendTo( this );
                }
            }
        })
    })
});