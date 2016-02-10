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
        public String CompanyName { get; set; }
        public String MobileNumber { get; set; }
        public String Message { get; set; }
        public String BusinessArea { get; set; }
        public String WhoYouAre { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
