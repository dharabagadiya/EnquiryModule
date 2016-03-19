using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using DataModel;
using System.IO;

namespace RenewIn.Controllers
{
    public class EnquiryController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult AddEnquiry(string pincode, string address, string optionOne, string optionMulti, string name, string mobileNumber, string email, float Field1, float Field2, float Field3)
        {
            var userId = UserDetail == null ? 0 : UserDetail.UserId;
            var enquiryManager = new EnquiryManager();
            var status = enquiryManager.Add(pincode, address, optionOne, optionMulti, name, mobileNumber, email, Field1, Field2, Field3, userId);
            Session["Enquery_ID"] = status;
            return Json(status != 0);
        }
        public PartialViewResult Detail(int id)
        {
            var enquiryManager = new DataModel.EnquiryManager();
            var enquiryDetail = enquiryManager.GetEnquiryDetail(id);
            return PartialView(enquiryDetail);
        }
        public ActionResult ThankYou()
        {
            if (Session["Enquery_ID"] != null)
            {
                var enquiryID = (int)Session["Enquery_ID"];
                var enquiryManager = new EnquiryManager();
                var enquiryDetail = enquiryManager.GetEnquiryDetail(enquiryID);
                using (var sw = new StringWriter())
                {
                    ViewData.Model = enquiryDetail;
                    ViewEngineResult viewResult = ViewEngines.Engines.FindPartialView(ControllerContext, "Success");
                    ViewContext viewContext = new ViewContext(ControllerContext, viewResult.View, ViewData, TempData, sw);
                    viewResult.View.Render(viewContext, sw);
                    try
                    {
                        Utilities.Email.SendMail(enquiryDetail.Email, sw.GetStringBuilder().ToString(),"");
                    }
                    catch
                    {
                    }
                }
            }
            return View();
        }
    }
}