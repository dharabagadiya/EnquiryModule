using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EnqiryModule.Controllers
{
    public class LoginController : Controller
    {
        public JsonResult Authenticate(string username, string password)
        {
            var customMembershipProvider = new CustomAuthentication.CustomMembershipProvider();
            var status = customMembershipProvider.Authenticate(username, password);
            return Json(status);
        }
    }
}