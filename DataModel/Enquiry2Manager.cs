using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class Enquiry2Manager
    {
        private DataContext Context = new DataContext();
        public int Add(string pincode, string address, string firstOption, string secondOption, string name, string mobileNumber, string email, string pan, string cin, float elit, float donec, float ultrices, float lectus, string appName, int userId)
        {
            try
            {
                var enquiry2 = new Modal.Enquiry2
                {
                    Pincode = pincode,
                    Address = address,
                    FirstOption = firstOption,
                    SecondOption = secondOption,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    PAN = pan,
                    CIN = cin,
                    Elit = elit,
                    Donec = donec,
                    Ultrices = ultrices,
                    Lectus = lectus,
                    AppName = appName,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Enquires2.Add(enquiry2);
                Context.SaveChanges();
                return enquiry2.Enquiry2ID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
