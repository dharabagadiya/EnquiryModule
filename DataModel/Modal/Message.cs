using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel.Modal
{
   public class Message
    {
        [Required(ErrorMessage = "Please enter your message")]
        public String UserMessage { get; set; }
    }
}
