﻿
#region Using Namespaces
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Filters;
using CustomAuthentication.Security;
#endregion

namespace GreenPhyll.Controllers
{
    abstract public class BaseController : Controller
    {
        #region Private Members
        private static readonly string ADMIN_ROLE = "Admin";
        private CustomAuthentication.User user { get; set; }
        private bool isAdmin { get; set; }
        #endregion

        #region Public Members
        public CustomAuthentication.User UserDetail { get { return user; } }
        public bool IsAdmin { get { return isAdmin; } }
        public string ControllerName { get; set; }
        public string Script { get { return ViewData["View_Script"].ToString(); } set { ViewData["View_Script"] += value; } }
        public string StartupScript { get { return ViewData["View_StartupScript"].ToString(); } set { ViewData["View_StartupScript"] += value; } }
        #endregion

        #region Protected Ovveride Methods
        protected override void OnAuthentication(AuthenticationContext filterContext)
        { }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            #region User Specific Settings
            user = (CustomAuthentication.User)(Session["User"]);
            //isAdmin = user == null ? false : user.Roles.Any(model => model.RoleName.Equals(ADMIN_ROLE, StringComparison.InvariantCultureIgnoreCase));
            #endregion

            ControllerName = filterContext.RouteData.Values["controller"].ToString() + filterContext.RouteData.Values["action"].ToString();
            ViewData["Controller_Name"] = ControllerName;
            ViewData["UserDetail"] = UserDetail;

            //BundleConfig.AddScript("~/Scripts/Users", "common.js", ControllerName);

            Script = string.Empty;
            StartupScript = string.Empty;

            Script = string.Format("var pageName = \"{0}\";", filterContext.RouteData.Values["controller"].ToString());

            base.OnActionExecuting(filterContext);

        }
        #endregion
    }
}