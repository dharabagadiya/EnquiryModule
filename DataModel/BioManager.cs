using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class BioManager
    {
        private DataContext Context = new DataContext();
        public int Add(string bioServiceType, string applicantType, string applicantName, string pan, string cin, string pincode,
            string address, float gPSLatitude, float gPSLongitude, float proposedCapacity, float estimatedProjectCost,
            float avgLast3yrTurnOver, string companyName, string name, string mobileNumber, string email, int userId)
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
                    GPSLatitude = gPSLatitude,
                    GPSLongitude = gPSLongitude,
                    ProposedCapacity = proposedCapacity,
                    EstimatedProjectCost = estimatedProjectCost,
                    AvgLast3yrTurnOver = avgLast3yrTurnOver,
                    CompanyName = companyName,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
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
    }
}
