using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class EnquiryManager
    {
        private DataContext Context = new DataContext();
        public bool Add(string pincode, string address, string optionOne, string optionMulti, string name, string mobileNumber, string email)
        {
            try
            {
                Context.Enquires.Add(new Modal.Enquiry
                {
                    Pincode = pincode,
                    PropertyAddress = address,
                    OptionOne = optionOne,
                    OptionMultiple = optionMulti,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                });
                var status = Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
