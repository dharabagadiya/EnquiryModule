var hydro = {};
hydro.AddHydroDetail = function () {
    var hydroData = {};
    hydroData.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    hydroData.pincode = $("#txtPincode").val();
    hydroData.address = $("#txtAddress").val();
    hydroData.ApplicantName = $("#txtApplicantName").val();
    hydroData.pan = $("#txtPAN").val();
    hydroData.cin = $("#txtCIN").val();
    hydroData.TotalTurbinesPlanned = $("#txtTotalTurbinesPlanned").val();
    hydroData.ProposedCapacity = $("#txtProposedCapacity").val();
    hydroData.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    hydroData.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    hydroData.name = $("#txtName").val();
    hydroData.mobileNumber = $("#txtMobileNo").val();
    hydroData.email = $("#txtEmailHydro").val();
    hydroData.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Hydro/Add",
        async: false,
        data: JSON.stringify(hydroData),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                alert("Success");
            } else { }
        }
    });
}
hydro.AddHydroServicesDetail = function () {
    var hydroService = {};
    hydroService.Address = $('#hydro_renew_address').val();
    hydroService.Pincode = $('#hydro_renew_pincode').val();
    hydroService.ServiceLookingType = $('.ServiceLookingType').find('.selected').find('.label').text() == "Others" ? $('#hydro_renew_others').val() : $('.ServiceLookingType').find('.selected').find('.label').text();
    hydroService.ServiceRequestType = $('#hydro_renew_service').val();
    hydroService.ServiceRequestMsg = $('#hydro_renew_msg').val();
    hydroService.CompanyName = $('#hydro_renew_company_name').val();
    hydroService.ContactPersonName = $('#hydro_renew_contact_person').val();
    hydroService.Email = $('#hydro_renew_email').val();
    hydroService.MobileNo = $('#hydro_renew_mobile').val();
    hydroService.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Hydro/AddServices",
        async: false,
        data: JSON.stringify(hydroService),
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
    $('#btnHydroSubmit').off("click").on("click", function () { hydro.AddHydroDetail(); });
    $('#btnHydroServices').off('click').on('click', function () { hydro.AddHydroServicesDetail(); });
});