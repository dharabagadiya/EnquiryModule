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
    $('#app_tooltip').popup({
        type: 'tooltip',
        vertical: 'bottom'
    });
    $('#btnSignIn').off("click").on("click", function () { Login(); });
    $('#btnCreateAccount').off("click").on("click", function () { CreateAccount(); });
    $('#btn_signout').off("click").on("click", function () { Logout(); });
    $('#btnEnquiry').off("click").on("click", function () { AddEnquiry(); });
    $('#btnSendRequest').off("click").on("click", function () { AddjoinInstallerNetwork(); });
    $('#btnForgotPassword').click(function () { ForgotPassword(); });
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
    var username = $("#txtEmail").val().trim();
    var password = $("#txtPassword").val().trim();
    if (username == "") {
        $("#lblSignIn").show();
        $("#lblSignIn").empty().html("Please enter email<br/>");
        return false;
    }
    if (password == "") {
        $("#lblSignIn").show();
        $("#lblSignIn").empty().html("Please enter password<br/>");
        return false;
    }
    $('.divLoader').removeClass('DN');
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
            } else {
                $('.divLoader').addClass('DN');
                $("#lblSignIn").show();
                $("#lblSignIn").empty().html("Invalid User<br/>");
            }
        }
    });
}
function CreateAccount() {
    var username = $("#txtCreateAccountEmail").val().trim();
    var password = $("#txtCreateAccountPassword").val().trim();
    var userRoleID = "2";
    if (username == "") {
        $("#lblCreateAccount").show();
        $("#lblCreateAccount").empty().html('Please enter email address').css('color', 'red');
        return false;
    }
    if (password == "") {
        $("#lblCreateAccount").show();
        $("#lblCreateAccount").empty().html('Please enter password').css('color', 'red');
        return false;
    }
    if (!validateEmail(username)) {
        $("#lblCreateAccount").show();
        $("#lblCreateAccount").empty().html('Invalid email address').css('color', 'red');
        return false;
    }
    else if ($.trim(password).length < 6) {
        $("#lblCreateAccount").show();
        $("#lblCreateAccount").empty().html('Password must be greater than 6 characters').css('color', 'red');
        return false;
    }
    $('.divLoader').removeClass('DN');
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
                $('.divLoader').addClass('DN');
                $("#lblCreateAccount").show();
                $("#lblCreateAccount").empty().html('Successfully created').css('color', 'green');
            } else {
                $('.divLoader').addClass('DN');
                $("#lblCreateAccount").show();
                $("#lblCreateAccount").empty().html('Email already exist').css('color', 'red');
            }
        }
    });
}
function validateEmail(email) {
    var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (reg.test(email)) { return true; }
    else { return false; }
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
function ForgotPassword() {
    var email = $("#txtForgotPasswordEmail").val().trim();
    if (email == "") {
        $("#lblForgotEmail").show();
        $("#lblForgotEmail").empty().html('Please enter email address<br/>').css('color', 'red');
        return false;
    }
    $('.divLoader').removeClass('DN');
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/FogotPassword",
        async: true,
        data: JSON.stringify({ "emailId": email }),
        success: function (data) {
            var status = data;
            if (status) {
                $("#lblForgotEmail").show();
                $("#lblForgotEmail").empty().html('Email sent successfully<br/>').css('color', 'green');
                $('.divLoader').addClass('DN');
            } else {
                $("#lblForgotEmail").show()
                $("#lblForgotEmail").empty().html('Invalid email<br/>').css('color', 'red');
                $('.divLoader').addClass('DN');
            }
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
    var checkboxField = checkBoxField.join(',');
    var radioField = $("input[type='radio']:checked").val();
    var name = $("#txtName").val();
    var email = $("#txtEmailJIN").val();
    var companyName = $("#txtCompanyName").val();
    var mobileNumber = $("#txtMobileNumber").val();
    var additionalNotes = $("#txtAdditionalNotes").val();

    if (name == '' && email == '' && companyName == '' && mobileNumber == '') {
        $('#name').show().text("Please Enter Name");
        $('#email').show().text("Please Enter Email");
        $('#company').show().text("Please Enter Company Name");
        $('#mobile').show().text("Please Enter Mobile No");
    }
    else if (email == '' && companyName == '' && mobileNumber == '') {
        $('#name').hide();
        $('#email').show().text("Please Enter Email");
        $('#company').show().text("Please Enter Company Name");
        $('#mobile').show().text("Please Enter Mobile No");
    }
    else if (name == '' && email == '' && mobileNumber == '') {
        $('#name').show().text("Please Enter Name");
        $('#email').show().text("Please Enter Email");
        $('#company').hide();
        $('#mobile').show().text("Please Enter Mobile No");
    }
    else if (companyName == '' && mobileNumber == '') {
        $('#name').hide();
        $('#email').hide();
        $('#company').show().text("Please Enter Company Name");
        $('#mobile').show().text("Please Enter Mobile No");
    }
    else if (name == '' && email == '' && companyName == '') {
        $('#name').show().text("Please Enter Name");
        $('#email').show().text("Please Enter Email");
        $('#company').show().text("Please Enter Company Name");
        $('#mobile').hide();
    }
    else if (name == '' && email == '') {
        $('#name').show().text("Please Enter Name");
        $('#email').show().text("Please Enter Email");
        $('#company').hide();
        $('#mobile').hide();
    }
    else if (name == '' && mobileNumber == '') {
        $('#name').show().text("Please Enter Name");
        $('#email').hide();
        $('#company').hide();
        $('#mobile').show().text("Please Enter Mobile No");
    }
    else if (email == '' && companyName == '') {
        $('#name').hide();
        $('#email').show().text("Please Enter Email");
        $('#company').show().text("Please Enter Company Name");
        $('#mobile').hide();
    }
    else if (email == '' && mobileNumber == '') {
        $('#name').hide();
        $('#email').show().text("Please Enter Email");
        $('#company').hide();
        $('#mobile').show().text("Please Enter Mobile No");
    }
    else if (name == '' && companyName == '') {
        $('#name').show().text("Please Enter Name");
        $('#email').hide();
        $('#company').show().text("Please Enter Company Name");
        $('#mobile').hide();
    }
    else if (name == '') {
        $('#name').show().text("Please Enter Name");
        $('#email').hide();
        $('#company').hide();
        $('#mobile').hide();
    }
    else if (email == '') {
        $('#name').hide();
        $('#email').show().text("Please Enter Email");
        $('#company').hide();
        $('#mobile').hide();
    }
    else if (!email_format.test(email)) {
        $('#name').hide();
        $('#email').show().text('Email Id is invalid');
        $('#company').hide();
        $('#mobile').hide();
    }
    else if (companyName == '') {
        $('#name').hide();
        $('#email').hide();
        $('#company').show().text("Please Enter Company Name");
        $('#mobile').hide();
    }
    else if (mobileNumber == '') {
        $('#name').hide();
        $('#email').hide();
        $('#company').hide();
        $('#mobile').show().text("Please Enter Mobile No");
    }
    else if (!mobile_num_format.test(mobileNumber)) {
        $('#name').hide();
        $('#email').hide();
        $('#company').hide();
        $('#mobile').show().text('Mobile number is invalid');
    }
    else {
        $('#name').hide();
        $('#email').hide();
        $('#company').hide();
        $('#mobile').hide();
        $.ajax({
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            url: "/JoinInstallerNetwork/Add",
            async: false,
            data: JSON.stringify({ "name": name, "email": email, "mobileNumber": mobileNumber, "companyName": companyName, "additionalNotes": additionalNotes, "radioField": radioField, "checkboxField": checkboxField }),
            success: function (data) {
                var status = data;
                if (status) {
                    alert("success");
                    window.location.reload();
                }
                else { }
            }
        });
    }
}

