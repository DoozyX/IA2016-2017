$(function() {
    $.widget( "custom.catcomplete", $.ui.autocomplete, {
        _create: function() {
            this._super();
            this.widget().menu( "option", "items", "> :not(.ui-autocomplete-category)" );
        },
        _renderMenu: function( ul, items ) {
            var that = this,
                currentCategory = "";
            $.each( items, function( index, item ) {
                var li;
                if ( item.class != currentCategory ) {
                    ul.append( "<li class='ui-autocomplete-category'>" + item.class + "</li>" );
                    currentCategory = item.class;
                }
                var startRange = $('#fromSearch').datepicker("getDate");
                var endRange = $('#toSearch').datepicker("getDate");;
                if(item.dateFrom.getTime() >= startRange && item.dateFrom.getTime() <= endRange && item.dateTo.getTime() >= startRange && item.dateTo.getTime() <= endRange) {
                    li = that._renderItemData( ul, item );
                    if ( item.class ) {
                        li.attr( "aria-label", item.class + " : " + item.name );
                    }
                }
            });
        }
    });

    function compare(a,b) {
        if (a.class < b.class)
            return -1;
        if (a.class> b.class)
            return 1;
        return 0;
    }

    //all flights
    var flights = [];
    var current = {
        label:"London - Wizz Air",
        class: "Business",
        dateFrom: new Date(2016,10,10),
        dateTo: new Date(2016,10,23)
    };
    flights.push(current);
    //dates
    $( ".datepicker" ).datepicker({
        changeMonth: true,
        changeYear: true,
        duration: "fast",
        showAnim: "fold",
        dateFormat: "dd/mm/yy"
    }).datepicker("setDate", new Date());

    //form
    var $code = $('#code');
    var $name = $('#name');
    var $to = $('#to');
    var $cat = $('#category');
    var $fromDate = $('#fromDate');
    var $toDate = $('#toDate');


    $("#addFlight").click(function() {
        $( "#dialog-form" ).dialog( "open" );
    }).button();

    $( "#dialog-form" ).dialog({
        autoOpen: false,
        height: 600,
        width: 500,
        modal: true,
        buttons: {
            "Додади": function() {
                var table = $("#flights");
                var codeV = $code.val();
                var nameV = $name.val();
                var toV = $to.val();
                var catV = $cat.val();
                var fromDateV = $fromDate.val();
                var toDateV = $toDate.val();
                var fromObj = $fromDate.datepicker("getDate");
                var toOBj = $toDate.datepicker("getDate");

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
                        ).append($('<td>')
                            .append(fromDateV)
                        ).append($('<td>')
                            .append(toDateV)
                        )
                    );
                    current = {
                        label: toV + " - " + nameV,
                        class: catV,
                        dateFrom: fromObj,
                        dateTo: toOBj
                    };
                    flights.push(current);
                    flights.sort(compare);
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
    //AutoComplete
    $( "#search" ).catcomplete({
        delay: 0,
        source: flights
    });
});



