
#region Using Namespaces
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
#endregion

namespace DataModel.Modal
{
    public class Enquiry
    {
        public int EnquiryID { get; set; }
        public String Name { get; set; } 
        public String MobileNo { get; set; }
        public String Email { get; set; }
        public String Pincode { get; set; }
        public String PropertyAddress { get; set; }
        public String OptionOne { get; set; }
        public String OptionMultiple { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
