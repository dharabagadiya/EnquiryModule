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
                var formdata = new FormData(); //FormData object
                var fileInput = uploadFile;
                //Iterating through each files selected in fileInput
                for (i = 0; i < fileInput.length; i++) {
                    //Appending each file to FormData object
                    formdata.append(fileInput[i].image.name, fileInput[i].image, "" + fileInput[i].id + ".jpg");
                }
                //Creating an XMLHttpRequest and sending
                var xhr = new XMLHttpRequest();
                xhr.open('POST', '/Hydro/ImageUpload', false);
                xhr.send(formdata);
                window.location.href = "/Bio/ThankYou";
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

        if (current_slide == 1) {
            if (hydro_address_val == "" && hydro_location_val == "" && hydro_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (hydro_location_val == "" && hydro_pincode_val == "") {
                $("#add123").hide();
                $("#loc123").show().text("Please Enter location");
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (hydro_address_val == "" && hydro_pincode_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (hydro_address_val == "" && hydro_location_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").show().text("Please Enter location");
                $("#pin123").hide();
            }
            else if (hydro_address_val == "") {
                $("#add123").show().text("Please Enter Address");
                $("#loc123").hide();
                $("#pin123").hide();
            }
            else if (hydro_location_val == "") {
                $("#loc123").show().text("Please Enter location");
                $("#add123").hide();
                $("#pin123").hide();
            }
            else if (hydro_pincode_val == "") {
                $("#loc123").hide();
                $("#add123").hide();
                $("#pin123").show().text("Please Enter pin number");
            }
            else if (!pin_format.test(hydro_pincode_val)) {
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
            if (hydro_renew_service_val == "" && hydro_renew_msg_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').show().text('Please provide information');
            }
            else if (hydro_renew_service_val == "") {
                $('#serviceType').show().text('Please Enter Service you are Looking');
                $('#serviceMsg').hide();
            }
            else if (hydro_renew_msg_val == "") {
                $('#serviceMsg').show().text('Please provide information');
                $('#serviceType').hide();
            }
            else if (hydro_renew_service_val.length < 30 || hydro_renew_service_val.length > 124) {
                $('#serviceType').show().text('Please enter title of  minimum 30 to maximum 124 Characters');
                $('#serviceMsg').hide();
            }
            else if (hydro_renew_msg_val.length < 100 || hydro_renew_msg_val.length > 550) {
                $('#serviceMsg').show().text('Please enter description of minimum 100 to maximum 550 Characters');
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
            if ((hydro_company_name_val == '') && (hydro_contact_person_val == '') && (hydro_email_val == '') && (hydro_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((hydro_contact_person_val == '') && (hydro_email_val == '') && (hydro_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((hydro_company_name_val == '') && (hydro_contact_person_val == '') && (hydro_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if ((hydro_company_name_val == '') && (hydro_mobile_val == '') && (hydro_email_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((hydro_company_name_val == '') && (hydro_mobile_val == '') && (hydro_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((hydro_email_val == '') && (hydro_mobile_val == '')) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((hydro_company_name_val == '') && (hydro_contact_person_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if ((hydro_company_name_val == '') && (hydro_mobile_val == '')) {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (hydro_company_name_val == '') {
                $('#companyName').show().text('Enter Company Name');
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (hydro_contact_person_val == '') {
                $('#companyName').hide();
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (hydro_email_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if (!email_format.test(hydro_email_val)) {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').show().text('Email Id is invalid');
                $('#mobile').hide();
            }
            else if (hydro_mobile_val == '') {
                $('#companyName').hide();
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (!mobile_num_format.test(hydro_mobile_val)) {
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