﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace RenewIn.Controllers
{
    public class LoginController : Controller
    {
        public PartialViewResult ForgotPassword()
        {
            return PartialView();
        }
        public JsonResult Authenticate(string username, string password)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.Authenticate(username, password);
            return Json(status);
        }
        public JsonResult GoogleAuthenticate(string username)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.GoogleAuthenticate(username);
            return Json(status);
        }
        public JsonResult FacebookAuthenticate(string id)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.FacebookAuthenticate(id);
            return Json(status);
        }
        public JsonResult CreateAccount(string username, string password, int userRoleID)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.CreateUser(username, password, userRoleID);
            if (status)
            {
                var userDetail = customMembershipProvider.GetUser(username);
                new DataModel.UserDetailManager().Add(userDetail.UserId);
            }
            return Json(status);
        }
        public JsonResult GoogleCreateAccount(string username, int userRoleID)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.GoogleCreateUser(username, userRoleID);
            if (status)
            {
                var userDetail = customMembershipProvider.GetUser(username);
                new DataModel.UserDetailManager().Add(userDetail.UserId);
            }
            return Json(status);
        }
        public JsonResult FacebookCreateAccount(string id, int userRoleID)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.FacebookCreateUser(id, userRoleID);
            if (status)
            {
                var userDetail = customMembershipProvider.GetUser(id);
                new DataModel.UserDetailManager().Add(userDetail.UserId);
            }
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
        public JsonResult FogotPassword(string emailId)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var passwd = customMembershipProvider.CreatePassword(8);
            var status = customMembershipProvider.UpdatePassword(emailId, passwd);
            var userDetail = customMembershipProvider.GetUser(emailId);
            if (status)
            {
                using (var sw = new StringWriter())
                {
                    ViewData.Model = userDetail;
                    ViewEngineResult viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, "ForgotPassword");
                    ViewContext viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                    viewResult.View.Render(viewContext, sw);
                    try
                    {
                        Utilities.Email.SendMail(emailId, sw.GetStringBuilder().ToString(),"Forgot Password");
                    }
                    catch (Exception ex)
                    {
                    }
                }
            }
            return Json(status);
        }
    }
}