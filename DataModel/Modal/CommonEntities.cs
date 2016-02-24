using System;
using System.ComponentModel;

namespace DataModel.Modal
{
    public abstract class CommonEntities
    {
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
