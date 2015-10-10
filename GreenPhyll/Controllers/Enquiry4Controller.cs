using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class Enquiry4Controller : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult Add(string pincode, string address, string firstOption, string name, string mobileNumber, string email, string pan, string cin, float elit, float donec, float ultrices, float lectus, string companyName)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var enquiry4Manager = new Enquiry4Manager();
            var status = enquiry4Manager.Add(pincode, address, firstOption, name, mobileNumber, email, pan, cin, elit, donec, ultrices, lectus, companyName, userId);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
    }
}