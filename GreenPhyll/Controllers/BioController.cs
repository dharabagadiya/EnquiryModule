using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class BioController : BaseController
    {
        public ActionResult Index()
        {
            BundleConfig.AddScript("~/Scripts/Bio", "bio.js", ControllerName);
            return View();
        }
        public JsonResult Add(string BioServiceType, string ApplicantType, string ApplicantName, string pan, string cin, string pincode, string address, float ProposedCapacity, float EstimatedProjectCost, float AvgLast3yrTurnOver, string CompanyName, string name, string mobileNumber, string email,string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var enquiry4Manager = new BioManager();
            var status = enquiry4Manager.Add(BioServiceType, ApplicantType, ApplicantName, pan, cin, pincode, address, ProposedCapacity, EstimatedProjectCost, AvgLast3yrTurnOver, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public ActionResult Services()
        {
            BundleConfig.AddScript("~/Scripts/Bio", "bio.js", ControllerName);
            return View();
        }
        public JsonResult AddServices(string Address, string Pincode, string ServiceLookingType, string ServiceRequestType, string ServiceRequestMsg, string CompanyName, string ContactPersonName, string Email, string MobileNo,string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var bioManager = new BioManager();
            var status = bioManager.AddServices(Address, Pincode,  ServiceLookingType, ServiceRequestType, ServiceRequestMsg, CompanyName, ContactPersonName, Email, MobileNo, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}