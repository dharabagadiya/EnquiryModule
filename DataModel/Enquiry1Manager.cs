using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class Enquiry1Manager
    {
        private DataContext Context = new DataContext();
        public int Add(string pincode, string address, string firstOption, string secondOption, string name, string mobileNumber, string email, string lorem, string ipsum, string morbi, string dapibus,int userId)
        {
            try
            {
                var enquiry1 = new Modal.Enquiry1
                {
                    Pincode = pincode,
                    Address = address,
                    FirstOption = firstOption,
                    SecondOption = secondOption,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    Lorem = lorem,
                    Ipsum = ipsum,
                    Morbi = morbi,
                    Dapibus=dapibus,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Enquires1.Add(enquiry1);
                Context.SaveChanges();
                return enquiry1.Enquiry1ID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
    }
}
