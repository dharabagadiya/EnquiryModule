using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class SolarService
    {
        public int SolarServiceID { get; set; }
        public String Address { get; set; }
        public String Location { get; set; }
        public String Pincode { get; set; }
        public String ServiceLookingType { get; set; }
        public String ServiceRequestType { get; set; }
        public String ServiceRequestMsg { get; set; }
        public String CompanyName { get; set; }
        public String ContactPersonName { get; set; }
        public String MobileNo { get; set; }
        public String Email { get; set; }
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
