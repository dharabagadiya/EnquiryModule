var wind = {};
wind.AddWindDetail = function () {
    var wind = {};
    wind.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    wind.pincode = $("#txtPincode").val();
    wind.address = $("#txtAddress").val();
    wind.ApplicantName = $("#txtApplicantName").val();
    wind.pan = $("#txtPAN").val();
    wind.cin = $("#txtCIN").val();
    wind.TotalWEGPlanned = $("#txtTotalWEGPlanned").val();
    wind.ProposedCapacity = $("#txtProposedCapacity").val();
    wind.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    wind.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    wind.name = $("#txtName").val();
    wind.mobileNumber = $("#txtMobileNo").val();
    wind.email = $("#txtEmailWind").val();
    wind.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Wind/Add",
        async: false,
        data: JSON.stringify(wind),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                $('.divLoader').addClass('DN');
                window.location.href = "/Offer/Index/Wind";
                //alert("Success");
            } else { }
        }
    });
}
wind.AddWindValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var wind_address_val = $('#txtAddress').val();
        var wind_pincode_val = $('#txtPincode').val();
        var wind_location_val = $('#txtLocation').val();
        var wind_applicant_name_val = $('#txtApplicantName').val();
        var wind_pan = $("#txtPAN").val();
        var wind_cin = $("#txtCIN").val();
        var wind_TotalWEGPlanned_val = $('#txtTotalWEGPlanned').val();
        var wind_estimated_project_cost_val = $('#txtEstimatedProjectCost').val();
        var wind_proposed_capacity_val = $('#txtProposedCapacity').val();
        var wind_turn_over_val = $('#txtAvgLast3yrTurnOver').val();
        var wind_company_name_val = $('#txtCompanyName').val();
        var wind_contact_person_val = $('#txtName').val();
        var wind_email_val = $('#txtEmailWind').val();
        var wind_mobile_val = $('#txtMobileNo').val();

        if (current_slide == 1) {
            if ($('#wind_services .option_box.selected').length > 0) {
                $('#stateWhether').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('#stateWhether').show().text('Select one Wind Service');
            }
        }
        if (current_slide == 2) {
            if ((wind_applicant_name_val == '') && (wind_pan == '') && (wind_cin == '')) {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').show().text('Enter PAN');
                $('#CIN').show().text('Enter CIN');
            }
            else if (wind_pan == '' && wind_cin == '') {
                $('#nameOfApplicant').hide();
                $('#PAN').show().text('Enter PAN');
                $('#CIN').show().text('Enter CIN');
            }
            else if (wind_applicant_name_val == '' && wind_cin == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').hide();
                $('#CIN').show().text('Enter CIN');
            }
            else if (wind_applicant_name_val == '' && wind_pan == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').show().text('Enter PAN');
                $('#CIN').hide();
            }
            else if (wind_applicant_name_val == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').hide();
                $('#CIN').hide();
            }
            else if (wind_pan == '') {
                $('#nameOfApplicant').hide();
                $('#PAN').show().text('Enter PAN');
                $('#CIN').hide();
            }
            else if (wind_cin == '') {
                $('#nameOfApplicant').hide();
                $('#PAN').hide();
                $('#CIN').show().text('Enter CIN');
            }
            else {
                $('#nameOfApplicant').hide();
                $('#PAN').hide();
                $('#CIN').hide();
                next_slide();
            }
        }
        if (current_slide == 3) {
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
        if (current_slide == 4) {
            if (wind_TotalWEGPlanned_val == '' && wind_proposed_capacity_val == '' && wind_estimated_project_cost_val == '' && wind_turn_over_val == '') {
                $('#turbines').show().text('Enter No. of wind electric generators (WEG)');
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (wind_proposed_capacity_val == '' && wind_estimated_project_cost_val == '' && wind_turn_over_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (wind_TotalWEGPlanned_val == '' && wind_proposed_capacity_val == '' && wind_estimated_project_cost_val == '') {
                $('#turbines').show().text('Enter No. of wind electric generators (WEG)');
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (wind_TotalWEGPlanned_val == '' && wind_estimated_project_cost_val == '' && wind_turn_over_val == '') {
                $('#turbines').show().text('Enter No. of wind electric generators (WEG)');
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (wind_TotalWEGPlanned_val == '' && wind_proposed_capacity_val == '' && wind_turn_over_val == '') {
                $('#turbines').show().text('Enter No. of wind electric generators (WEG)');
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').hide();
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (wind_estimated_project_cost_val == '' && wind_turn_over_val == '') {
                $('#turbines').hide();
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (wind_proposed_capacity_val == '' && wind_turn_over_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').hide();
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (wind_proposed_capacity_val == '' && wind_estimated_project_cost_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (wind_TotalWEGPlanned_val == '' && wind_proposed_capacity_val == '') {
                $('#turbines').show().text('Enter No. of wind electric generators (WEG)');
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').hide();
                $('#turnover').hide();
            }
            else if (wind_TotalWEGPlanned_val == '') {
                $('#turbines').show().text('Enter No. of wind electric generators (WEG)');
                $('#capacity').hide();
                $('#cost').hide();
                $('#turnover').hide();
            }
            else if (wind_proposed_capacity_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the wind project');
                $('#cost').hide();
                $('#turnover').hide();
            }
            else if (wind_estimated_project_cost_val == '') {
                $('#turbines').hide();
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (wind_turn_over_val == '') {
                $('#turbines').hide();
                $('#capacity').hide();
                $('#cost').hide();
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else {
                $('#turbines').hide();
                $('#capacity').hide();
                $('#cost').hide();
                $('#turnover').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 5) {
            if (wind_contact_person_val == '' && wind_email_val == '' && wind_mobile_val == '') {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((wind_contact_person_val == '') && (wind_email_val == '')) {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if ((wind_mobile_val == '') && (wind_email_val == '')) {
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((wind_mobile_val == '') && (wind_contact_person_val == '')) {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (wind_contact_person_val == '') {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (wind_email_val == '') {
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if (wind_mobile_val == '') {
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (!email_format.test(wind_email_val)) {
                $('#contactName').hide();
                $('#email').show().text('Email Id is invalid');
                $('#mobile').hide();
            }
            else if (!mobile_num_format.test(wind_mobile_val)) {
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Mobile number is invalid');
            }
            else {
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').hide();
                $('.divLoader').removeClass('DN');
                wind.AddWindDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    wind.AddWindValidation();
});