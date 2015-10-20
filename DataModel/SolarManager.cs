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
        public int Add(string SolarServiceType, string ApplicantType, string pincode, string address, float GPSLatitude,
            float GPSLongitude, float MonthlyElectricityBill, float ProposedCapacityKW, float ShadowFreeArea,
            string IntallationReqForm, string name, string mobileNumber, string email, int userId)
        {
            try
            {
                var Solar = new Modal.Solar
                {
                    SolarServiceType = SolarServiceType,
                    ApplicantType = ApplicantType,
                    Pincode = pincode,
                    Address = address,
                    GPSLatitude = GPSLatitude,
                    GPSLongitude = GPSLongitude,
                    MonthlyElectricityBill = MonthlyElectricityBill,
                    ProposedCapacityKW = ProposedCapacityKW,
                    ShadowFreeArea = ShadowFreeArea,
                    IntallationReqForm = IntallationReqForm,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    UserId = userId,
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
    }
}
