using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataModel.Modal;

namespace DataModel
{
    public class EnquiryManager
    {
        private DataContext Context = new DataContext();
        public int Add(string pincode, string address, string optionOne, string optionMulti, string name, string mobileNumber, string email, float field1, float field2, float field3, int userId)
        {
            try
            {
                var enquiry = new Modal.Enquiry
                {
                    Pincode = pincode,
                    PropertyAddress = address,
                    OptionOne = optionOne,
                    OptionMultiple = optionMulti,
                    Name = name,
                    MobileNo = mobileNumber,
                    Email = email,
                    Field1 = field1,
                    Field2 = field2,
                    Field3 = field3,
                    UserId = userId,
                    IsDeleted = false,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };

                Context.Enquires.Add(enquiry);
                Context.SaveChanges();
                return enquiry.EnquiryID;
            }
            catch (Exception ex)
            {
                return 0;
            }
        }
        public List<Enquiry> GetEnquiries()
        { return Context.Enquires.ToList(); }
        public Enquiry GetEnquiryDetail(int id)
        { return Context.Enquires.Where(model => model.EnquiryID == id).FirstOrDefault(); }
    }
}
