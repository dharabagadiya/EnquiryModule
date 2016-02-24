using System;
using System.ComponentModel.DataAnnotations;

namespace DataModel.Modal
{
    public class FeedBack : CommonEntities
    {
        public int FeedBackID { get; set; }
        [Required(ErrorMessage = "Please enter Feedback / Query / Support Question")]
        public String Feedback_Question { get; set; }
        [Required(ErrorMessage = "Please enter your feedback")]
        public String Feedback_Msg { get; set; }
    }
}
