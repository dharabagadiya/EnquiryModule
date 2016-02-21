
#region Using Namespaces
using CustomAuthentication.Security;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Security;
#endregion

namespace CustomAuthentication
{
    public class CustomMembershipProvider
    {
        readonly DataContext Context = new DataContext();

        #region Private Methods
        private void InitializeUserSession(User user)
        {
            var roles = user.Roles.Select(m => m.RoleName).ToArray();
            var serializeModel = new CustomPrincipalSerializeModel();
            serializeModel.UserId = user.UserId;
            serializeModel.FirstName = user.FirstName;
            serializeModel.LastName = user.LastName;
            serializeModel.roles = roles;
            var authTicket = new FormsAuthenticationTicket(1, user.Email, DateTime.Now, DateTime.Now.AddMinutes(60), false, JsonConvert.SerializeObject(serializeModel));
            var encTicket = FormsAuthentication.Encrypt(authTicket);
            var faCookie = new HttpCookie(FormsAuthentication.FormsCookieName, encTicket);
            HttpContext.Current.Session["User"] = user;
            HttpContext.Current.Response.Cookies.Add(faCookie);
        }
        #endregion

        public bool CreateUser(string username, string password, int userRoleID)
        {
            try
            {
                if (Context.Users.Any(model => model.UserName.Equals(username, StringComparison.InvariantCultureIgnoreCase))) { return false; }
                var roles = Context.Roles.Where(model => model.RoleId == userRoleID).ToList();
                Context.Users.Add(new User
                {
                    Email = username,
                    UserName = username,
                    Password = password,
                    Roles = roles,
                    CreateDate = DateTime.UtcNow,
                });
                Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool GoogleCreateUser(string username, int userRoleID)
        {
            try
            {
                if (Context.Users.Any(model => model.UserName.Equals(username, StringComparison.InvariantCultureIgnoreCase))) { return false; }
                var roles = Context.Roles.Where(model => model.RoleId == userRoleID).ToList();
                Context.Users.Add(new User
                {
                    Email = username,
                    UserName = username,
                    Roles = roles,
                    Password = "GoogleLogin",
                    CreateDate = DateTime.UtcNow,
                });
                Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool FacebookCreateUser(string id, int userRoleID)
        {
            try
            {
                if (Context.Users.Any(model => model.UserName.Equals(id, StringComparison.InvariantCultureIgnoreCase))) { return false; }
                var roles = Context.Roles.Where(model => model.RoleId == userRoleID).ToList();
                Context.Users.Add(new User
                {
                    Email = id,
                    UserName = id,
                    Roles = roles,
                    Password = "FacebookLogin",
                    CreateDate = DateTime.UtcNow,
                });
                Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool CreateUser(string firstName, string lastName, string emildID, int userRoleID)
        {
            try
            {
                if (Context.Users.Any(model => model.UserName.Equals(emildID, StringComparison.InvariantCultureIgnoreCase))) { return false; }
                var roles = Context.Roles.Where(model => model.RoleId == userRoleID).ToList();
                Context.Users.Add(new User
                {
                    UserName = emildID,
                    Password = "12345",
                    Email = emildID,
                    FirstName = firstName,
                    LastName = lastName,
                    Roles = roles,
                    CreateDate = DateTime.UtcNow,
                });
                Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }
        }
        public bool Authenticate(string username, string password)
        {
            var user = Context.Users.Where(model => (model.UserName.Equals(username) || model.Email.Equals(username)) && model.Password.Equals(password)).FirstOrDefault();
            if (user == null) { return false; }
            else { InitializeUserSession(user); return true; };
        }
        public bool GoogleAuthenticate(string username)
        {
            var user = Context.Users.Where(model => (model.UserName.Equals(username) || model.Email.Equals(username)) && model.Password.Equals("GoogleLogin")).FirstOrDefault();
            if (user == null) { return false; }
            else { InitializeUserSession(user); return true; };
        }
        public bool FacebookAuthenticate(string id)
        {
            var user = Context.Users.Where(model => (model.UserName.Equals(id) || model.Email.Equals(id)) && model.Password.Equals("FacebookLogin")).FirstOrDefault();
            if (user == null) { return false; }
            else { InitializeUserSession(user); return true; };
        }
        public bool DeleteUser(int id)
        {
            var User = Context.Users.FirstOrDefault(Usr => Usr.UserId == id);
            if (User != null)
            {
                User.IsDeleted = true;
                Context.SaveChanges();
                return true;
            }
            else
            {
                return false;
            }
        }
        public bool UpdateUser(int id, string firstName, string lastName, string emildID, int userRoleID)
        {
            try
            {
                var user = Context.Users.Where(model => model.UserId == id).FirstOrDefault();
                if (user == null) { return false; }
                var roles = Context.Roles.Where(model => model.RoleId == userRoleID).ToList();
                user.UserName = emildID;
                user.Email = emildID;
                user.FirstName = firstName;
                user.LastName = lastName;
                Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }
        public bool ChangePassword(int id, string oldPassword, string newPassword)
        {
            try
            {
                var user = Context.Users.Where(model => model.UserId == id && model.Password.Equals(oldPassword, StringComparison.InvariantCultureIgnoreCase)).FirstOrDefault();
                if (user == null) { return false; }
                user.Password = newPassword;
                Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }
        public List<User> GetUsers()
        { return Context.Users.Where(modal => modal.IsDeleted == false).ToList(); }
        public User GetUser(int id)
        { return Context.Users.Where(modal => modal.IsDeleted == false && modal.UserId == id).FirstOrDefault(); }
        public User GetUser(string userName)
        { return Context.Users.Where(modal => modal.IsDeleted == false && modal.UserName == userName).FirstOrDefault(); }
        public List<User> GetUsers(int roleID)
        { return Context.Users.Where(modal => modal.Roles.Any(roleModel => roleModel.RoleId == roleID)).ToList(); }
        public string CreatePassword(int length)
        {
            const string valid = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
            StringBuilder res = new StringBuilder();
            Random rnd = new Random();
            while (0 < length--)
            {
                res.Append(valid[rnd.Next(valid.Length)]);
            }
            return res.ToString();
        }
        public bool UpdatePassword(string email, string password)
        {
            try
            {
                var user = Context.Users.Where(modal => modal.IsDeleted == false && modal.Email == email).FirstOrDefault();
                if (user == null) { return false; }
                user.Password = password;
                Context.SaveChanges();
                return true;
            }
            catch
            {
                return false;
            }

        }
        public static void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.Roles)
                .WithMany(r => r.Users)
                .Map(model =>
                {
                    model.ToTable("UserRoles");
                    model.MapLeftKey("UserId");
                    model.MapRightKey("RoleId");
                });
        }
    }
}