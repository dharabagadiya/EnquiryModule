using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace GreenPhyll.Controllers
{
    public class LoginController : Controller
    {
        public JsonResult Authenticate(string username, string password)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.Authenticate(username, password);
            return Json(status);
        }
        public JsonResult CreateAccount(string username, string password, int userRoleID)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.CreateUser(username, password, userRoleID);
            return Json(status);
        }

        [AllowAnonymous]
        public JsonResult LogOut()
        {
            Session.Abandon();
            FormsAuthentication.SignOut();

            HttpCookie cookie = new HttpCookie(FormsAuthentication.FormsCookieName, "");
            cookie.Expires = DateTime.Now.AddYears(-1);
            Response.Cookies.Add(cookie);

            return Json(new { });
        }
    }
}