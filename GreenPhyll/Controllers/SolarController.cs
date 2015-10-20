using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class SolarController : BaseController
    {
        public ActionResult Index()
        {
            BundleConfig.AddScript("~/Scripts/Solar", "solar.js", ControllerName);
            return View();
        }
        public JsonResult Add(string SolarServiceType, string ApplicantType, string pincode, string address, 
            float GPSLatitude, float GPSLongitude, float MonthlyElectricityBill, float ProposedCapacityKW, 
            float ShadowFreeArea, string IntallationReqForm, string name, string mobileNumber, string email)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.Add(SolarServiceType, ApplicantType, pincode, address, GPSLatitude, GPSLongitude, MonthlyElectricityBill, ProposedCapacityKW, ShadowFreeArea, IntallationReqForm, name, mobileNumber, email, userId);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}