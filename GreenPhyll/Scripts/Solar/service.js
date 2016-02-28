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
                var formdata = new FormData(); //FormData object
                var fileInput = uploadFile;
                //Iterating through each files selected in fileInput
                for (i = 0; i < fileInput.length; i++) {
                    //Appending each file to FormData object
                    formdata.append(fileInput[i].image.name, fileInput[i].image, "" + fileInput[i].id + ".jpg");
                }
                //Creating an XMLHttpRequest and sending
                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/Solar/ImageUpload', false);
                xhr.send(formdata);
                window.location.href = "/Bio/ThankYou";
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
            if (solar_address_val == "" && solar_location_val == "" && solar_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (solar_location_val == "" && solar_pincode_val == "") {
                $("#add123").hide();
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (solar_address_val == "" && solar_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (solar_address_val == "" && solar_location_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").hide();
            }
            else if (solar_address_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").hide();
            }
            else if (solar_location_val == "") {
                $("#loc123").show().text("Please Enter location");
                $("#add123").hide();
                $("#pin123").hide();
            }
            else if (solar_pincode_val == "") {
                $("#loc123").hide();
                $("#add123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (!pin_format.test(solar_pincode_val)) {
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
            if ($('#ServiceLookingType .option_box.selected').length > 0) {
                $('#serviceLooking').hide();
                next_slide();
            } else {
                $('#serviceLooking').show().text('Please select an option to proceed');
            }
        }
        if (current_slide == 3) {
            if (solar_renew_service_val == "" && solar_renew_msg_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').show().text('Please provide information');
            }
            else if (solar_renew_service_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').hide();
            }
            else if (solar_renew_msg_val == "") {
                $('#serviceMsg').show().text('Please provide information');
                $('#serviceType').hide();
            }
            else if (solar_renew_service_val.length < 30 || solar_renew_service_val.length > 124) {
                $('#serviceType').show().text('Please enter title of Min 30 Characters to Maximum 124 Characters.');
                $('#serviceMsg').hide();
            }
            else if (solar_renew_msg_val.length < 100 || solar_renew_msg_val.length > 5000) {
                $('#serviceMsg').show().text('We strongly recommend you to write a description of Min 100 characters. This would help in getting you a better response. Max 5000 characters allowed.');
                $('#serviceType').hide();
            }
            else {
                $('#serviceMsg').hide();
                $('#serviceType').hide();
                next_slide();
            }
        }
        if (current_slide == 4) {
            next_slide();
            var indexValueOfArray = $('input:radio[name=new_img]:checked').parents('.add_photos').index();
            for (var i = 0; i < uploadFile.length; i++) {
                if (indexValueOfArray == i) {
                    uploadFile[i].id = 1
                }
                else
                    uploadFile[i].id = 0
            }
            $('.next_slide').addClass('disabled');
        }
        if (current_slide == 5) {
            if ((solar_company_name_val == '') && (solar_contact_person_val == '') && (solar_email_val == '') && (solar_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((solar_contact_person_val == '') && (solar_email_val == '') && (solar_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((solar_company_name_val == '') && (solar_contact_person_val == '') && (solar_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if ((solar_company_name_val == '') && (solar_mobile_val == '') && (solar_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((solar_company_name_val == '') && (solar_mobile_val == '') && (solar_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((solar_email_val == '') && (solar_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((solar_company_name_val == '') && (solar_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if ((solar_company_name_val == '') && (solar_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (solar_company_name_val == '') {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (solar_contact_person_val == '') {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (solar_email_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if (!email_format.test(solar_email_val)) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Email Id is invalid');
                $('#mobile').hide();
            }
            else if (solar_mobile_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (!mobile_num_format.test(solar_mobile_val)) {
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