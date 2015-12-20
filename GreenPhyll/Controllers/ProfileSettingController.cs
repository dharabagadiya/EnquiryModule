
#region Using Namespaces
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

        public ActionResult ProfileDetail()
        {
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
            var userID = UserDetail.UserId;
            var name = formCollection["txtName"].ToString();
            var mobileNumber = formCollection["txtMobileNumber"].ToString();
            var location = formCollection["txtLocation"].ToString();
            var userDetail = new DataModel.UserDetailManager().Update(userID, name, mobileNumber, location);
            return View(userDetail);
        }

        [HttpPost]
        public ActionResult ChangedPassword(FormCollection formCollection)
        {
            var userID = UserDetail.UserId;
            var oldPassword = formCollection["oldPassword"].ToString();
            var newPassword = formCollection["newPassword"].ToString();
            var status = new CustomAuthentication.CustomMembershipProvider().ChangePassword(userID, oldPassword, newPassword);
            ViewData["Status"] = status;
            return RedirectToAction("ProfileDetail");
        }
    }
}