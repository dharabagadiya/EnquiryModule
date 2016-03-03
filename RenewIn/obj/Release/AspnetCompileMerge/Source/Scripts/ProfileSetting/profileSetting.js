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
profile.PANUpload = function () {
    $('#myFilePAN').fileupload({
        url: '/ProfileSetting/UploadFile',
        dataType: 'json',
        add: function (e, data) {
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
function upload_file() {
    if (profile.jqXHRData)
        profile.jqXHRData.submit();
    else
        alert('Please Choose File');
    profile.jqXHRData = null;
}
