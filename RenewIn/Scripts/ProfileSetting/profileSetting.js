var profile = {};
profile.jqXHRData = null;
function DoPageSetting() {
    profile.ElecticityBillUpload();
    profile.PANUpload();
    profile.VoterIdUpload();
    profile.CompanyDocsUpload();
};
profile.ElecticityBillUpload = function () {
    $('#myFileEBill').fileupload({
        url: '/ProfileSetting/UploadFile',
        dataType: 'json',
        add: function (e, data) {
            $(this).parent().find('.file-label').empty().html(data.files[0].name);
            profile.jqXHRData = data;
        },
        done: function (e, data) {
            var status = data.result;
            if (status) {
                $('#electricityUpload').show().empty().html('Success');
            } else {
                $('#electricityUpload').show().empty().html('Failed');
            }
        }
    });
}
profile.PANUpload = function () {
    $('#myFilePAN').fileupload({
        url: '/ProfileSetting/UploadFile',
        dataType: 'json',
        add: function (e, data) {
            $(this).parent().find('.file-label').empty().html(data.files[0].name);
            profile.jqXHRData = data;
        },
        done: function (e, data) {
            var status = data.result;
            if (status) {
                alert('Success');
            } else {
                alert('Failed');
            }
        }
    });
}
profile.VoterIdUpload = function () {
    $('#myFileVoterId').fileupload({
        url: '/ProfileSetting/UploadFile',
        dataType: 'json',
        add: function (e, data) {
            $(this).parent().find('.file-label').empty().html(data.files[0].name);
            profile.jqXHRData = data;
        },
        done: function (e, data) {
            var status = data.result;
            if (status) {
                alert('Success');
            } else {
                alert('Failed');
            }
        }
    });
}
profile.CompanyDocsUpload = function () {
    $('#myFileCompanyDocs').fileupload({
        url: '/ProfileSetting/UploadFile',
        dataType: 'json',
        add: function (e, data) {
            $(this).parent().find('.file-label').empty().html(data.files[0].name);
            profile.jqXHRData = data;
        },
        done: function (e, data) {
            var status = data.result;
            if (status) {
                alert('Success');
            } else {
                alert('Failed');
            }
        }
    });
}
function upload_file(value) {
    var validExtensions = ['jpg', 'png']; //array of valid extensions
    if (profile.jqXHRData)
    {
        var fileName = profile.jqXHRData.files[0].name;
        var fileNameExt = fileName.substr(fileName.lastIndexOf('.') + 1);
        if ($.inArray(fileNameExt, validExtensions) == -1) {
            if (value == 'electricity') $('#electricityUpload').show().empty().html("Please Choose jpg or png file");
            if (value == 'pan') $('#panUpload').show().empty().html("Please Choose jpg or png file");
            if (value == 'voter') $('#voterUpload').show().empty().html("Please Choose jpg or png file");
            if (value == 'company') $('#companyUpload').show().empty().html("Please Choose jpg or png file");
            return false;
        }
        profile.jqXHRData.submit();
    }
    else {
        if (value == 'electricity') $('#electricityUpload').show().empty().html("Please Choose File");
        if (value == 'pan') $('#panUpload').show().empty().html("Please Choose File");
        if (value == 'voter') $('#voterUpload').show().empty().html("Please Choose File");
        if (value == 'company') $('#companyUpload').show().empty().html("Please Choose File");
        return false;
    }
    profile.jqXHRData = null;
}
$('.CheckMyStatus').click(function () {
    //services.ServiceType = $(this).attr("data-service-type");
    //services.ServiceId = parseInt($(this).attr("data-service-id"));
    //$.ajax({
    //    dataType: "html",
    //    contentType: "application/json; charset=utf-8",
    //    type: "POST",
    //    url: "/Services/MapServices",
    //    async: false,
    //    data: JSON.stringify(services),
    //    success: function (data) {
    //        var status = data;
    //        if (status == -1) {
    //            $('#btn_signin').click();
    //        } else {
    alert("Thank You, Your Feedback has been Submitted. We appreciate your input, and will follow up with you regarding your application status as soon as we are able.");
    // }
    //    }
    //});
});

