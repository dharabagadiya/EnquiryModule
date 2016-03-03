using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;

namespace RenewIn.Controllers
{
    public class OfferController : BaseController
    {
        public ActionResult Index(string serviceType = "")
        {
            BundleConfig.AddScript("~/Scripts/Offer", "offer.js", ControllerName);
            var offerManager = new OfferManager();
            var getoffers = offerManager.GetOffers(serviceType);
            return View(getoffers);
        }
        public JsonResult MapOffers(int OfferId)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var status = -1;
            if (userId != 0)
            {
                var offerManager = new OfferManager();
                status = offerManager.MapOffer(OfferId, userId);
            }
            return Json(status);
        }
    }
}