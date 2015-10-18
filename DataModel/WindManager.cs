using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class WindManager
    {
        private DataContext Context = new DataContext();
        public int Add(string applicantType, string pincode, string address, float gPSLatitude, float gPSLongitude, string applicantName, string pan, string cin, float totalWEGPlanned, float proposedCapacity, float estimatedProjectCost, float avgLast3yrTurnOver, string name, string mobileNumber, string email, int userId)
        {
            try
            {
                var wind = new Modal.Wind
                {
                    ApplicantType = applicantType,
                    Pincode = pincode,
                    Address = address,
                    GPSLatitude = gPSLatitude,
                    GPSLongitude = gPSLongitude,
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
    }
}
