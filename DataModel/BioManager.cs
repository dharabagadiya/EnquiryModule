using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Modal;

namespace DataModel
{
    public class BioManager
    {
        private DataContext Context = new DataContext();
        public int Add(string bioServiceType, string applicantType, string applicantName, string pan, string cin, string pincode, string address, float proposedCapacity, float estimatedProjectCost, float avgLast3yrTurnOver, string companyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var bio = new Modal.Bio
                {
                    BioServiceType = bioServiceType,
                    ApplicantType = applicantType,
                    ApplicantName = applicantName,
                    PAN = pan,
                    CIN = cin,
                    Pincode = pincode,
                    Address = address,
                    ProposedCapacity = proposedCapacity,
                    EstimatedProjectCost = estimatedProjectCost,
                    AvgLast3yrTurnOver = avgLast3yrTurnOver,
                    CompanyName = companyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    Location = location,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Bios.Add(bio);
                Context.SaveChanges();
                return bio.BioID;
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
                var bioService = new Modal.BioService
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

                Context.BioServices.Add(bioService);
                Context.SaveChanges();
                return bioService.BioServiceID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public List<BioService> GetBioService()
        { return Context.BioServices.ToList(); }
    }
}
