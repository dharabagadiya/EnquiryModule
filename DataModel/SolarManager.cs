using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class SolarManager
    {
        private DataContext Context = new DataContext();
        public int Add(string SolarServiceType, string ApplicantType, string pincode, string address, float MonthlyElectricityBill, float ProposedCapacityKW, float ShadowFreeArea, string IntallationReqForm, string CompanyName, string name, string mobileNumber, string email, int userId, string location)
        {
            try
            {
                var Solar = new Modal.Solar
                {
                    SolarServiceType = SolarServiceType,
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    MonthlyElectricityBill = MonthlyElectricityBill,
                    ProposedCapacityKW = ProposedCapacityKW,
                    ShadowFreeArea = ShadowFreeArea,
                    IntallationReqForm = IntallationReqForm,
                    CompanyName = CompanyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
                    Location = location,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Solars.Add(Solar);
                Context.SaveChanges();
                return Solar.SolarID;
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
                var solarService = new Modal.SolarService
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

                Context.SolarServices.Add(solarService);
                Context.SaveChanges();
                return solarService.SolarServiceID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
