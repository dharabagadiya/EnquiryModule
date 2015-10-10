using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class Enquiry2Controller : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult Add(string pincode, string address, string firstOption, string secondOption, string name, string mobileNumber, string email, string pan, string cin, float elit, float donec, float ultrices, float lectus,string appName)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var enquiry2Manager = new Enquiry2Manager();
            var status = enquiry2Manager.Add(pincode, address, firstOption, secondOption, name, mobileNumber, email, pan, cin, elit, donec, ultrices, lectus, appName, userId);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}