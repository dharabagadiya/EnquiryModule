var solar = {};
solar.AddSolarDetail = function () {
    var solar = {};
    solar.SolarServiceType = $('.SolarServiceType').find('.selected').find('.label').text();
    solar.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    solar.pincode = $("#txtPincode").val();
    solar.address = $("#txtAddress").val();
    solar.GPSLatitude = $("#txtGPSLatitude").val();
    solar.GPSLongitude = $("#txtGPSLongitude").val();
    solar.MonthlyElectricityBill = $("#txtMonthlyElectricityBill").val();
    solar.ProposedCapacityKW = $("#txtProposedCapacityKW").val();
    solar.ShadowFreeArea = $("#txtShadowFreeArea").val();
    solar.IntallationReqForm = $("#txtIntallationReqForm").val();
    solar.name = $("#txtName").val();
    solar.mobileNumber = $("#txtMobileNo").val();
    solar.email = $("#txtEmailEnquiry1").val();
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Solar/Add",
        async: false,
        data: JSON.stringify(solar),
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
    $('#btnSolarSubmit').off("click").on("click", function () { solar.AddSolarDetail(); });
});