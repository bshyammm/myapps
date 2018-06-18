$(document).ready(function() {
    var tableRowId = 0;
    $("#add_row").on("click", function() {
        // Dynamic Rows Code

        // Get max row id and set new id

        $.each($("#tr"), function() {
            if (parseInt($(this).data("id")) > tableRowId) {
                tableRowId = parseInt($(this).data("id"));
            }
        });
        tableRowId++;

        var tr = $("<tr></tr>", {
            id: "addr"+tableRowId,
            "data-id": tableRowId
        });

        // loop through each td and create new elements with name of tableRowId
        $.each($("#tab_logic tbody tr:nth(0) td"), function() {
            var cur_td = $(this);

            var children = cur_td.children();

            // add new td and element if it has a nane
            if ($(this).data("name") != undefined) {
                var td = $("<td></td>", {
                    "data-name": $(cur_td).data("name")
                });

                var c = $(cur_td).find($(children[0]).prop('tagName')).clone().val("");
                c.attr("name", $(cur_td).data("name") + tableRowId);
                c.appendTo($(td));
                td.appendTo($(tr));
            } else {
                var td = $("<td></td>", {
                    'text': $('#tab_logic tr').length
                }).appendTo($(tr));
            }
        });

        // add delete button and td
        /*
        $("<td></td>").append(
            $("<button class='btn btn-danger glyphicon glyphicon-remove row-remove'></button>")
                .click(function() {
                    $(this).closest("tr").remove();
                })
        ).appendTo($(tr));
        */

        // add the new row
        $(tr).appendTo($('#tab_logic'));

        $(tr).find("td button.row-remove").on("click", function() {
             $(this).closest("tr").remove();
        });
});




    // Sortable Code
    var fixHelperModified = function(e, tr) {
        var $originals = tr.children();
        var $helper = tr.clone();

        $helper.children().each(function(index) {
            $(this).width($originals.eq(index).width())
        });

        return $helper;
    };

    $(".table-sortable tbody").sortable({
        helper: fixHelperModified
    }).disableSelection();

    $(".table-sortable thead").disableSelection();



    $("#add_row").trigger("click");

    //add choice button click
    var next = 1;
    $(".add-more").click(function(e){
        console.log("inside add-more click function");
        console.log(tableRowId);
        e.preventDefault();
        var addto = "#option" + next;
        var addRemove = "#option" + (next);

        next = next + 1;
        console.log(next);
        var newIn = '<input class="input-append" id="option' + tableRowId + next + '" name="option' + tableRowId + next + '" type="text" placeholder="Add choice">';
        var newInput = $(newIn);
        var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me" >-</button></div><div id="field"></div>';
        var removeButton = $(removeBtn);
        //$(addto).after(newInput);
        //$(addRemove).after(removeButton);
        $(this).before(newInput);
        $(this).before(removeButton);

        console.log($(addto));

        $("#option" + next).attr('data-source',$(addto).attr('data-source'));
        $("#count").val(next);

            $('.remove-me').click(function(e){
                e.preventDefault();
                var fieldNum = this.id.charAt(this.id.length-1);
                var fieldID = "#option" + tableRowId + fieldNum;
                $(this).remove();
                $(fieldID).remove();
            });
    });
});
