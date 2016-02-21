
#region Using Namespaces
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
#endregion

namespace CustomAuthentication
{
    public class User
    {
        public int UserId { get; set; }
        [Required]
        public String UserName { get; set; }
        [Required]
        public String Email { get; set; }
        [Required(ErrorMessage = "Please enter new password")]
        public String Password { get; set; }
        [Required(ErrorMessage = "Please enter old password")]
        [NotMapped] // Does not effect with your database
        public String OldPassword { get; set; }
        [NotMapped] // Does not effect with your database
        [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
        public String ConfirmPassword { get; set; }
        public String FirstName { get; set; }
        public String LastName { get; set; }
        public Boolean IsActive { get; set; }
        public DateTime CreateDate { get; set; }
        [DefaultValue(false)]
        public bool IsDeleted { get; set; }
        public virtual ICollection<Role> Roles { get; set; }
        public virtual IUserDetail UserDetail { get; set; }
    }
}