
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace EnqiryModule.Controllers
{
    public class HomeController : Controller
    {
        private static readonly string ADMIN_ROLE = "Admin";
        private bool isAdmin { get; set; }
        public ActionResult Index()
        {
            return View();
        }
        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            #region User Specific Settings
            var sessionUser = (CustomAuthentication.User)(Session["User"]);
            //var userManager = new DataModel.UserManager();
            //user = userManager.GetUserDetail(sessionUser.UserId);
            if (sessionUser != null)
                isAdmin = sessionUser.Roles.Any(model => model.RoleName.Equals(ADMIN_ROLE, StringComparison.InvariantCultureIgnoreCase));
            #endregion

            //ControllerName = filterContext.RouteData.Values["controller"].ToString() + filterContext.RouteData.Values["action"].ToString();
            //ViewData["Controller_Name"] = ControllerName;
            //ViewData["UserDetail"] = UserDetail;

            //BundleConfig.AddScript("~/Scripts/Users", "users.js", ControllerName);

            //Script = string.Empty;
            //StartupScript = string.Empty;

            //Script = string.Format("var pageName = \"{0}\";", filterContext.RouteData.Values["controller"].ToString());

            //base.OnActionExecuting(filterContext);
        }
    }
}