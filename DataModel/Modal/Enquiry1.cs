using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class Enquiry1
    {
        public int Enquiry1ID { get; set; }
        public String Name { get; set; }
        public String MobileNo { get; set; }
        public String Email { get; set; }
        public String Pincode { get; set; }
        public String Address { get; set; }
        public String FirstOption { get; set; }
        public String SecondOption { get; set; }
        public String Lorem { get; set; }
        public String Ipsum { get; set; }
        public String Morbi { get; set; }
        public String Dapibus { get; set; }
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
