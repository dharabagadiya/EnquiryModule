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
                window.location.href = "/Offer/";
                //alert("Success");
            } else { }
        }
    });
}
bio.AddBioValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var bio_address_val = $('#txtAddress').val();
        var bio_pincode_val = $('#txtPincode').val();
        var bio_location_val = $('#txtLocation').val();
        var bio_applicant_name_val = $('#txtApplicantName').val();
        var bio_pan = $("#txtPAN").val();
        var bio_cin = $("#txtCIN").val();
        var bio_estimated_project_cost_val = $('#txtEstimatedProjectCost').val();
        var bio_proposed_capacity_val = $('#txtProposedCapacity').val();
        var bio_turn_over_val = $('#txtAvgLast3yrTurnOver').val();
        var bio_company_name_val = $('#txtCompanyName').val();
        var bio_contact_person_val = $('#txtName').val();
        var bio_email_val = $('#txtEmailBio').val();
        var bio_mobile_val = $('#txtMobileNo').val();

        if (current_slide == 1) {
            if ($('#bio_services .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Bio Service');
            }
        }
        if (current_slide == 2) {
            if ($('#bio_role .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Option Below');
            }
        }
        if (current_slide == 3) {
            if ((bio_applicant_name_val == '') || (bio_pan == '') || (bio_cin == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else {
                $('.error_tooltip').hide();
                next_slide();
            }
        }
        if (current_slide == 4) {
            if ((bio_address_val == '') || (bio_pincode_val == '') || (bio_location_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!pin_format.test(bio_pincode_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Pin code should be 6 digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
            }
        }
        if (current_slide == 5) {
            if ((bio_proposed_capacity_val == '') || (bio_estimated_project_cost_val == '') || (bio_turn_over_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (number_only.test(bio_turn_over_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Average turnover should be digits');
            } else if (number_only.test(bio_estimated_project_cost_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Estimated cost should be digits');
            } else if (number_only.test(bio_proposed_capacity_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Capacity of bio plant should be digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 6) {
            if ((bio_company_name_val == '') || (bio_contact_person_val == '') || (bio_email_val == '') || (bio_mobile_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!email_format.test(bio_email_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Email Id is invalid');
            } else if (!mobile_num_format.test(bio_mobile_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Mobile number is invalid');
            } else {
                $('.error_tooltip').hide();
                bio.AddBioDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    bio.AddBioValidation();
});