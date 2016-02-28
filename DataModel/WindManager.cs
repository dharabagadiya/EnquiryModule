using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Modal;

namespace DataModel
{
    public class WindManager
    {
        private DataContext Context = new DataContext();
        public int Add(string applicantType, string pincode, string address, string applicantName, string pan, string cin, float totalWEGPlanned, float proposedCapacity, float estimatedProjectCost, float avgLast3yrTurnOver, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var wind = new Modal.Wind
                {
                    ApplicantType = applicantType,
                    Pincode = pincode,
                    Address = address,
                    PAN = pan,
                    CIN = cin,
                    TotalWEGPlanned = totalWEGPlanned,
                    ProposedCapacity = proposedCapacity,
                    EstimatedProjectCost = estimatedProjectCost,
                    AvgLast3yrTurnOver = avgLast3yrTurnOver,
                    ApplicantName = applicantName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    Location = location,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Winds.Add(wind);
                Context.SaveChanges();
                return wind.WindID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddServices(string address, string pincode, string servicelookingtype, string turbinemanufacture, string servicerequesttype, string servicerequestmsg, string companyname, string contactpersonname, string email, string mobileno, int userId, string location)
        {
            try
            {
                var windService = new Modal.WindService
                {
                    Pincode = pincode,
                    Address = address,
                    ServiceLookingType = servicelookingtype,
                    TurbineManufacture = turbinemanufacture,
                    ServiceRequestType = servicerequesttype,
                    ServiceRequestMsg = servicerequestmsg,
                    CompanyName = companyname,
                    ContactPersonName = contactpersonname,
                    MobileNo = mobileno,
                    Email = email,
                    Location = location,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.WindServices.Add(windService);
                Context.SaveChanges();
                return windService.WindServiceID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public bool AddAttachment(int WindServiceID, string path, int userId, int defaultImage)
        {
            try
            {
                var wind = Context.WindServices.Where(modal => modal.WindServiceID == WindServiceID).FirstOrDefault();
                if (wind == null) return false;
                var imageResource = new Modal.ImageFileResource
                {
                    path = path,
                    ServiceID = WindServiceID,
                    ServiceType = "Wind",
                    UserId = userId,
                    DefaultImage = defaultImage,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };
                Context.ImageFileResources.Add(imageResource);
                var status = Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public List<WindService> GetWindService()
        { return Context.WindServices.ToList(); }
        public string GetImagePath(int windServiceId)
        {
            var filePath = Context.ImageFileResources.Where(model => model.ServiceID == windServiceId && model.DefaultImage == 1 && model.ServiceType == "Wind").Select(model => model.path).FirstOrDefault();
            return filePath == null ? "~/images/DefaultImage.png" : filePath;
        }
    }
}
