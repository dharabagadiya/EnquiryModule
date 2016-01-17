var solar = {};
solar.AddSolarDetail = function () {
    var solar = {};
    solar.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    solar.pincode = $("#solar_pincode").val();
    solar.address = $("#solar_address").val();
    solar.EstimatedCost = $("#estimated_SolPark_Cost").val();
    solar.ProposedCapacityKW = $("#solar_park_capacity").val();
    solar.ShadowFreeArea = $("#shadow_free_area_for_SolPark").val();
    solar.CompanyName = $("#solar_company_name").val();
    solar.name = $("#solar_contact_person").val();
    solar.mobileNumber = $("#solar_mobile").val();
    solar.email = $("#solar_email").val();
    solar.location = $("#solar_location").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Solar/AddSolarPark",
        async: false,
        data: JSON.stringify(solar),
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
solar.AddSolarValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var solar_address_val = $('#solar_address').val();
        var solar_pincode_val = $('#solar_pincode').val();
        var solar_location_val = $('#solar_location').val();
        var estimated_SolPark_Cost = $('#estimated_SolPark_Cost').val();
        var solar_shadow_free_area_val = $('#shadow_free_area_for_SolPark').val();
        var solar_capacity_val = $('#solar_park_capacity').val();
        var solar_company_name_val = $('#solar_company_name').val();
        var solar_contact_person_val = $('#solar_contact_person').val();
        var solar_email_val = $('#solar_email').val();
        var solar_mobile_val = $('#solar_mobile').val();

        if (current_slide == 1) {
            if ($('#solar_role .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Option Below');
            }
        }
        if (current_slide == 2) {
            if ((solar_address_val == '') || (solar_pincode_val == '') || (solar_location_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!pin_format.test(solar_pincode_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Pin code should be 6 digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
            }
        }
        if (current_slide == 3) {
            if ((estimated_SolPark_Cost == '') || (solar_shadow_free_area_val == '') || (solar_capacity_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (number_only.test(estimated_SolPark_Cost)) {
                $('.error_tooltip').show().find('.error_msg').text('Estimated Project Cost should be digits');
            } else if (number_only.test(solar_shadow_free_area_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Shadow free area should be digits');
            } else if (number_only.test(solar_capacity_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Capacity of solar plant should be digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 4) {
            if ((solar_company_name_val == '') || (solar_contact_person_val == '') || (solar_email_val == '') || (solar_mobile_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!email_format.test(solar_email_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Email Id is invalid');
            } else if (!mobile_num_format.test(solar_mobile_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Mobile number is invalid');
            } else {
                $('.error_tooltip').hide();
                solar.AddSolarDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    solar.AddSolarValidation();
});