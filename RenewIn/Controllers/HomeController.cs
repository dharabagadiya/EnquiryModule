
using CustomAuthentication.Security;
using System.Web.Mvc;

namespace RenewIn.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            BundleConfig.AddScript("~/Scripts/Services", "Services.js", ControllerName);
            return View();
        }
    }
}