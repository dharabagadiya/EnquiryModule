using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class Offer
    {
        public int OfferID { get; set; }
        public String ReType { get; set; }
        public String ImagePath { get; set; }
        public String CompanyName { get; set; }
        public float ImplementationCost { get; set; }
        public String ProductName { get; set; }
        public String ProductDescription { get; set; }
        public String Capacity { get; set; }
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
