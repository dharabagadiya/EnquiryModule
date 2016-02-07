using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataModel
{
    public class ProfileSettingManager
    {
        private DataContext Context = new DataContext();
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

        public bool AddFile(int userID, string path, string name)
        {
            try
            {
                var uploadDocument = new Modal.UploadDocument
                {
                    UserId = userID,
                    path = path,
                    name = name,
                    CreateDate = DateTime.Now,
                    UpdateDate = DateTime.Now
                };
                Context.UploadDocuments.Add(uploadDocument);
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
