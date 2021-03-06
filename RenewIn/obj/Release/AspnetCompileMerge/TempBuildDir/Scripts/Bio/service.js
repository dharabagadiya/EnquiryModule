﻿var bio = {};
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
                var formdata = new FormData(); //FormData object
                var fileInput = uploadFile;
                //Iterating through each files selected in fileInput
                for (i = 0; i < fileInput.length; i++) {
                    //Appending each file to FormData object
                    formdata.append(fileInput[i].image.name, fileInput[i].image, "" + fileInput[i].id + ".jpg");
                }
                //Creating an XMLHttpRequest and sending
                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/Bio/ImageUpload', false);
                xhr.send(formdata);
                window.location.href = "/Bio/ThankYou";
                //alert("Success");
            } else { }
        }
    });
}
bio.AddBioServiceValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var bio_address_val = $('#bio_renew_address').val();
        var bio_pincode_val = $('#bio_renew_pincode').val();
        var bio_location_val = $('#txtLocation').val();
        var bio_renew_service_val = $('#bio_renew_service').val();
        var bio_renew_msg_val = $('#bio_renew_msg').val();
        var bio_company_name_val = $('#bio_renew_company_name').val();
        var bio_contact_person_val = $('#bio_renew_contact_person').val();
        var bio_email_val = $('#bio_renew_email').val();
        var bio_mobile_val = $('#bio_renew_mobile').val();

        if (current_slide == 1) {
            if (bio_address_val == "" && bio_location_val == "" && bio_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (bio_location_val == "" && bio_pincode_val == "") {
                $("#add123").hide();
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (bio_address_val == "" && bio_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (bio_address_val == "" && bio_location_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").hide();
            }
            else if (bio_address_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").hide();
            }
            else if (bio_location_val == "") {
                $("#loc123").show().text("Please Enter location");
                $("#add123").hide();
                $("#pin123").hide();
            }
            else if (bio_pincode_val == "") {
                $("#loc123").hide();
                $("#add123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (!pin_format.test(bio_pincode_val)) {
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
            if ($('#service_type .option_box.selected').length > 0) {
                $('#serviceLooking').hide();
                next_slide();
            } else {
                $('#serviceLooking').show().text('Please select an option to proceed');
            }
        }
        if (current_slide == 3) {
            if (bio_renew_service_val == "" && bio_renew_msg_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').show().text('Please provide information');
            }
            else if (bio_renew_service_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').hide();
            }
            else if (bio_renew_msg_val == "") {
                $('#serviceMsg').show().text('Please provide information');
                $('#serviceType').hide();
            }
            else if (bio_renew_service_val.length < 30 || bio_renew_service_val.length > 124) {
                $('#serviceType').show().text('Please enter title of Min 30 Characters to Maximum 124 Characters.');
                $('#serviceMsg').hide();
            }
            else if (bio_renew_msg_val.length < 100 || bio_renew_msg_val.length > 5000) {
                $('#serviceMsg').show().text('We strongly recommend you to write a description of Min 100 characters. This would help in getting you a better response. Max 5000 characters allowed.');
                $('#serviceType').hide();
            }
            else {
                $('#serviceMsg').hide();
                $('#serviceType').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
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
            if ((bio_company_name_val == '') && (bio_contact_person_val == '') && (bio_email_val == '') && (bio_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((bio_contact_person_val == '') && (bio_email_val == '') && (bio_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((bio_company_name_val == '') && (bio_contact_person_val == '') && (bio_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if ((bio_company_name_val == '') && (bio_mobile_val == '') && (bio_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((bio_company_name_val == '') && (bio_mobile_val == '') && (bio_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((bio_email_val == '') && (bio_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((bio_company_name_val == '') && (bio_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if ((bio_company_name_val == '') && (bio_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (bio_company_name_val == '') {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (bio_contact_person_val == '') {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (bio_email_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if (!email_format.test(bio_email_val)) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Email Id is invalid');
                $('#mobile').hide();
            }
            else if (bio_mobile_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (!mobile_num_format.test(bio_mobile_val)) {
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
                bio.AddBioServicesDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    bio.AddBioServiceValidation();
});