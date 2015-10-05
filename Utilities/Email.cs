
using System.Net;
using System.Net.Mail;

namespace Utilities
{
    public class Email
    {
        public static void SendMail(string toEmailID, string content)
        {
            using (var mail = new MailMessage())
            {
                mail.From = new MailAddress("mehul.chandroliya@gmail.com");
                mail.To.Add(toEmailID);
                mail.Subject = "Test mail";
                mail.Body = content;
                mail.IsBodyHtml = true;
                using (SmtpClient smtp = new SmtpClient("smtp.gmail.com", 587))
                {
                    smtp.Credentials = new NetworkCredential("mehul.chandroliya@gmail.com", "dhara@9979959417");
                    smtp.UseDefaultCredentials = false;
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtp.EnableSsl = true;
                    smtp.Send(mail);
                }
            }
        }
    }
}
