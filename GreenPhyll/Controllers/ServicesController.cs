using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;
using PagedList;
using PagedList.Mvc;

namespace GreenPhyll.Controllers
{
    public class ServicesController : BaseController
    {
        public ActionResult Search(int? page, int serviceType = 0, string searchText = "")
        {
            BundleConfig.AddScript("~/Scripts/Services", "Services.js", ControllerName);
            var allServices = new SolarManager().GetSolarService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 1, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Solar", ServiceId = model.SolarServiceID }).ToList();
            allServices.AddRange(new WindManager().GetWindService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 2, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Wind", ServiceId = model.WindServiceID }).ToList());
            allServices.AddRange(new BioManager().GetBioService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 3, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Bio", ServiceId = model.BioServiceID }).ToList());
            allServices.AddRange(new HydroManager().GetHydroService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 4, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Solar", ServiceId = model.HydroServiceID }).ToList());
            allServices = allServices.OrderByDescending(model => model.CreateDate).Where(model => model.ServiceType == serviceType || serviceType == 0).ToList();
            allServices = allServices.Where(model => model.Title.ToLower().Contains(searchText.ToLower()) || model.Description.ToLower().Contains(searchText.ToLower())).ToList();
            return View(allServices.ToPagedList(page ?? 1, 3));
        }
        public JsonResult MapServices(string ServiceType, int ServiceId)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var status = -1;
            if (userId != 0)
            {
                var serviceManager = new ServiceManager();
                status = serviceManager.MapService(ServiceType, ServiceId, userId);
            }
            return Json(status);
        }
    }
}