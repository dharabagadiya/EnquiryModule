using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;

namespace GreenPhyll.Controllers
{
    public class ServicesController : BaseController
    {
        public ActionResult Search(int serviceType = 0, string searchText = "")
        {
            BundleConfig.AddScript("~/Scripts/Services", "Services.js", ControllerName);
            var allServices = new SolarManager().GetSolarService().Select(model => new { ServiceType = 1, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList();
            allServices.AddRange(new WindManager().GetWindService().Select(model => new { ServiceType = 2, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList());
            allServices.AddRange(new BioManager().GetBioService().Select(model => new { ServiceType = 3, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList());
            allServices.AddRange(new HydroManager().GetHydroService().Select(model => new { ServiceType = 4, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList());
            allServices = allServices.Where(model => serviceType == 0 || model.ServiceType == serviceType).ToList();
            return View(allServices);
        }
        //[HttpPost]
        //public JsonResult GetServices(int type = 0)
        //{
        //    //var allServices = new SolarManager().GetSolarService().Select(model => new { ServiceType = 1, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList();
        //    //allServices.AddRange(new WindManager().GetWindService().Select(model => new { ServiceType = 2, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList());
        //    //allServices.AddRange(new BioManager().GetBioService().Select(model => new { ServiceType = 3, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList());
        //    //allServices.AddRange(new HydroManager().GetHydroService().Select(model => new { ServiceType = 4, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location }).ToList());
        //    //allServices = allServices.Where(model => type == 0 || model.ServiceType == type).ToList();
        //    return Json(new { "" });
        //}
    }
}