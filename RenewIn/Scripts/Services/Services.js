var services = {};
$(document).ready(function () {
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
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Services/MapServices",
        async: false,
        data: JSON.stringify(services),
        success: function (data) {
            var status = data;
            if (status == -1) {
                $('#btn_signin').click();
            } else if (status.isRedirect) {
                window.location.href = status.redirectUrl;
                //alert("We will contact you");
            }
        }
    });
});


