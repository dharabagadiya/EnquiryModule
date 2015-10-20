﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class Bio
    {
        public int BioID { get; set; }
        public String BioServiceType { get; set; }
        public String ApplicantType { get; set; }
        public String ApplicantName { get; set; }
        public String PAN { get; set; }
        public String CIN { get; set; }
        public String Pincode { get; set; }
        public String Address { get; set; }
        public float GPSLatitude { get; set; }
        public float GPSLongitude { get; set; }
        public float ProposedCapacity { get; set; }
        public float EstimatedProjectCost { get; set; }
        public float AvgLast3yrTurnOver { get; set; }
        public String CompanyName { get; set; }
        public String Name { get; set; }
        public String MobileNo { get; set; }
        public String Email { get; set; }
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}