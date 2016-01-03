
#region Using Namespaces
using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
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
            var getoffers = offerManager.GetOffers();
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
            return View();
        }
        public ActionResult Feedback()
        {
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
    }
}