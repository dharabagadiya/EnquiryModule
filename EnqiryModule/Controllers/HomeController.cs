
using CustomAuthentication.Security;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class HomeController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}