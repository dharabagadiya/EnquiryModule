var wind = {};
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
wind.AddWindServiceValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var wind_address_val = $('#wind_renew_address').val();
        var wind_pincode_val = $('#wind_renew_pincode').val();
        var wind_location_val = $('#txtLocation').val();
        var wind_renew_service_val = $('#wind_renew_service').val();
        var wind_renew_msg_val = $('#wind_renew_msg').val();
        var wind_company_name_val = $('#wind_renew_company_name').val();
        var wind_contact_person_val = $('#wind_renew_contact_person').val();
        var wind_email_val = $('#wind_renew_email').val();
        var wind_mobile_val = $('#wind_renew_mobile').val();

        if (current_slide == 1) {
            if ((wind_address_val == '') || (wind_pincode_val == '') || (wind_location_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!pin_format.test(wind_pincode_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Pin code should be 6 digits');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            }
        }
        if (current_slide == 2) {
            if ($('#wind_ServiceLookingType .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Wind Service');
            }
        }
        if (current_slide == 3) {
            if ($('#wind_TurbineManufacture .option_box.selected').length > 0) {
                $('.error_tooltip').hide();
                next_slide();
            } else {
                $('.error_tooltip').show().find('.error_msg').text('Select one Wind Service');
            }
        }
        if (current_slide == 4) {
            if ((wind_renew_service_val == '') || (wind_renew_msg_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 5) {
            if ((wind_company_name_val == '') || (wind_contact_person_val == '') || (wind_email_val == '') || (wind_mobile_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!email_format.test(wind_email_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Email Id is invalid');
            } else if (!mobile_num_format.test(wind_mobile_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Mobile number is invalid');
            } else {
                $('.error_tooltip').hide();
                wind.AddWindServicesDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    wind.AddWindServiceValidation();
});