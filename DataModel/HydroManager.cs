using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Modal;

namespace DataModel
{
    public class HydroManager
    {
        private DataContext Context = new DataContext();
        public int Add(string applicantType, string pincode, string address, string applicantName, string pan, string cin, float totalTurbinesPlanned, float proposedCapacity, float estimatedProjectCost, float avgLast3yrTurnOver, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var hydro = new Modal.Hydro
                {
                    ApplicantType = applicantType,
                    Pincode = pincode,
                    Address = address,
                    PAN = pan,
                    CIN = cin,
                    TotalTurbinesPlanned = totalTurbinesPlanned,
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

                Context.Hydros.Add(hydro);
                Context.SaveChanges();
                return hydro.HydroID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public int AddServices(string address, string pincode, string servicelookingtype, string servicerequesttype, string servicerequestmsg, string companyname, string contactpersonname, string email, string mobileno, int userId, string location)
        {
            try
            {
                var hydroService = new Modal.HydroService
                {
                    Pincode = pincode,
                    Address = address,
                    ServiceLookingType = servicelookingtype,
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

                Context.HydroServices.Add(hydroService);
                Context.SaveChanges();
                return hydroService.HydroServiceID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public bool AddAttachment(int HydroServiceID, string path, int userId, int defaultImage)
        {
            try
            {
                var hydro = Context.HydroServices.Where(modal => modal.HydroServiceID == HydroServiceID).FirstOrDefault();
                if (hydro == null) return false;
                var imageResource = new Modal.ImageFileResource
                {
                    path = path,
                    ServiceID = HydroServiceID,
                    ServiceType = "Hydro",
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
        public List<HydroService> GetHydroService()
        { return Context.HydroServices.ToList(); }
        public string GetImagePath(int hyrdoServiceId)
        {
            var filePath = Context.ImageFileResources.Where(model => model.ServiceID == hyrdoServiceId && model.DefaultImage == 1 && model.ServiceType == "Hydro").Select(model => model.path).FirstOrDefault();
            return filePath == null ? "~/images/DefaultImage.png" : filePath;
        }
    }
}
