using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class UserDetailManager
    {
        private DataContext Context = new DataContext();

        public void Add(int userID)
        {
            var userDetail = Context.UserDetails.Where(model => model.UserID == userID).FirstOrDefault();
            if (userDetail != null) return;
            Context.UserDetails.Add(new Modal.UserDetail { UserID = userID, MobileNo = "", Location = "" });
            Context.SaveChanges();
        }
        public Modal.UserDetail Get(int userID)
        {
            var userDetail = Context.UserDetails.Where(model => model.UserID == userID).FirstOrDefault();
            if (userDetail == null)
            {
                Add(userID);
            }
            userDetail = Context.UserDetails.Where(model => model.UserID == userID).FirstOrDefault();
            return userDetail;
        }
        public Modal.UserDetail Update(int userID, string name, string mobileNumber, string location)
        {
            var userDetail = Get(userID);
            if (userDetail == null)
            {
                Add(userID);
                userDetail = Get(userID);
            }
            userDetail.Name = name;
            userDetail.MobileNo = mobileNumber;
            userDetail.Location = location;
            Context.SaveChanges();
            return userDetail;
        }
        public bool Add_FeedBack(int userID, string feedback_question, string feedback_msg)
        {
            try
            {
                var feedback = new Modal.FeedBack
                {
                    UserId = userID,
                    Feedback_Question = feedback_question,
                    Feedback_Msg = feedback_msg,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };
                Context.FeedBacks.Add(feedback);
                Context.SaveChanges();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
