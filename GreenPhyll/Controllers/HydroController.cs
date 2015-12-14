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
        public JsonResult Add(string ApplicantType, string pincode, string address,  string ApplicantName, string pan, string cin, float TotalTurbinesPlanned, float ProposedCapacity, float EstimatedProjectCost, float AvgLast3yrTurnOver, string name, string mobileNumber, string email,string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var hydroManager = new HydroManager();
            var status = hydroManager.Add(ApplicantType, pincode, address,  ApplicantName, pan, cin, TotalTurbinesPlanned, ProposedCapacity, EstimatedProjectCost, AvgLast3yrTurnOver, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public ActionResult Services()
        {
            BundleConfig.AddScript("~/Scripts/Hydro", "hydro.js", ControllerName);
            return View();
        }
        public JsonResult AddServices(string Address, string Pincode,  string ServiceLookingType, string ServiceRequestType, string ServiceRequestMsg, string CompanyName, string ContactPersonName, string Email, string MobileNo,string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var hydroManager = new HydroManager();
            var status = hydroManager.AddServices(Address, Pincode,  ServiceLookingType, ServiceRequestType, ServiceRequestMsg, CompanyName, ContactPersonName, Email, MobileNo, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}