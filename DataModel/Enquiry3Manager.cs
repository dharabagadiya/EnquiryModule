using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class Enquiry3Manager
    {
        private DataContext Context = new DataContext();
        public int Add(string pincode, string address, string firstOption, string name, string mobileNumber, string email, string pan, string cin, float elit, float donec, float ultrices, float lectus, string companyName, int userId)
        {
            try
            {
                var enquiry3 = new Modal.Enquiry3
                {
                    Pincode = pincode,
                    Address = address,
                    FirstOption = firstOption,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    PAN = pan,
                    CIN = cin,
                    Elit = elit,
                    Donec = donec,
                    Ultrices = ultrices,
                    Lectus = lectus,
                    CompanyName = companyName,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Enquires3.Add(enquiry3);
                Context.SaveChanges();
                return enquiry3.Enquiry3ID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
