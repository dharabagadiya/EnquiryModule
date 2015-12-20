using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class UserDetail
    {
        public int UserDetailID { get; set; }
        public int UserID { get; set; }
        public String Name { get; set; }
        public String MobileNo { get; set; }
        public String Location { get; set; }
        public bool IsDeleted { get; set; }
    }
}
