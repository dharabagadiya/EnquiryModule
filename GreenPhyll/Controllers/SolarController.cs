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
        public ActionResult SolarLanding()
        {
            return View();
        }
        public ActionResult SolarRoofTop()
        {
            BundleConfig.AddScript("~/Scripts/Solar", "SolarRoofTop.js", ControllerName);
            return View();
        }
        public JsonResult AddSolarRoofTop(string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacityKW, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.AddSolarRoofTop(ApplicantType, pincode, address, MonthlyElectricityBill, ProposedCapacityKW, ShadowFreeArea, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public ActionResult SolarPark()
        {
            BundleConfig.AddScript("~/Scripts/Solar", "SolarPark.js", ControllerName);
            return View();
        }
        public JsonResult AddSolarPark(string ApplicantType, string pincode, string address, float EstimatedCost, float ProposedCapacityKW, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.AddSolarPark(ApplicantType, pincode, address, EstimatedCost, ProposedCapacityKW, ShadowFreeArea, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public ActionResult SolarPumps()
        {
            BundleConfig.AddScript("~/Scripts/Solar", "SolarPumps.js", ControllerName);
            return View();
        }
        public JsonResult AddSolarPumps(string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacityKW, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.AddSolarPumps(ApplicantType, pincode, address, MonthlyElectricityBill, ProposedCapacityKW, ShadowFreeArea, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public ActionResult SolarWaterHeaters()
        {
            BundleConfig.AddScript("~/Scripts/Solar", "SolarWaterHeaters.js", ControllerName);
            return View();
        }
        public JsonResult AddSolarWaterHeaters(string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacity, float ShadowFreeArea, string CompanyName, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.AddSolarWaterHeaters(ApplicantType, pincode, address, MonthlyElectricityBill, ProposedCapacity, ShadowFreeArea, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public ActionResult SolarEquipments()
        {
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
            BundleConfig.AddScript("~/Scripts/Solar", "service.js", ControllerName);
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