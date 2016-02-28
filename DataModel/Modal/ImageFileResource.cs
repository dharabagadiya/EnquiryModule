using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class ImageFileResource : CommonEntities
    {
        public int ImageFileResourceId { get; set; }
        public int ServiceID { get; set; }
        public String ServiceType { get; set; }
        public int DefaultImage { get; set; }
        public String path { get; set; }
    }
}
