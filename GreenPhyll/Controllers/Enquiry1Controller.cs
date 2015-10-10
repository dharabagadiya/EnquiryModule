using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class Enquiry1Controller : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult Add(string pincode, string address, string firstOption, string secondOption, string name, string mobileNumber, string email, string lorem, string ipsum, string morbi, string dapibus)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var enquiry1Manager = new Enquiry1Manager();
            var status = enquiry1Manager.Add(pincode, address, firstOption, secondOption, name, mobileNumber, email, lorem, ipsum, morbi, dapibus, userId);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}