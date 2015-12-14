var bio = {};
bio.AddBioDetail = function () {
    var bioData = {};
    bioData.BioServiceType = $('.BioServiceType').find('.selected').find('.label').text();
    bioData.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    bioData.ApplicantName = $('#txtApplicantName').val();
    bioData.pan = $("#txtPAN").val();
    bioData.cin = $("#txtCIN").val();
    bioData.pincode = $("#txtPincode").val();
    bioData.address = $("#txtAddress").val();
    bioData.ProposedCapacity = $("#txtProposedCapacity").val();
    bioData.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    bioData.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    bioData.CompanyName = $("#txtCompanyName").val();
    bioData.name = $("#txtName").val();
    bioData.mobileNumber = $("#txtMobileNo").val();
    bioData.email = $("#txtEmailBio").val();
    bioData.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Bio/Add",
        async: false,
        data: JSON.stringify(bioData),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                alert("Success");
            } else { }
        }
    });
}
bio.AddBioServicesDetail = function () {
    var bioService = {};
    bioService.Address = $('#bio_renew_address').val();
    bioService.Pincode = $('#bio_renew_pincode').val();
    bioService.ServiceLookingType = $('.ServiceLookingType').find('.selected').find('.label').text() == "Others" ? $('#bio_renew_others').val() : $('.ServiceLookingType').find('.selected').find('.label').text();
    bioService.ServiceRequestType = $('#bio_renew_service').val();
    bioService.ServiceRequestMsg = $('#bio_renew_msg').val();
    bioService.CompanyName = $('#bio_renew_company_name').val();
    bioService.ContactPersonName = $('#bio_renew_contact_person').val();
    bioService.Email = $('#bio_renew_email').val();
    bioService.MobileNo = $('#bio_renew_mobile').val();
    bioService.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Bio/AddServices",
        async: false,
        data: JSON.stringify(bioService),
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
    $('#btnBioSubmit').off("click").on("click", function () { bio.AddBioDetail(); });
    $('#btnBioServices').off('click').on('click', function () { bio.AddBioServicesDetail(); });
});