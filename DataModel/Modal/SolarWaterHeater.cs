using System;

namespace DataModel.Modal
{
    public class SolarWaterHeater : CommonEntities
    {
        public int SolarWaterHeaterID { get; set; }
        public String ApplicantType { get; set; }
        public String Address { get; set; }
        public String Location { get; set; }
        public String Pincode { get; set; }
        public float MonthlyElectricityBill { get; set; }
        public float ProposedCapacity { get; set; }
        public float ShadowFreeArea { get; set; }
        public String CompanyName { get; set; }
        public String Name { get; set; }
        public String MobileNo { get; set; }
        public String Email { get; set; }
    }
}
