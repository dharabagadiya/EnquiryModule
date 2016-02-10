using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;

namespace GreenPhyll.Controllers
{
    public class JoinInstallerNetworkController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult Add(string name, string email, string mobileNumber, string companyName, string additionalNotes, string radioField, string checkboxField)
        {
            var joinInstallerNetworkManager = new JoinInstallerNetworkManager();
            var status = joinInstallerNetworkManager.Add(name, email, mobileNumber, companyName, additionalNotes, radioField, checkboxField);
            return Json(status);
        }
    }
}