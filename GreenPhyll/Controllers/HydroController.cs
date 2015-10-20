using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class HydroController : BaseController
    {
        public ActionResult Index()
        {
            BundleConfig.AddScript("~/Scripts/Hydro", "hydro.js", ControllerName);
            return View();
        }
        public JsonResult Add(string ApplicantType, string pincode, string address, float GPSLatitude, float GPSLongitude, string ApplicantName, string pan, string cin, float TotalTurbinesPlanned, float ProposedCapacity, float EstimatedProjectCost, float AvgLast3yrTurnOver, string name, string mobileNumber, string email)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var hydroManager = new HydroManager();
            var status = hydroManager.Add(ApplicantType, pincode, address, GPSLatitude, GPSLongitude, ApplicantName, pan, cin, TotalTurbinesPlanned, ProposedCapacity, EstimatedProjectCost, AvgLast3yrTurnOver, name, mobileNumber, email, userId);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}