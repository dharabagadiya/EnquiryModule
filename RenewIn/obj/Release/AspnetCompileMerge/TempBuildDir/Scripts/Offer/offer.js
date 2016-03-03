$('.selectOffer').click(function () {
    var offerId = parseInt($(this).attr("data-offer-id"));
    $.ajax({
        dataType: "html",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: "/Offer/MapOffers",
        async: false,
        data: JSON.stringify({ "OfferId": offerId }),
        success: function (data) {
            var status = data;
            if (status == -1) {
                $('#btn_signin').click();
            } else {
                alert("We will contact you");
            }
        }
    });
});