using System;
using System.Net;
using System.Net.Mail;

namespace Utilities
{
    public class Email
    {
        public static void SendMail(string toEmailID, string content, string subject)
        {
            using (var mail = new MailMessage())
            {
                try
                {
                    mail.From = new MailAddress("support@renewin.com");
                    mail.To.Add(toEmailID);
                    mail.Subject = subject;
                    mail.Body = content;
                    mail.IsBodyHtml = true;
                    using (SmtpClient smtp = new SmtpClient("smtp.office365.com", 587))
                    {
                        smtp.Credentials = new NetworkCredential("support@renewin.com", "India@2015");
                        smtp.DeliveryMethod = SmtpDeliveryMethod.Network;
                        smtp.EnableSsl = true;
                        smtp.Send(mail);
                    }
                }
                catch (Exception ex)
                {
                }
            }
        }
    }
}
