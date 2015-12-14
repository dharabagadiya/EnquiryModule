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
        public JsonResult Add(string SolarServiceType, string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacityKW, float ShadowFreeArea, string IntallationReqForm, string CompanyName, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.Add(SolarServiceType, ApplicantType, pincode, address, MonthlyElectricityBill, ProposedCapacityKW, ShadowFreeArea, IntallationReqForm, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public ActionResult Services()
        {
            BundleConfig.AddScript("~/Scripts/Solar", "solar.js", ControllerName);
            return View();
        }
        public JsonResult AddServices(string Address, string Pincode, string ServiceLookingType, string ServiceRequestType, string ServiceRequestMsg, string CompanyName, string ContactPersonName, string Email, string MobileNo, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.AddServices(Address, Pincode, ServiceLookingType, ServiceRequestType, ServiceRequestMsg, CompanyName, ContactPersonName, Email, MobileNo, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}