var OAUTHURL = 'https://accounts.google.com/o/oauth2/auth?';
var VALIDURL = 'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
var CLIENTID = '182604151589-cq7b45956iul6pkq2ku2496tgb4guajp.apps.googleusercontent.com';
var REDIRECT = 'http://localhost:2478/Home';
//var REDIRECT = 'http://enquerymodule.azurewebsites.net/Home';
var LOGOUT = 'http://accounts.google.com/Logout';
var TYPE = 'token';
var _url = OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;
var acToken, tokenType, expiresIn, user;
var loggedIn = false;
var _validFileExtensions = [".jpg", ".jpeg"];
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
        onopen: function () {
            //alert('Popup just opened!');
            ClearLoginTextBox();
            $("#lblCreateAccount").empty();
            $("#lblSignIn").empty();
        },
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
    //$('#btnSendRequest').off("click").on("click", function () { AddjoinInstallerNetwork(); });
    $('#btnForgotPassword').click(function () { ForgotPassword(); });
    BindEnquiryDetialLinkEvents();
    FacebookLoginLoad();
    BindUploadPhoto();
    validationJoinInstallerNetwork();
});
function ClearLoginTextBox() {
    $('#txtEmail').val("");
    $('#txtPassword').val("");
    $('#txtCreateAccountEmail').val("");
    $('#txtCreateAccountPassword').val("");
}
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
                $("#lblSignIn").empty().html("Invalid user or password<br/>");
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
                $("#lblCreateAccount").empty().html('User successfully created').css('color', 'green');
                ClearLoginTextBox();
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
            window.location.href = "/Home";
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
function validationJoinInstallerNetwork() {
    $("#validate-form").validate({
        rules: {
            Company: "required",
            Name: "required",
            MobileNumber: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            "checkboxes[]": {
                required: true,
                maxlength: 5
            },
            "checkboxesWYA[]": {
                required: true,
                maxlength: 5
            }
        },
        messages: {
            Company: "Please enter your company name",
            Name: "Please enter your name",
            MobileNumber: "Please enter mobile no",
            email: "Please enter a valid email address",
            'checkboxes[]': {
                required: "You must check at least 1 box",
                maxlength: "Check no more than {0} boxes"
            },
            'checkboxesWYA[]': {
                required: "You must check at least 1 box",
                maxlength: "Check no more than {0} boxes"
            }
        },
        errorPlacement: function (error, element) {
            if ($("#BusinessArea").has(element).size() > 0) {
                error.insertAfter($("#BusinessArea"));
            }
            else if ($("#WhoYouAre").has(element).size() > 0) {
                error.insertAfter($("#WhoYouAre"));
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form) {
            AddjoinInstallerNetwork();
        }
    });
}
function AddjoinInstallerNetwork() {
    var BusinessArea = [], WhoYouAre = [];
    $('#BusinessArea').find("input[type='checkbox']:checked").each(function () { BusinessArea.push($(this).val()) });
    $('#WhoYouAre').find("input[type='checkbox']:checked").each(function () { WhoYouAre.push($(this).val()) });
    var checkboxField = BusinessArea.join(',');
    var radioField = WhoYouAre.join(',');
    var name = $("#txtName").val();
    var email = $("#txtEmailJIN").val();
    var companyName = $("#txtCompanyName").val();
    var mobileNumber = $("#txtMobileNumber").val();
    var additionalNotes = $("#txtAdditionalNotes").val();
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
//Google Login
function Googlelogin() {
    var win = window.open(_url, "windowname1", 'width=600, height=600');
    var pollTimer = window.setInterval(function () {
        try {
            console.log(win.document.URL);
            if (win.document.URL.indexOf(REDIRECT) != -1) {
                window.clearInterval(pollTimer);
                //debugger
                var url = win.document.URL;
                acToken = gup(url, 'access_token');
                tokenType = gup(url, 'token_type');
                expiresIn = gup(url, 'expires_in');
                win.close();
                validateToken(acToken);
            }
        }
        catch (e) {
        }
    }, 500);
}
function validateToken(token) {
    $.ajax(
        {
            url: VALIDURL + token,
            data: null,
            success: function (responseText) {
                getUserInfo();
                loggedIn = true;
                $('#loginText').hide();
                $('#logoutText').show();
            },
            dataType: "jsonp"
        });
}
function getUserInfo() {
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        success: function (resp) {
            user = resp;
            //console.log(user);
            GoogleLogin(user.email);
        },
        dataType: "jsonp"
    });
}
function gup(url, name) {
    namename = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\#&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return "";
    else
        return results[1];
}
function GoogleLogin(username) {
    $('.divLoader').removeClass('DN');
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/GoogleAuthenticate",
        async: false,
        data: JSON.stringify({ "username": username }),
        success: function (data) {
            var status = data;
            if (status) { window.location.reload(); }
            else { GoogleCreateAccount(username); }
        }
    });
}
function GoogleCreateAccount(username) {
    $('.divLoader').removeClass('DN');
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/GoogleCreateAccount",
        async: false,
        data: JSON.stringify({ "username": username, "userRoleID": "2" }),
        success: function (data) {
            var status = data;
            if (status) {
                GoogleLogin(username);
            } else {
                $('.divLoader').addClass('DN');
                $("#lblCreateAccount").show();
                $("#lblCreateAccount").empty().html('Sign with normal login').css('color', 'red');
            }
        }
    });
}
//Google Login end
//Facebook Login
function FacebookLoginLoad() {
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "../../../Scripts/Facebook/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    // Init the SDK upon load
    window.fbAsyncInit = function () {
        FB.init({
            appId: '454206028123700',
            xfbml: true,
            version: 'v2.5'
        });
    }
}
function fb_login() {
    FB.login(function (response) {
        if (response.authResponse) {
            // user has auth'd your app and is logged into Facebook
            FB.api('/me', function (me) {
                console.log(me);
                if (me.name) {
                    FacebookLogin(me.id);
                }
            })
        }
    });
}
function FacebookLogin(id) {
    $('.divLoader').removeClass('DN');
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/FacebookAuthenticate",
        async: false,
        data: JSON.stringify({ "id": id }),
        success: function (data) {
            var status = data;
            if (status) { window.location.reload(); }
            else { FacebookCreateAccount(id); }
        }
    });
}
function FacebookCreateAccount(id) {
    $('.divLoader').removeClass('DN');
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Login/FacebookCreateAccount",
        async: false,
        data: JSON.stringify({ "id": id, "userRoleID": "2" }),
        success: function (data) {
            var status = data;
            if (status) {
                FacebookLogin(id);
            } else {
                $('.divLoader').addClass('DN');
                $("#lblCreateAccount").show();
                $("#lblCreateAccount").empty().html('Sign with normal login').css('color', 'red');
            }
        }
    });
}
//Facebook Login end
//upload photo in service pages
var uploadFile = [];
function BindUploadPhoto() {
    jQuery(document).ready(function () {
        $("input:radio[name=new_img]").attr('checked', true);
    });
    $("#uploadFile").on("change", function () {
        var file = this.files[0];
        if (file.size > 2097152) {
            alert("Too large Image. Only image less than 2MB can be uploaded.");
            return false;
        } else {
            var totalImgs = $('#uploadedImgs .imagePreview').length;
            if (totalImgs <= 5) {
                var files = !!this.files ? this.files : [];
                if (!files.length || !window.FileReader) return;

                if (/^image/.test(files[0].type)) {
                    var reader = new FileReader();
                    reader.readAsDataURL(files[0]);
                    var obj = {};
                    obj['id'] = 0;
                    obj['image'] = file;
                    uploadFile.push(obj);
                    reader.onloadend = function () {
                        var newImgDiv = $('#newImgTemplate');
                        newImgDiv.find('.imagePreview').css("background-image", "url(" + this.result + ")");
                        $('#uploadedImgs').append(newImgDiv.html());
                    }
                }
                $(".firstUpload, .vBarDivider, .examplePhotoPack").hide();
                $(".imgAC715").css('width', '100%');
                if (totalImgs == 4) {
                    $('#addNewImgBtn').hide();
                }
            }
            else {
                alert("Only five images can be uploaded");
            }
        }
    });

    $(document).on('click', '.add_photos .remove_photo', function () {
        var indexValueOfArray = $(this).parents('.add_photos').index();
        uploadFile.splice(indexValueOfArray, 1);
        $(this).parents('.add_photos').remove();
        $('#addNewImgBtn').show();
    });
};
function ValidateSingleInput(oInput) {
    if (oInput.type == "file") {
        var sFileName = oInput.value;
        if (sFileName.length > 0) {
            var blnValid = false;
            for (var j = 0; j < _validFileExtensions.length; j++) {
                var sCurExtension = _validFileExtensions[j];
                if (sFileName.substr(sFileName.length - sCurExtension.length, sCurExtension.length).toLowerCase() == sCurExtension.toLowerCase()) {
                    blnValid = true;
                    break;
                }
            }
            if (!blnValid) {
                alert(" Please Select .jpg, .jpeg format Files for Uploading");
                oInput.value = "";
                return false;
            }
        }
    }
    return true;
}

