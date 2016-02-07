﻿
#region Using Namespaces
using DataModel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Utilities;
#endregion

namespace GreenPhyll.Controllers
{
    public class ProfileSettingController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult MyApplication()
        {
            var offerManager = new OfferManager();
            var getoffers = offerManager.GetOffers("Bio");
            return View(getoffers);
        }
        public ActionResult ProfileDetail()
        {
            if (UserDetail == null)
            {
                return RedirectToAction("", "");
            }

            BundleConfig.AddScript("~/Scripts/ProfileSetting", "tabs.js", ControllerName);
            BundleConfig.AddScript("~/Scripts/ProfileSetting", "profileSetting.js", ControllerName);

            StartupScript = "DoPageSetting();";
            var userDetail = new DataModel.UserDetailManager().Get(UserDetail.UserId);
            ViewData["Status"] = false;
            return View(userDetail);
        }
        [HttpPost]
        public ActionResult ProfileDetail(FormCollection formCollection)
        {
            if (UserDetail == null)
            {
                return RedirectToAction("", "");
            }

            var userID = UserDetail.UserId;
            var name = formCollection["txtName"].ToString();
            var mobileNumber = formCollection["txtMobileNumber"].ToString();
            var location = formCollection["txtLocation"].ToString();
            var userDetail = new DataModel.UserDetailManager().Update(userID, name, mobileNumber, location);
            return View(userDetail);
        }
        public ActionResult UploadDocuments()
        {
            BundleConfig.AddScript("~/Scripts/ProfileSetting", "profileSetting.js", ControllerName);

            StartupScript = "DoPageSetting();";
            return View();
        }
        public ActionResult Feedback()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Feedback(FormCollection formCollection)
        {
            if (UserDetail == null)
            {
                return RedirectToAction("", "");
            }

            var userID = UserDetail.UserId;
            var feedback_question = formCollection["feedback_question"].ToString();
            var feedback_msg = formCollection["feedback_msg"].ToString();
            var status = new DataModel.ProfileSettingManager().Add_FeedBack(userID, feedback_question, feedback_msg);
            ViewData["Status"] = status;
            return View();
        }
        public ActionResult ChangedPassword()
        {
            if (UserDetail == null)
            {
                return RedirectToAction("", "");
            }

            BundleConfig.AddScript("~/Scripts/ProfileSetting", "tabs.js", ControllerName);
            BundleConfig.AddScript("~/Scripts/ProfileSetting", "profileSetting.js", ControllerName);

            StartupScript = "DoPageSetting();";
            var userDetail = new DataModel.UserDetailManager().Get(UserDetail.UserId);
            ViewData["Status"] = false;
            return View();
        }
        [HttpPost]
        public ActionResult ChangedPassword(FormCollection formCollection)
        {
            if (UserDetail == null)
            {
                return RedirectToAction("", "");
            }

            var userID = UserDetail.UserId;
            var oldPassword = formCollection["oldPassword"].ToString();
            var newPassword = formCollection["newPassword"].ToString();
            var status = new CustomAuthentication.CustomMembershipProvider().ChangePassword(userID, oldPassword, newPassword);
            ViewData["Status"] = status;
            return View();
        }
        [HttpPost]
        public JsonResult UploadFile()
        {
            var status = false;
            HttpPostedFileBase myFile = null;
            if (Request.Files.Count > 0) myFile = Request.Files[0];
            if (myFile != null && myFile.ContentLength != 0)
            {
                var userID = UserDetail.UserId;
                string pathForSaving = Server.MapPath("~/DocumentsUpload");
                if (SharedFunction.CreateFolderIfNeeded(pathForSaving))
                {
                    try
                    {
                        string fileName = DateTime.Now.ToString("MMddyyyyHHmmss") + Path.GetExtension(myFile.FileName);
                        myFile.SaveAs(Path.Combine(pathForSaving, fileName));
                        string path = "~/DocumentsUpload/" + fileName;
                        var profileManager = new ProfileSettingManager();
                        status = profileManager.AddFile(userID, path, myFile.FileName);
                    }
                    catch (Exception ex)
                    {
                        return Json(ex.InnerException);
                    }
                }
            }
            return Json(status);
        }
    }
}