using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class JoinInstallerNetwork
    {
        public int JoinInstallerNetworkId { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public String Designation { get; set; }
        public string DeskNumber { get; set; }
        public String CompanyName { get; set; }
        public String MobileNumber { get; set; }
        public String AdditionalNotes { get; set; }
        public String RadioField { get; set; }
        public String CheckboxField { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
