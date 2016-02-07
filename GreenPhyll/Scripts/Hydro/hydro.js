var hydro = {};
hydro.AddHydroDetail = function () {
    var hydroData = {};
    hydroData.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    hydroData.pincode = $("#txtPincode").val();
    hydroData.address = $("#txtAddress").val();
    hydroData.ApplicantName = $("#txtApplicantName").val();
    hydroData.pan = $("#txtPAN").val();
    hydroData.cin = $("#txtCIN").val();
    hydroData.TotalTurbinesPlanned = $("#txtTotalTurbinesPlanned").val();
    hydroData.ProposedCapacity = $("#txtProposedCapacity").val();
    hydroData.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    hydroData.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    hydroData.name = $("#txtName").val();
    hydroData.mobileNumber = $("#txtMobileNo").val();
    hydroData.email = $("#txtEmailHydro").val();
    hydroData.location = $("#txtLocation").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Hydro/Add",
        async: false,
        data: JSON.stringify(hydroData),
        success: function (data) {
            var status = data;
            if (status) {
                //window.location.href = "Enquiry/ThankYou";
                $('.divLoader').addClass('DN');
                window.location.href = "/Offer/Index/Hydro";
                //alert("Success");
            } else { }
        }
    });
}
hydro.AddHydroValidation = function () {
    current_slide = 1;
    $('.next_slide').click(function () {
        var hydro_address_val = $('#txtAddress').val();
        var hydro_pincode_val = $('#txtPincode').val();
        var hydro_location_val = $('#txtLocation').val();
        var hydro_applicant_name_val = $('#txtApplicantName').val();
        var hydro_pan = $("#txtPAN").val();
        var hydro_cin = $("#txtCIN").val();
        var hydro_TotalTurbinesPlanned_val = $('#txtTotalTurbinesPlanned').val();
        var hydro_estimated_project_cost_val = $('#txtEstimatedProjectCost').val();
        var hydro_proposed_capacity_val = $('#txtProposedCapacity').val();
        var hydro_turn_over_val = $('#txtAvgLast3yrTurnOver').val();
        var hydro_company_name_val = $('#txtCompanyName').val();
        var hydro_contact_person_val = $('#txtName').val();
        var hydro_email_val = $('#txtEmailHydro').val();
        var hydro_mobile_val = $('#txtMobileNo').val();

        if (current_slide == 1) {
            if ($('#hydro_services .option_box.selected').length > 0) {
                $('#stateWhether').hide();
                next_slide();
                $('.prev_slide.disabled').removeClass('disabled');
            } else {
                $('#stateWhether').show().text('Select one Hydro Service');
            }
        }
        if (current_slide == 2) {
            if ((hydro_applicant_name_val == '') && (hydro_pan == '') && (hydro_cin == '')) {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').show().text('Enter PAN');
                $('#CIN').show().text('Enter CIN');
            }
            else if (hydro_pan == '' && hydro_cin == '') {
                $('#nameOfApplicant').hide();
                $('#PAN').show().text('Enter PAN');
                $('#CIN').show().text('Enter CIN');
            }
            else if (hydro_applicant_name_val == '' && hydro_cin == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').hide();
                $('#CIN').show().text('Enter CIN');
            }
            else if (hydro_applicant_name_val == '' && hydro_pan == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').show().text('Enter PAN');
                $('#CIN').hide();
            }
            else if (hydro_applicant_name_val == '') {
                $('#nameOfApplicant').show().text('Enter Name of Applicant');
                $('#PAN').hide();
                $('#CIN').hide();
            }
            else if (hydro_pan == '') {
                $('#nameOfApplicant').hide();
                $('#PAN').show().text('Enter PAN');
                $('#CIN').hide();
            }
            else if (hydro_cin == '') {
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
        if (current_slide == 4) {
            if (hydro_TotalTurbinesPlanned_val == '' && hydro_proposed_capacity_val == '' && hydro_estimated_project_cost_val == '' && hydro_turn_over_val == '') {
                $('#turbines').show().text('Enter No. of turbines planned');
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (hydro_proposed_capacity_val == '' && hydro_estimated_project_cost_val == '' && hydro_turn_over_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (hydro_TotalTurbinesPlanned_val == '' && hydro_proposed_capacity_val == '' && hydro_estimated_project_cost_val == '') {
                $('#turbines').show().text('Enter No. of turbines planned');
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (hydro_TotalTurbinesPlanned_val == '' && hydro_estimated_project_cost_val == '' && hydro_turn_over_val == '') {
                $('#turbines').show().text('Enter No. of turbines planned');
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (hydro_TotalTurbinesPlanned_val == '' && hydro_proposed_capacity_val == '' && hydro_turn_over_val == '') {
                $('#turbines').show().text('Enter No. of turbines planned');
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').hide();
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (hydro_estimated_project_cost_val == '' && hydro_turn_over_val == '') {
                $('#turbines').hide();
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (hydro_proposed_capacity_val == '' && hydro_turn_over_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').hide();
                $('#turnover').show().text('Enter Average turnover in last 3 years');
            }
            else if (hydro_proposed_capacity_val == '' && hydro_estimated_project_cost_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (hydro_TotalTurbinesPlanned_val == '' && hydro_proposed_capacity_val=='') {
                $('#turbines').show().text('Enter No. of turbines planned');
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').hide();
                $('#turnover').hide();
            }
            else if (hydro_TotalTurbinesPlanned_val == '') {
                $('#turbines').show().text('Enter No. of turbines planned');
                $('#capacity').hide();
                $('#cost').hide();
                $('#turnover').hide();
            }
            else if (hydro_proposed_capacity_val == '') {
                $('#turbines').hide();
                $('#capacity').show().text('Enter Capacity of the hydro project');
                $('#cost').hide();
                $('#turnover').hide();
            }
            else if (hydro_estimated_project_cost_val == '') {
                $('#turbines').hide();
                $('#capacity').hide();
                $('#cost').show().text('Enter Estimated cost of the project');
                $('#turnover').hide();
            }
            else if (hydro_turn_over_val == '') {
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
            if (hydro_contact_person_val == '' && hydro_email_val == '' && hydro_mobile_val == '') {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((hydro_contact_person_val == '') && (hydro_email_val == '')) {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if ((hydro_mobile_val == '') && (hydro_email_val == '')) {
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if ((hydro_mobile_val == '') && (hydro_contact_person_val == '')) {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (hydro_contact_person_val == '') {
                $('#contactName').show().text('Enter Contact Person Name');
                $('#email').hide();
                $('#mobile').hide();
            }
            else if (hydro_email_val == '') {
                $('#contactName').hide();
                $('#email').show().text('Enter Email Id');
                $('#mobile').hide();
            }
            else if (hydro_mobile_val == '') {
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Enter Mobile Number');
            }
            else if (!email_format.test(hydro_email_val)) {
                $('#contactName').hide();
                $('#email').show().text('Email Id is invalid');
                $('#mobile').hide();
            }
            else if (!mobile_num_format.test(hydro_mobile_val)) {
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').show().text('Mobile number is invalid');
            }
            else {
                $('#contactName').hide();
                $('#email').hide();
                $('#mobile').hide();
                $('.divLoader').removeClass('DN');
                hydro.AddHydroDetail();
            }
        }
    });

    $('.prev_slide').click(function () {
        prev_slide();
    });
}
$(document).ready(function () {
    hydro.AddHydroValidation();
});