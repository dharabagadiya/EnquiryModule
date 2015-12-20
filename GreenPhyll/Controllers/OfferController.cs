using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;

namespace GreenPhyll.Controllers
{
    public class OfferController : BaseController
    {
        public ActionResult Index()
        {
            var offerManager = new OfferManager();
            var getoffers = offerManager.GetOffers();
            return View(getoffers);
        }
    }
}