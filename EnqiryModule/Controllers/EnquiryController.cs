using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;

namespace EnqiryModule.Controllers
{
    public class EnquiryController : BaseController
    {
        // GET: Enquiry
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult AddEnquiry(string pincode, string address, string optionOne, string optionMulti, string name, string mobileNumber, string email)
        {
            var enquiryManager = new EnquiryManager();
            var status = enquiryManager.Add(pincode, address, optionOne, optionMulti, name, mobileNumber, email);
            return Json(status);
        }
    }
}