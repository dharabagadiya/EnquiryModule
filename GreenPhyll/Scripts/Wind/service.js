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
                window.location.href = "/Bio/ThankYou";
                //window.location.href = "/Offer/Index/Wind";
                //alert("Success");
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
            if (wind_address_val == "" && wind_location_val == "" && wind_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (wind_location_val == "" && wind_pincode_val == "") {
                $("#add123").hide();
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (wind_address_val == "" && wind_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (wind_address_val == "" && wind_location_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").hide();
            }
            else if (wind_address_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").hide();
            }
            else if (wind_location_val == "") {
                $("#loc123").show().text("Please Enter location");
                $("#add123").hide();
                $("#pin123").hide();
            }
            else if (wind_pincode_val == "") {
                $("#loc123").hide();
                $("#add123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (!pin_format.test(wind_pincode_val)) {
                $("#loc123").hide();
                $("#add123").hide();
                $('#pin123').show().text('Pin code should be 6 digits');
            }
            else {
                $("#loc123").hide();
                $("#add123").hide();
                $("#pin123").hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            }
        }
        if (current_slide == 2) {
            if ($('#wind_ServiceLookingType .option_box.selected').length > 0) {
                $('#serviceLooking').hide();
                next_slide();
            } else {
                $('#serviceLooking').show().text('Select one Hydro Service');
            }
        }
        if (current_slide == 3) {
            if ($('#wind_TurbineManufacture .option_box.selected').length > 0) {
                $('#turbineManufacturer').hide();
                next_slide();
            } else {
                $('#turbineManufacturer').show().text('Select wind turbine');
            }
        }
        if (current_slide == 4) {
            if (wind_renew_service_val == "" && wind_renew_msg_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').show().text('Please provide information');
            }
            else if (wind_renew_service_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').hide();
            }
            else if (wind_renew_msg_val == "") {
                $('#serviceMsg').show().text('Please provide information');
                $('#serviceType').hide();
            }
            else {
                $('#serviceMsg').hide();
                $('#serviceType').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 5) {
            if ((wind_company_name_val == '') && (wind_contact_person_val == '') && (wind_email_val == '') && (wind_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((wind_contact_person_val == '') && (wind_email_val == '') && (wind_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((wind_company_name_val == '') && (wind_contact_person_val == '') && (wind_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if ((wind_company_name_val == '') && (wind_mobile_val == '') && (wind_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((wind_company_name_val == '') && (wind_mobile_val == '') && (wind_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((wind_email_val == '') && (wind_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((wind_company_name_val == '') && (wind_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if ((wind_company_name_val == '') && (wind_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (wind_company_name_val == '') {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (wind_contact_person_val == '') {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (wind_email_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if (!email_format.test(wind_email_val)) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Email Id is invalid');
                $('#mobile').hide();
            }
            else if (wind_mobile_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (!mobile_num_format.test(wind_mobile_val)) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Mobile number is invalid');
            }
            else {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').hide();
                $('.divLoader').removeClass('DN');
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