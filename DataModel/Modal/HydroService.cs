using System;

namespace DataModel.Modal
{
    public class HydroService : CommonEntities
    {
        public int HydroServiceID { get; set; }
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
    }
}