var wind = {};
wind.AddWindDetail = function () {
    var wind = {};
    wind.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    wind.pincode = $("#txtPincode").val();
    wind.address = $("#txtAddress").val();
    wind.ApplicantName = $("#txtApplicantName").val();
    wind.pan = $("#txtPAN").val();
    wind.cin = $("#txtCIN").val();
    wind.TotalWEGPlanned = $("#txtTotalWEGPlanned").val();
    wind.ProposedCapacity = $("#txtProposedCapacity").val();
    wind.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    wind.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    wind.name = $("#txtName").val();
    wind.mobileNumber = $("#txtMobileNo").val();
    wind.email = $("#txtEmailWind").val();
    wind.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Wind/Add",
        async: false,
        data: JSON.stringify(wind),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                alert("Success");
            } else { }
        }
    });
}
wind.AddWindServicesDetail = function () {
    var windService = {};
    windService.Address = $('#wind_renew_address').val();
    windService.Pincode = $('#wind_renew_pincode').val();
    windService.ServiceLookingType = $('.ServiceLookingType').find('.selected').find('.label').text() == "Others" ? $('#wind_renew_others').val() : $('.ServiceLookingType').find('.selected').find('.label').text();
    windService.TurbineManufacture = $('.TurbineManufacture').find('.selected').find('.label').text() == "Others" ? $('#wind_staff_other').val() : $('.TurbineManufacture').find('.selected').find('.label').text();
    windService.ServiceRequestType = $('#wind_renew_service').val();
    windService.ServiceRequestMsg = $('#wind_renew_msg').val();
    windService.CompanyName = $('#wind_renew_company_name').val();
    windService.ContactPersonName = $('#wind_renew_contact_person').val();
    windService.Email = $('#wind_renew_email').val();
    windService.MobileNo = $('#wind_renew_mobile').val();
    windService.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Wind/AddServices",
        async: false,
        data: JSON.stringify(windService),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                alert("Success");
            } else { }
        }
    });
}
$(document).ready(function () {
    $('#btnWindSubmit').off("click").on("click", function () { wind.AddWindDetail(); });
    $('#btnWindServices').off('click').on('click', function () { wind.AddWindServicesDetail(); });
});