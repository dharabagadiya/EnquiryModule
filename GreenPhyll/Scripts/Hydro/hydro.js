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
                window.location.href = "/Offer/";
                //alert("Success");
            } else { }
        }
    });
}
hydro.AddHydroValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var hydro_address_val = $('#txtAddress').val();
        var hydro_pincode_val = $('#txtPincode').val();
        var hydro_location_val = $('#txtLocation').val();
        var hydro_applicant_name_val = $('#txtApplicantName').val();
        var hydro_pan = $("#txtPAN").val();
        var hydro_cin = $("#txtCIN").val();
        var hydro_TotalTurbinesPlanned_val = $('#txtTotalTurbinesPlanned').val();
        var hydro_estimated_project_cost_val = $('#txtEstimatedProjectCost').val();
        var hydro_proposed_capacity_val = $('#txtProposedCapacity').val();
        var hydro_turn_over_val = $('#txtAvgLast3yrTurnOver').val();
        var hydro_company_name_val = $('#txtCompanyName').val();
        var hydro_contact_person_val = $('#txtName').val();
        var hydro_email_val = $('#txtEmailHydro').val();
        var hydro_mobile_val = $('#txtMobileNo').val();

        debugger
        if (current_slide == 1) {
            if ($('#hydro_services .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Hydro Service');
            }
        }
        if (current_slide == 2) {
            if ((hydro_applicant_name_val == '') || (hydro_pan == '') || (hydro_cin == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else {
                $('.error_tooltip').hide();
                next_slide();
            }
        }
        if (current_slide == 3) {
            if ((hydro_address_val == '') || (hydro_pincode_val == '') || (hydro_location_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!pin_format.test(hydro_pincode_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Pin code should be 6 digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
            }
        }
        if (current_slide == 4) {
            if ((hydro_proposed_capacity_val == '') || (hydro_estimated_project_cost_val == '') || (hydro_turn_over_val == '' || (hydro_TotalTurbinesPlanned_val == ''))) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (number_only.test(hydro_turn_over_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Average turnover should be digits');
            } else if (number_only.test(hydro_estimated_project_cost_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Estimated cost should be digits');
            } else if (number_only.test(hydro_proposed_capacity_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Capacity of wind plant should be digits');
            } else if (number_only.test(hydro_TotalTurbinesPlanned_val)) {
                $('.error_tooltip').show().find('.error_msg').text('No. of turbines planned should be digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 5) {
            if ((hydro_contact_person_val == '') || (hydro_email_val == '') || (hydro_mobile_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!email_format.test(hydro_email_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Email Id is invalid');
            } else if (!mobile_num_format.test(hydro_mobile_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Mobile number is invalid');
            } else {
                $('.error_tooltip').hide();
                hydro.AddHydroDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    hydro.AddHydroValidation();
});