// JavaScript Document$(document).ready(function(){
$(document).ready(function () {
    $('.no_label').each(function () {
        var value = $(this).attr('title');
        $(this).val(value);
    });
    $('.no_label').focus(function () {
        var value = $(this).val();
        var title = $(this).attr('title');
        if (value == title) {
            $(this).val('');
        }
        $(this).removeClass('grey_text');
    }).blur(function () {
        var value = $(this).val();
        var title = $(this).attr('title');
        if (value == '') {
            $(this).val(title);
            $(this).addClass('grey_text');
        }
    });
    $('#signin_popup').popup({
        opacity: 0.6,
        transition: 'all 0.3s'
    });
    $("#divEqueryDetailPopup").popup({
        opacity: 0.6,
        transition: 'all 0.3s',
    });
    $('#forgot_pwd_link').click(function () {
        $('#login_sec').hide();
        $('#forgot_password').show();
    });
    $('#back_to_login').click(function () {
        $('#forgot_password').hide();
        $('#login_sec').show();
    });
    $('#btnSignIn').off("click").on("click", function () { Login(); });
    $('#btnCreateAccount').off("click").on("click", function () { CreateAccount(); });
    $('#btn_signout').off("click").on("click", function () { Logout(); });
    $('#btnEnquiry').off("click").on("click", function () { AddEnquiry(); });
    $('#btnSendRequest').off("click").on("click", function () { AddjoinInstallerNetwork(); });
    BindEnquiryDetialLinkEvents();
});
function GetEnquiryDetail(id) {
    $.ajax({
        dataType: "html",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Enquiry/Detail",
        async: false,
        data: JSON.stringify({ "id": id }),
        success: function (data) {
            $("#divEqueryDetailPopup").empty().append(data).popup({
                opacity: 0.6,
                transition: 'all 0.3s',
                autoopen: true
            });
        }
    });

};
function BindEnquiryDetialLinkEvents() {
    $(".single_grid_wrapper").find(".lnkEnquiryDetailLink").off("click").on("click", function () {
        GetEnquiryDetail(parseInt($(this).attr("data-enquiry-id")));
    });
}
function Login() {
    var username = $("#txtEmail").val();
    var password = $("#txtPassword").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/Authenticate",
        async: false,
        data: JSON.stringify({ "username": username, "password": password }),
        success: function (data) {
            var status = data;
            if (status) {
                window.location.reload();
            } else { }
        }
    });
}
function CreateAccount() {
    var username = $("#txtCreateAccountEmail").val();
    var password = $("#txtCreateAccountPassword").val();
    var userRoleID = "2";
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/CreateAccount",
        async: false,
        data: JSON.stringify({ "username": username, "password": password, "userRoleID": userRoleID }),
        success: function (data) {
            var status = data;
            if (status) {
                window.location.reload();
            } else { $("#lblEmailExist").show() }
        }
    });
}
function Logout() {
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/LogOut",
        async: false,
        success: function (data) {
            window.location.reload();
        }
    });
}
function AddEnquiry() {
    var multiOptionSelected = [];
    $('.check_options').find('.selected').each(function () { multiOptionSelected.push($(this).find('.label').text()); });
    var pincode = $("#txtPincode").val();
    var address = $("#txtAddress").val();
    var optionOne = $('.radio_options').find('.selected').find('.label').text();
    var optionMulti = multiOptionSelected.join(',');
    var name = $("#txtName").val();
    var mobileNumber = $("#txtMobileNumber").val();
    var email = $("#txtEmailSlide").val();
    var Field1 = $("#txtField1").val();
    var Field2 = $("#txtField2").val();
    var Field3 = $("#txtField3").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Enquiry/AddEnquiry",
        async: false,
        data: JSON.stringify({ "pincode": pincode, "address": address, "optionOne": optionOne, "optionMulti": optionMulti, "name": name, "mobileNumber": mobileNumber, "email": email, "Field1": Field1, "Field2": Field2, "Field3": Field3 }),
        success: function (data) {
            var status = data;
            if (status) {
                window.location.href = "Enquiry/ThankYou";
                //alert("Success");
            } else { }
        }
    });
}
function AddjoinInstallerNetwork() {
    var checkBoxField = [];
    $("input[type='checkbox']:checked").each(function () { checkBoxField.push($(this).val()) });
    var name = $("#txtName").val();
    var email = $("#txtEmailJIN").val();
    var designation = $("#txtDesignation").val();
    var deskNumber = $("#txtDeskNumber").val();
    var companyName = $("#txtCompanyName").val();
    var mobileNumber = $("#txtMobileNumber").val();
    var additionalNotes = $("#txtAdditionalNotes").val();
    var radioField = $("input[type='radio']:checked").val();
    var checkboxField = checkBoxField.join(',');
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/JoinInstallerNetwork/Add",
        async: false,
        data: JSON.stringify({ "name": name, "email": email, "mobileNumber": mobileNumber, "designation": designation, "deskNumber": deskNumber, "companyName": companyName, "additionalNotes": additionalNotes, "radioField": radioField, "checkboxField": checkboxField }),
        success: function (data) {
            var status = data;
            if (status) { alert("success") }
            else { }
        }
    });
}