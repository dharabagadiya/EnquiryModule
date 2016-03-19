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
    public class HydroController : BaseController
    {
        public ActionResult Index()
        {
            BundleConfig.AddScript("~/Scripts/Hydro", "hydro.js", ControllerName);
            return View();
        }
        public JsonResult Add(string ApplicantType, string pincode, string address, string ApplicantName, string pan, string cin, float TotalTurbinesPlanned, float ProposedCapacity, float EstimatedProjectCost, float AvgLast3yrTurnOver, string name, string mobileNumber, string email, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var hydroManager = new HydroManager();
            var status = hydroManager.Add(ApplicantType, pincode, address, ApplicantName, pan, cin, TotalTurbinesPlanned, ProposedCapacity, EstimatedProjectCost, AvgLast3yrTurnOver, name, mobileNumber, email, userId, location);
            Session["Enquery_ID"] = status;
            AppMail();
            return Json(status != 0);
        }
        public ActionResult Services()
        {
            BundleConfig.AddScript("~/Scripts/Hydro", "service.js", ControllerName);
            return View();
        }
        public JsonResult AddServices(string Address, string Pincode, string ServiceLookingType, string ServiceRequestType, string ServiceRequestMsg, string CompanyName, string ContactPersonName, string Email, string MobileNo, string location)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var hydroManager = new HydroManager();
            var status = hydroManager.AddServices(Address, Pincode, ServiceLookingType, ServiceRequestType, ServiceRequestMsg, CompanyName, ContactPersonName, Email, MobileNo, userId, location);
            Session["HydroServiceID"] = status;
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
                            var hydroManager = new HydroManager();
                            status = hydroManager.AddAttachment(Convert.ToInt32(Session["HydroServiceID"]), path, userID, defaultImage);
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