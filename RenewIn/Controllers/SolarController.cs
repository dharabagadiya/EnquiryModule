using DataModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utilities;

namespace RenewIn.Controllers
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
            BundleConfig.AddScript("~/Scripts/Solar", "SolarEquipments.js", ControllerName);
            return View();
        }
        public JsonResult AddSolarEquipments(string SolarServiceType, string ApplicantType, string pincode, string address, float Budget, float EquipmentNumber, string Message, string CompanyName, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.AddSolarEquipments(SolarServiceType, ApplicantType, pincode, address, Budget, EquipmentNumber, Message, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
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
            HttpPostedFileBase myFile = null;
            if (Request.Files.Count > 0) myFile = Request.Files[0];
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var SolarManager = new SolarManager();
            var status = SolarManager.AddServices(Address, Pincode, ServiceLookingType, ServiceRequestType, ServiceRequestMsg, CompanyName, ContactPersonName, Email, MobileNo, userId, location);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        [HttpPost]
        public JsonResult ImageUpload()
        {
            var status = false;
            for (int i = 0; i < Request.Files.Count; i++)
            {
                HttpPostedFileBase myFile = Request.Files[i];
                if (myFile != null && myFile.ContentLength != 0)
                {
                    var userID = UserDetail == null ? 0 : UserDetail.UserId;
                    string pathForSaving = Server.MapPath("~/ServiceImagesUpload");
                    if (SharedFunction.CreateFolderIfNeeded(pathForSaving))
                    {
                        try
                        {
                            int defaultImage = Convert.ToInt32(Path.GetFileNameWithoutExtension(myFile.FileName));
                            string fileName = SharedFunction.getUnixTimeStamp() + Path.GetExtension(myFile.FileName);
                            myFile.SaveAs(Path.Combine(pathForSaving, fileName));
                            string path = "~/ServiceImagesUpload/" + fileName;
                            var solarManager = new SolarManager();
                            status = solarManager.AddAttachment(Convert.ToInt32(Session["Enquery_ID"]), path, userID, defaultImage);
                        }
                        catch (Exception ex)
                        {
                            return Json(ex.InnerException);
                        }
                    }
                }
            }
            return Json(status);
        }
    }
}