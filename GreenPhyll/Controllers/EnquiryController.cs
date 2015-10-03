using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;

namespace GreenPhyll.Controllers
{
    public class EnquiryController : BaseController
    {
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
        public PartialViewResult Detail(int id)
        {
            var enquiryManager = new DataModel.EnquiryManager();
            var enquiryDetail = enquiryManager.GetEnquiryDetail(id);
            return PartialView(enquiryDetail);
        }
    }
}