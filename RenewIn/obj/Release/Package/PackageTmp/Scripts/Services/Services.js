﻿var services = {};
$(document).ready(function () {
    $(".account1").click(function () {
        var X = $(this).attr('id');
        if (X == 1) {
            $(".submenu1").hide();
            $(this).attr('id', '0');
        }
        else {
            $(".submenu1").show();
            $(this).attr('id', '1');
        }
    });
    $(".submenu1").mouseup(function () { return false });
    $(".account1").mouseup(function () { return false });
    $(document).mouseup(function () {
        $(".submenu1").hide();
        $(".account1").attr('id', '');
    });
    $('#btnSearch').off('click').on('click', function () {
        var searchTxt = $('#edit-search').val();
        var category = $('#ddlCategory').val();
        window.location.href = '/Services/Search/' + category + '/' + searchTxt;
    })
});

$('.feedback_btn').click(function () {
    services.ServiceType = $(this).attr("data-service-type");
    services.ServiceId = parseInt($(this).attr("data-service-id"));
    $.ajax({
        dataType: "html",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Services/MapServices",
        async: false,
        data: JSON.stringify(services),
        success: function (data) {
            var status = data;
            if (status == -1) {
                $('#btn_signin').click();
            } else {
                alert("We will contact you");
            }
        }
    });
});


