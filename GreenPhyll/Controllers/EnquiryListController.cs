using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace GreenPhyll.Controllers
{
    public class EnquiryListController : Controller
    {
        public ActionResult Index()
        {
            var enquiryManager = new EnquiryManager();
            var getEnquiries = enquiryManager.GetEnquiries();
            return View(getEnquiries);
        }
    }
}