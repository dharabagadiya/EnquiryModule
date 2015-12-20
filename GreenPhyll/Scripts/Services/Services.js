var services = {};

$(document).ready(function () {
    $(".account1").click(function () {
        var X = $(this).attr('id');
        if (X == 1) {
            $(".submenu1").hide();
            $(this).attr('id', '0');
        }
        else {
            $(".submenu1").show();
            $(this).attr('id', '1');
        }
    });
    $(".submenu1").mouseup(function () { return false });
    $(".account1").mouseup(function () { return false });
    $(document).mouseup(function () {
        $(".submenu1").hide();
        $(".account1").attr('id', '');
    });
    //services.GetServicesData("all");
});
services.GetServicesList = function (dataObj) {
    var servicesWidget = $(".divServices").empty();
    if (dataObj.length <= 0) { servicesWidget.append(this.NoRecordFound("No Event this week")); return; }
    for (var i = 0; i < dataObj.length; i++) { widget = $(this.GetServices(dataObj[i])); servicesWidget.append(widget); };
};
services.GetServices = function (obj) {
    var sb = new StringBuilder();
    sb.append("<div class=\"results_container\">");
    sb.append("<div class=\"grid_card\">");
    sb.append("<img class=\"list_thumbnail left\" src=\"images/latestatapollo-.png\" />");
    sb.append("<div class=\"grid_details left\">");
    sb.append("<h1> " + obj.Title + " </h1>");
    sb.append("<p class=\"details\"><span class=\"fa fa-map-marker location_icon\"></span> "+obj.Location+" </p>");
    sb.append("<div class=\"content_sec\">");
    sb.append("<p>" + obj.Description + "</p>");
    sb.append("</div>");
    sb.append("<div class=\"clr\"></div>");
    sb.append("</div>");
    sb.append("<div class=\"right_nav left\">");
    sb.append("<div class=\"padd_left\">");
    sb.append("</div>");
    sb.append("<div class=\"list_right\">");
    sb.append("<button class=\"feedback_btn btn_mar\"> Contact </button>");
    sb.append("</div>");
    sb.append("</div>");
    sb.append("</div>");
    sb.append("</div>");
    return sb.toString();
}
services.GetServicesData = function (Type) {
    $.ajax({
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        type: "POST",
        url: '/Services/GetServices',
        async: true,
        data: JSON.stringify({ type: Type }),
        success: function (dataObj) {
            services.GetServicesList(dataObj.allServices);
        }
    });
}

