
using CustomAuthentication.Security;
using System.Web.Mvc;

namespace EnqiryModule.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}