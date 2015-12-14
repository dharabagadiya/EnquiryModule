var solar = {};
solar.AddSolarDetail = function () {
    var solar = {};
    solar.SolarServiceType = $('.SolarServiceType').find('.selected').find('.label').text();
    solar.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    solar.pincode = $("#txtPincode").val();
    solar.address = $("#txtAddress").val();
    solar.MonthlyElectricityBill = $("#txtMonthlyElectricityBill").val();
    solar.ProposedCapacityKW = $("#txtProposedCapacityKW").val();
    solar.ShadowFreeArea = $("#txtShadowFreeArea").val();
    solar.IntallationReqForm = $("#txtIntallationReqForm").val();
    solar.CompanyName = $("#txtCompanyName").val();
    solar.name = $("#txtName").val();
    solar.mobileNumber = $("#txtMobileNo").val();
    solar.email = $("#txtEmailEnquiry1").val();
    solar.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Solar/Add",
        async: false,
        data: JSON.stringify(solar),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                alert("Success");
            } else { }
        }
    });
}
solar.AddSolarServicesDetail = function () {
    var solarService = {};
    solarService.Address = $('#solar_renew_address').val();
    solarService.Pincode = $('#solar_renew_pincode').val();
    solarService.ServiceLookingType = $('.ServiceLookingType').find('.selected').find('.label').text() == "Others" ? $('#solar_renew_others').val() : $('.ServiceLookingType').find('.selected').find('.label').text();
    solarService.ServiceRequestType = $('#solar_renew_service').val();
    solarService.ServiceRequestMsg = $('#solar_renew_msg').val();
    solarService.CompanyName = $('#solar_renew_company_name').val();
    solarService.ContactPersonName = $('#solar_renew_contact_person').val();
    solarService.Email = $('#solar_renew_email').val();
    solarService.MobileNo = $('#solar_renew_mobile').val();
    solarService.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Solar/AddServices",
        async: false,
        data: JSON.stringify(solarService),
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
    $('#btnSolarSubmit').off("click").on("click", function () { solar.AddSolarDetail(); });
    $('#btnSolarServices').off('click').on('click', function () { solar.AddSolarServicesDetail(); });
});