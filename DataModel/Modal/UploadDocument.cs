using System;

namespace DataModel.Modal
{
    public class UploadDocument : CommonEntities
    {
        public int UploadDocumentID { get; set; }
        public String path { get; set; }
        public String name { get; set; }
    }
}
