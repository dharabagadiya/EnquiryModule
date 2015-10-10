using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
   public class Enquiry2
    {
        public int Enquiry2ID { get; set; }
        public String Name { get; set; }
        public String MobileNo { get; set; }
        public String Email { get; set; }
        public String Pincode { get; set; }
        public String Address { get; set; }
        public String FirstOption { get; set; }
        public String SecondOption { get; set; }
        public String AppName { get; set; }
        public String PAN { get; set; }
        public String CIN { get; set; }
        public float Ultrices { get; set; }
        public float Lectus { get; set; }
        public float Donec { get; set; }
        public float Elit { get; set; }
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
