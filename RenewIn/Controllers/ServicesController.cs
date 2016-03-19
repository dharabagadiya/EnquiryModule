using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;
using DataModel.Modal;
using PagedList;
using PagedList.Mvc;

namespace RenewIn.Controllers
{
    public class ServicesController : BaseController
    {
        public ActionResult Search(int? page, int serviceType = 0, string searchText = "")
        {
            BundleConfig.AddScript("~/Scripts/Services", "Services.js", ControllerName);
            var allServices = new SolarManager().GetSolarService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 1, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Solar", ServiceId = model.SolarServiceID, Path = new SolarManager().GetImagePath(model.SolarServiceID) }).ToList();
            allServices.AddRange(new WindManager().GetWindService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 2, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Wind", ServiceId = model.WindServiceID, Path = new WindManager().GetImagePath(model.WindServiceID) }).ToList());
            allServices.AddRange(new BioManager().GetBioService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 3, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Bio", ServiceId = model.BioServiceID, Path = new BioManager().GetImagePath(model.BioServiceID) }).ToList());
            allServices.AddRange(new HydroManager().GetHydroService().Select(model => new DataModel.Modal.ServiceGrid { ServiceType = 4, Re_Type = model.ServiceLookingType, Title = model.ServiceRequestType, Description = model.ServiceRequestMsg, Location = model.Location, CreateDate = model.CreateDate, Service = "Hydro", ServiceId = model.HydroServiceID, Path = new HydroManager().GetImagePath(model.HydroServiceID) }).ToList());
            allServices = allServices.OrderByDescending(model => model.CreateDate).Where(model => model.ServiceType == serviceType || serviceType == 0).ToList();
            allServices = allServices.Where(model => model.Title.ToLower().Contains(searchText.ToLower()) || model.Description.ToLower().Contains(searchText.ToLower())).ToList();
            return View(allServices.ToPagedList(page ?? 1, 10));
        }
        public JsonResult MapServices(string ServiceType, int ServiceId)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var status = -1;
            if (userId != 0)
            {
                return Json(new
                {
                    redirectUrl = Url.Action("Message/" + ServiceId + "/" + ServiceType, "Services"),
                    isRedirect = true
                });
            }
            return Json(status);
        }
        public ActionResult Message(int serviceType = 0, string searchText = "")
        {
            return View();
        }

        [HttpPost]
        public ActionResult Message(Message formCollection, int serviceType = 0, string searchText = "")
        {
            if (UserDetail == null)
            {
                return RedirectToAction("", "");
            }
            var userID = UserDetail.UserId;
            var message = formCollection.UserMessage;
            var serviceManager = new ServiceManager();
            var status = serviceManager.MapService(searchText, serviceType, userID, message);
            return RedirectToAction("", "ThankYou");
        }
    }
}