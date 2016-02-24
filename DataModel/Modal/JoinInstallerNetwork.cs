using System;

namespace DataModel.Modal
{
    public class JoinInstallerNetwork : CommonEntities
    {
        public int JoinInstallerNetworkId { get; set; }
        public String Name { get; set; }
        public String Email { get; set; }
        public String CompanyName { get; set; }
        public String MobileNumber { get; set; }
        public String Message { get; set; }
        public String BusinessArea { get; set; }
        public String WhoYouAre { get; set; }
    }
}
