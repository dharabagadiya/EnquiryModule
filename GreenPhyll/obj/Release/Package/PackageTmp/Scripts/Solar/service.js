var solar = {};
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
solar.AddSolarServiceValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var solar_address_val = $('#solar_renew_address').val();
        var solar_pincode_val = $('#solar_renew_pincode').val();
        var solar_location_val = $('#txtLocation').val();
        var solar_renew_service_val = $('#solar_renew_service').val();
        var solar_renew_msg_val = $('#solar_renew_msg').val();
        var solar_company_name_val = $('#solar_renew_company_name').val();
        var solar_contact_person_val = $('#solar_renew_contact_person').val();
        var solar_email_val = $('#solar_renew_email').val();
        var solar_mobile_val = $('#solar_renew_mobile').val();

        if (current_slide == 1) {
            if ((solar_address_val == '') || (solar_pincode_val == '') || (solar_location_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!pin_format.test(solar_pincode_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Pin code should be 6 digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            }
        }
        if (current_slide == 2) {
            if ($('#ServiceLookingType .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Solar Service');
            }
        }
        if (current_slide == 3) {
            if ((solar_renew_service_val == '') || (solar_renew_msg_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
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
                solar.AddSolarServicesDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    solar.AddSolarServiceValidation();
});