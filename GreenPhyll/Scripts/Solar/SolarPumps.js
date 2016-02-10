var solar = {};
solar.AddSolarDetail = function () {
    var solar = {};
    solar.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    solar.pincode = $("#solar_pincode").val();
    solar.address = $("#solar_address").val();
    solar.MonthlyElectricityBill = $("#solar_electricity_bill").val();
    solar.ProposedCapacityKW = $("#solar_capacity").val();
    solar.ShadowFreeArea = $("#solar_farm_area").val();
    solar.CompanyName = $("#solar_company_name").val();
    solar.name = $("#solar_contact_person").val();
    solar.mobileNumber = $("#solar_mobile").val();
    solar.email = $("#solar_email").val();
    solar.location = $("#solar_location").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Solar/AddSolarPumps",
        async: false,
        data: JSON.stringify(solar),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                $('.divLoader').addClass('DN');
                window.location.href = "/Offer/Index/Solar Pump";
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
        var solar_electricity_bill_val = $('#solar_electricity_bill').val();
        var solar_shadow_free_area_val = $('#solar_farm_area').val();
        var solar_capacity_val = $('#solar_capacity').val();
        var solar_company_name_val = $('#solar_company_name').val();
        var solar_contact_person_val = $('#solar_contact_person').val();
        var solar_email_val = $('#solar_email').val();
        var solar_mobile_val = $('#solar_mobile').val();

        if (current_slide == 1) {
            if ($('#solar_role .option_box.selected').length > 0) {
                $('#stateWhether').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('#stateWhether').show().text('Select one Option Below');
            }
        }
        if (current_slide == 2) {
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
        if (current_slide == 3) {
            if ((solar_electricity_bill_val == '') && (solar_shadow_free_area_val == '') && (solar_capacity_val == '')) {
                $('#ebill').show().text('Enter Average Monthly Electricity Bill');
                $('#freeArea').show().text('Enter Shadow free area');
                $('#capacity').show().text('Enter Capacity of Solar power plant');
            }
            else if (solar_shadow_free_area_val == '' && solar_capacity_val == '') {
                $('#ebill').hide();
                $('#freeArea').show().text('Enter Shadow free area');
                $('#capacity').show().text('Enter Capacity of Solar power plant');
            }
            else if (solar_electricity_bill_val == '' && solar_capacity_val == '') {
                $('#ebill').show().text('Enter Average Monthly Electricity Bill');
                $('#freeArea').hide();
                $('#capacity').show().text('Enter Capacity of Solar power plant');
            }
            else if (solar_electricity_bill_val == '' && solar_shadow_free_area_val == '') {
                $('#ebill').show().text('Enter Average Monthly Electricity Bill');
                $('#freeArea').show().text('Enter Shadow free area');
                $('#capacity').hide();
            }
            else if (solar_electricity_bill_val == '') {
                $('#ebill').show().text('Enter Average Monthly Electricity Bill');
                $('#freeArea').hide();
                $('#capacity').hide();
            }
            else if (solar_shadow_free_area_val == '') {
                $('#ebill').hide();
                $('#freeArea').show().text('EnterShadow free area');
                $('#capacity').hide();
            }
            else if (solar_capacity_val == '') {
                $('#ebill').hide();
                $('#freeArea').hide();
                $('#capacity').show().text('Enter Capacity of Solar power plant');
            }
            else {
                $('#ebill').hide();
                $('#freeArea').hide();
                $('#capacity').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 4) {
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