var solar = {};
solar.AddSolarDetail = function () {
    var solar = {};
    solar.SolarServiceType = $('.SolarServiceType').find('.selected').find('.label').text();
    solar.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    solar.pincode = $("#solar_pincode").val();
    solar.address = $("#solar_address").val();
    solar.Budget = $("#solar_budget").val();
    solar.EquipmentNumber = $("#solar_equipment_number").val();
    solar.Message = $("#solar_renew_msg").val();
    solar.CompanyName = $("#solar_company_name").val();
    solar.name = $("#solar_contact_person").val();
    solar.mobileNumber = $("#solar_mobile").val();
    solar.email = $("#solar_email").val();
    solar.location = $("#solar_location").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Solar/AddSolarEquipments",
        async: false,
        data: JSON.stringify(solar),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                $('.divLoader').addClass('DN');
                window.location.href = "/Offer/Index/Solar Equipment";
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
        var solar_budget = $('#solar_budget').val();
        var solar_equipment_number = $('#solar_equipment_number').val();
        var solar_renew_msg = $('#solar_renew_msg').val();
        var solar_company_name_val = $('#solar_company_name').val();
        var solar_contact_person_val = $('#solar_contact_person').val();
        var solar_email_val = $('#solar_email').val();
        var solar_mobile_val = $('#solar_mobile').val();

        if (current_slide == 1) {
            if ($('#solar_services .option_box.selected').length > 0) {
                $('#equipmentsLooking').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('#equipmentsLooking').show().text('Select one Solar Equipment');
            }
        }
        if (current_slide == 2) {
            if ($('#solar_role .option_box.selected').length > 0) {
                $('#stateWhether').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('#stateWhether').show().text('Select one Option Below');
            }
        }
        if (current_slide == 3) {
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
        if (current_slide == 4) {
            if ((solar_budget == '') && (solar_equipment_number == '') && (solar_renew_msg == '')) {
                $("#budget").show().text("Please Enter Budget");
                $("#noOfEquipements").show().text("Please Enter Total Number of Equipements");
                $("#msg").show().text("Please Please provide information");
            }
            else if (solar_equipment_number == '' && solar_renew_msg == '') {
                $("#budget").hide();
                $("#noOfEquipements").show().text("Please Enter Total Number of Equipements");
                $("#msg").show().text("Please Please provide information");
            }
            else if (solar_budget == '' && solar_equipment_number == '') {
                $("#budget").show().text("Please Enter Budget");
                $("#noOfEquipements").show().text("Please Enter Total Number of Equipements");
                $("#msg").hide();
            }
            else if (solar_budget == '' && solar_renew_msg == '') {
                $("#budget").show().text("Please Enter Budget");
                $("#noOfEquipements").hide();
                $("#msg").show().text("Please Please provide information");
            }
            else if (solar_budget=='') {
                $("#budget").show().text("Please Enter Budget");
                $('#noOfEquipements').hide();
                $('#msg').hide();
            }
            else if (solar_equipment_number == '') {
                $('#budget').hide();
                $("#noOfEquipements").show().text("Please Enter Total Number of Equipements");
                $('#msg').hide();
            }
            else if (solar_renew_msg == '') {
                $('#budget').hide();
                $('#noOfEquipements').hide();
                $("#msg").show().text("Please Please provide information");
            }
            else {
                $('#budget').hide();
                $('#noOfEquipements').hide();
                $('#msg').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
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