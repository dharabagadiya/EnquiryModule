using System;

namespace DataModel.Modal
{
    public class SolarEquipment : CommonEntities
    {
        public int SolarEquipmentID { get; set; }
        public String SolarServiceType { get; set; }
        public String ApplicantType { get; set; }
        public String Address { get; set; }
        public String Location { get; set; }
        public String Pincode { get; set; }
        public float Budget { get; set; }
        public float EquipmentNumber { get; set; }
        public String Message { get; set; }
        public String CompanyName { get; set; }
        public String Name { get; set; }
        public String MobileNo { get; set; }
        public String Email { get; set; }
    }
}
