﻿using DataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace RenewIn.Controllers
{
    public class EnquiryListController : BaseController
    {
        public ActionResult Index()
        {
            var enquiryManager = new EnquiryManager();
            var getEnquiries = enquiryManager.GetEnquiries();
            return View(getEnquiries);
        }
    }
}