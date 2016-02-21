using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
    public class FeedBack
    {
        public int FeedBackID { get; set; }
        [Required(ErrorMessage = "Please enter Feedback / Query / Support Question")]
        public String Feedback_Question { get; set; }
        [Required(ErrorMessage = "Please enter your feedback")]
        public String Feedback_Msg { get; set; }
        public int UserId { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}
