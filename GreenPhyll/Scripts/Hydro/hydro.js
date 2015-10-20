var hydro = {};
hydro.AddHydroDetail = function () {
    var hydroData = {};
    hydroData.ApplicantType = $('.ApplicantType').find('.selected').find('.label').text();
    hydroData.pincode = $("#txtPincode").val();
    hydroData.address = $("#txtAddress").val();
    hydroData.GPSLatitude = $("#txtGPSLatitude").val();
    hydroData.GPSLongitude = $("#txtGPSLongitude").val();
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
                alert("Success");
            } else { }
        }
    });
}

$(document).ready(function () {
    $('#btnHydroSubmit').off("click").on("click", function () { hydro.AddHydroDetail(); });
});