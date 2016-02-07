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
wind.AddWindValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var wind_address_val = $('#txtAddress').val();
        var wind_pincode_val = $('#txtPincode').val();
        var wind_location_val = $('#txtLocation').val();
        var wind_applicant_name_val = $('#txtApplicantName').val();
        var wind_pan = $("#txtPAN").val();
        var wind_cin = $("#txtCIN").val();
        var wind_TotalWEGPlanned_val = $('#txtTotalWEGPlanned').val();
        var wind_estimated_project_cost_val = $('#txtEstimatedProjectCost').val();
        var wind_proposed_capacity_val = $('#txtProposedCapacity').val();
        var wind_turn_over_val = $('#txtAvgLast3yrTurnOver').val();
        var wind_company_name_val = $('#txtCompanyName').val();
        var wind_contact_person_val = $('#txtName').val();
        var wind_email_val = $('#txtEmailWind').val();
        var wind_mobile_val = $('#txtMobileNo').val();

        if (current_slide == 1) {
            if ($('#wind_services .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Wind Service');
            }
        }
        if (current_slide == 2) {
            if ((wind_applicant_name_val == '') || (wind_pan == '') || (wind_cin == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else {
                $('.error_tooltip').hide();
                next_slide();
            }
        }
        if (current_slide == 3) {
            if ((wind_address_val == '') || (wind_pincode_val == '') || (wind_location_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!pin_format.test(wind_pincode_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Pin code should be 6 digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
            }
        }
        if (current_slide == 4) {
            if ((wind_proposed_capacity_val == '') || (wind_estimated_project_cost_val == '') || (wind_turn_over_val == '' || (wind_TotalWEGPlanned_val == ''))) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (number_only.test(wind_turn_over_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Average turnover should be digits');
            } else if (number_only.test(wind_estimated_project_cost_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Estimated cost should be digits');
            } else if (number_only.test(wind_proposed_capacity_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Capacity of wind plant should be digits');
            } else if (number_only.test(wind_TotalWEGPlanned_val)) {
                $('.error_tooltip').show().find('.error_msg').text('No. of wind electric generators should be digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 5) {
            if ((wind_contact_person_val == '') || (wind_email_val == '') || (wind_mobile_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!email_format.test(wind_email_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Email Id is invalid');
            } else if (!mobile_num_format.test(wind_mobile_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Mobile number is invalid');
            } else {
                $('.error_tooltip').hide();
                wind.AddWindDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    wind.AddWindValidation();
});