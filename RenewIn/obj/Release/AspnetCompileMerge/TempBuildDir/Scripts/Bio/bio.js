var bio = {};
bio.AddBioDetail = function () {
    var bioData = {};
    bioData.BioServiceType = $('.BioServiceType').find('.selected').find('.label').text();
    bioData.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    bioData.ApplicantName = $('#txtApplicantName').val();
    bioData.pan = $("#txtPAN").val();
    bioData.cin = $("#txtCIN").val();
    bioData.pincode = $("#txtPincode").val();
    bioData.address = $("#txtAddress").val();
    bioData.ProposedCapacity = $("#txtProposedCapacity").val();
    bioData.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    bioData.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    bioData.CompanyName = $("#txtCompanyName").val();
    bioData.name = $("#txtName").val();
    bioData.mobileNumber = $("#txtMobileNo").val();
    bioData.email = $("#txtEmailBio").val();
    bioData.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Bio/Add",
        async: false,
        data: JSON.stringify(bioData),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                $('.divLoader').addClass('DN');
                window.location.href = "/Offer/Index/Bio";
                //alert("Success");
            } else { }
        }
    });
}
bio.AddBioValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var bio_address_val = $('#txtAddress').val();
        var bio_pincode_val = $('#txtPincode').val();
        var bio_location_val = $('#txtLocation').val();
        var bio_applicant_name_val = $('#txtApplicantName').val();
        var bio_pan = $("#txtPAN").val();
        var bio_cin = $("#txtCIN").val();
        var bio_estimated_project_cost_val = $('#txtEstimatedProjectCost').val();
        var bio_proposed_capacity_val = $('#txtProposedCapacity').val();
        var bio_turn_over_val = $('#txtAvgLast3yrTurnOver').val();
        var bio_company_name_val = $('#txtCompanyName').val();
        var bio_contact_person_val = $('#txtName').val();
        var bio_email_val = $('#txtEmailBio').val();
        var bio_mobile_val = $('#txtMobileNo').val();

        if (current_slide == 1) {
            if ($('#bio_services .option_box.selected').length > 0) {
                $('#bioType').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('#bioType').show().text('Please select an option to proceed');
            }
        }
        if (current_slide == 2) {
            if ($('#bio_role .option_box.selected').length > 0) {
                $('#stateWhether').hide();
                next_slide();
            } else {
                $('#stateWhether').show().text('Please select an option to proceed');
            }
        }
        if (current_slide == 3) {
            if ((bio_applicant_name_val == '') && (bio_pan == '') && (bio_cin == '')) {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').show().text('Enter PAN');
                $('#CIN').show().text('Enter CIN');
            }
            else if (bio_pan == '' && bio_cin == '') {
                $('#nameOfApplicant').hide();
                $('#PAN').show().text('Enter PAN');
                $('#CIN').show().text('Enter CIN');
            }
            else if (bio_applicant_name_val == '' && bio_cin == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').hide();
                $('#CIN').show().text('Enter CIN');
            }
            else if (bio_applicant_name_val == '' && bio_pan == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').show().text('Enter PAN');
                $('#CIN').hide();
            }
            else if (bio_applicant_name_val == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').hide();
                $('#CIN').hide();
            }
            else if (bio_pan == '') {
                $('#nameOfApplicant').hide();
                $('#PAN').show().text('Enter PAN');
                $('#CIN').hide();
            }
            else if (!pan_format.test(bio_pan)) {
                $('#nameOfApplicant').hide();
                $('#PAN').show().text('Please enter your correct PAN Number');
                $('#CIN').hide();
            }
            else if (bio_cin == '') {
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
        if (current_slide == 4) {
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
        if (current_slide == 5) {
            if ((bio_proposed_capacity_val == '') && (bio_estimated_project_cost_val == '') && (bio_turn_over_val == '')) {
                $('#capacity').show().text('Enter Capacity of the bio project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (bio_estimated_project_cost_val == '' && bio_turn_over_val == '') {
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (bio_proposed_capacity_val == '' && bio_turn_over_val == '') {
                $('#capacity').show().text('Enter Capacity of the bio project');
                $('#cost').hide();
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (bio_proposed_capacity_val == '' && bio_estimated_project_cost_val=='') {
                $('#capacity').show().text('Enter Capacity of the bio project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (bio_proposed_capacity_val == '') {
                $('#capacity').show().text('Enter Capacity of the bio project');
                $('#cost').hide();
                $('#turnover').hide();
            }
            else if (bio_estimated_project_cost_val=='') {
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (bio_turn_over_val == '') {
                $('#capacity').hide();
                $('#cost').hide();
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else {
                $('#capacity').hide();
                $('#cost').hide();
                $('#turnover').hide();
                next_slide();
                $('.next_slide').addClass('disabled');
            }
        }
        if (current_slide == 6) {
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
                bio.AddBioDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    bio.AddBioValidation();
});