var wind = {};
wind.AddWindDetail = function () {
    var wind = {};
    wind.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    wind.pincode = $("#txtPincode").val();
    wind.address = $("#txtAddress").val();
    wind.GPSLatitude = $("#txtGPSLatitude").val();
    wind.GPSLongitude = $("#txtGPSLongitude").val();
    wind.ApplicantName = $("#txtApplicantName").val();
    wind.pan = $("#txtPAN").val();
    wind.cin = $("#txtCIN").val();
    wind.TotalWEGPlanned = $("#txtTotalWEGPlanned").val();
    wind.ProposedCapacity = $("#txtProposedCapacity").val();
    wind.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    wind.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    wind.name = $("#txtName").val();
    wind.mobileNumber = $("#txtMobileNo").val();
    wind.email = $("#txtEmailEnquiry2").val();
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
                alert("Success");
            } else { }
        }
    });
}

$(document).ready(function () {
    $('#btnWindSubmit').off("click").on("click", function () { wind.AddWindDetail(); });
});