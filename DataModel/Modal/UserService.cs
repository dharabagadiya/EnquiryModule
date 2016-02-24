using System;

namespace DataModel.Modal
{
    public class UserService : CommonEntities
    {
        public int UserServiceID { get; set; }
        public String ServiceType { get; set; }
        public int ServiceId { get; set; }
    }
}
