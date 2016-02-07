using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class UploadDocument
    {
        public int UploadDocumentID { get; set; }
        public String path { get; set; }
        public String name { get; set; }
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
