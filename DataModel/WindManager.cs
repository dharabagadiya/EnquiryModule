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
        public List<WindService> GetWindService()
        { return Context.WindServices.ToList(); }
    }
}
