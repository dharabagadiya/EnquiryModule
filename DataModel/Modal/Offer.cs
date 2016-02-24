using System;

namespace DataModel.Modal
{
    public class Offer : CommonEntities
    {
        public int OfferID { get; set; }
        public String ReType { get; set; }
        public String ImagePath { get; set; }
        public String CompanyName { get; set; }
        public float ImplementationCost { get; set; }
        public String ProductName { get; set; }
        public String ProductDescription { get; set; }
        public String Capacity { get; set; }
    }
}
