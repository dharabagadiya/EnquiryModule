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
    bioData.GPSLatitude = $("#txtGPSLatitude").val();
    bioData.GPSLongitude = $("#txtGPSLongitude").val();
    bioData.ProposedCapacity = $("#txtProposedCapacity").val();
    bioData.EstimatedProjectCost = $("#txtEstimatedProjectCost").val();
    bioData.AvgLast3yrTurnOver = $("#txtAvgLast3yrTurnOver").val();
    bioData.CompanyName = $("#txtCompanyName").val();
    bioData.name = $("#txtName").val();
    bioData.mobileNumber = $("#txtMobileNo").val();
    bioData.email = $("#txtEmailBio").val();
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
                alert("Success");
            } else { }
        }
    });
}
$(document).ready(function () {
    $('#btnBioSubmit').off("click").on("click", function () { bio.AddBioDetail(); });
});