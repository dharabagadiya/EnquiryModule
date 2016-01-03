var hydro = {};
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
hydro.AddHydroServiceValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var hydro_address_val = $('#hydro_renew_address').val();
        var hydro_pincode_val = $('#hydro_renew_pincode').val();
        var hydro_location_val = $('#txtLocation').val();
        var hydro_renew_service_val = $('#hydro_renew_service').val();
        var hydro_renew_msg_val = $('#hydro_renew_msg').val();
        var hydro_company_name_val = $('#hydro_renew_company_name').val();
        var hydro_contact_person_val = $('#hydro_renew_contact_person').val();
        var hydro_email_val = $('#hydro_renew_email').val();
        var hydro_mobile_val = $('#hydro_renew_mobile').val();

        debugger
        if (current_slide == 1) {
            if ((hydro_address_val == '') || (hydro_pincode_val == '') || (hydro_location_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!pin_format.test(hydro_pincode_val)) {
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
                $('.error_tooltip').show().find('.error_msg').text('Select one Hydro Service');
            }
        }
        if (current_slide == 3) {
            if ((hydro_renew_service_val == '') || (hydro_renew_msg_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else {
                $('.error_tooltip').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 4) {
            if ((hydro_company_name_val == '') || (hydro_contact_person_val == '') || (hydro_email_val == '') || (hydro_mobile_val == '')) {
                $('.error_tooltip').show().find('.error_msg').text('Enter Required Fields');
            } else if (!email_format.test(hydro_email_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Email Id is invalid');
            } else if (!mobile_num_format.test(hydro_mobile_val)) {
                $('.error_tooltip').show().find('.error_msg').text('Mobile number is invalid');
            } else {
                $('.error_tooltip').hide();
                hydro.AddHydroServicesDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    hydro.AddHydroServiceValidation();
});