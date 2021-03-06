﻿using DataModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utilities;

namespace RenewIn.Controllers
{
    public class BioController : BaseController
    {
        public ActionResult Index()
        {
            BundleConfig.AddScript("~/Scripts/Bio", "bio.js", ControllerName);
            return View();
        }
        public JsonResult Add(string BioServiceType, string ApplicantType, string ApplicantName, string pan, string cin, string pincode, string address, float ProposedCapacity, float EstimatedProjectCost, float AvgLast3yrTurnOver, string CompanyName, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var enquiry4Manager = new BioManager();
            var status = enquiry4Manager.Add(BioServiceType, ApplicantType, ApplicantName, pan, cin, pincode, address, ProposedCapacity, EstimatedProjectCost, AvgLast3yrTurnOver, CompanyName, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            AppMail();
            return Json(status != 0);
        }
        public ActionResult Services()
        {
            BundleConfig.AddScript("~/Scripts/Bio", "service.js", ControllerName);
            return View();
        }
        public JsonResult AddServices(string Address, string Pincode, string ServiceLookingType, string ServiceRequestType, string ServiceRequestMsg, string CompanyName, string ContactPersonName, string Email, string MobileNo, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var bioManager = new BioManager();
            var status = bioManager.AddServices(Address, Pincode, ServiceLookingType, ServiceRequestType, ServiceRequestMsg, CompanyName, ContactPersonName, Email, MobileNo, userId, location);
            Session["BioServiceId"] = status;
            return Json(status != 0);
        }
        public ActionResult ThankYou()
        {
            if (UserDetail != null && Session["Enquery_ID"] != null)
            {
                var enquiryID = (int)Session["Enquery_ID"];
                var enquiryManager = new EnquiryManager();
                var userDetail = new DataModel.UserDetailManager().Get(UserDetail.UserId);
                using (var sw = new StringWriter())
                {
                    ViewData.Model = userDetail;
                    ViewEngineResult viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, "Success");
                    ViewContext viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                    viewResult.View.Render(viewContext, sw);
                    try
                    {
                        string subject = "Your Renewable Energy Search Request ID " + Session["Enquery_ID"] + " Created Successfully at RenewIn";
                        Utilities.Email.SendMail(UserDetail.Email, sw.GetStringBuilder().ToString(), subject);
                    }
                    catch
                    {
                    }
                }
            }
            return View();
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
                            var bioManager = new BioManager();
                            status = bioManager.AddAttachment(Convert.ToInt32(Session["BioServiceId"]), path, userID, defaultImage);
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