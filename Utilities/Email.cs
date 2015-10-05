
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
                mail.From = new MailAddress("mkaccountant@outlook.com");
                mail.To.Add(toEmailID);
                mail.Subject = "Test mail";
                mail.Body = content;
                mail.IsBodyHtml = true;
                using (SmtpClient smtp = new SmtpClient("smtp.live.com", 587))
                {
                    smtp.Credentials = new NetworkCredential("mkaccountant@outlook.com", "mM@9410827811");
                    smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                    smtp.EnableSsl = true;
                    smtp.Send(mail);
                }
            }
        }
    }
}
