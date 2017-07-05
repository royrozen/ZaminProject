using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Zamin.Models;
using Amazon.SimpleEmail;
using Amazon.SimpleEmail.Model;
using Content = Amazon.SimpleEmail.Model.Content;
        using System.Net;
using System.Net.Mail;

namespace Zamin.Helper
{
    public static class EmailHelper
    {
        public static bool SendContactUsEmail(string emailTo, string body, string subject)
        {



            //string smtpAddress = "smtp.gmail.com";
            //int portNumber = 587;
            //bool enableSSL = true;

            //string emailFrom = "zaminproject@gmail.com";
            //string password = "47212126";

            //string emailTo = emailAddress;
            //string subject = subject;
            //string body = "שלום" + appUser.FirstName + " " + appUser.LastName + " וברוך הבא לאתר! <br /> השרמתך הצליחה! <br />למעבר לאתר <a href='Zamin.muze.co.il'>לחץ כאן</a>";

            //string emailTo = appUser.Email;
            //string subject = "הרשמתך לאתר זמין הצליחה!";
            //string body = "שלום" + appUser.FirstName + " " + appUser.LastName + " וברוך הבא לאתר! <br /> השרמתך הצליחה! <br />למעבר לאתר <a href='Zamin.muze.co.il'>לחץ כאן</a>";

            using (MailMessage mail = new MailMessage())
            {
                mail.From = new MailAddress(Consts.AwsConsts.EmailFrom);
                mail.To.Add(emailTo);
                mail.Subject = subject;
                mail.Body = body;
                mail.IsBodyHtml = true;
                // Can set to false, if you are sending pure text.

                //"G:\\Projects\\Zamin\\Zamin.Server\\Website\\zamin\\app\\Images\\logo.png"
                mail.Attachments.Add(new Attachment(Consts.AwsConsts.LogoFile));
                //  mail.Attachments.Add(new Attachment("C:\\SomeZip.zip"));

                using (SmtpClient smtp = new SmtpClient(Consts.AwsConsts.SmtpAddress, Int32.Parse(Consts.AwsConsts.PortNumber)))
                {
                    smtp.Credentials = new NetworkCredential(Consts.AwsConsts.EmailFrom, Consts.AwsConsts.Password);
                    smtp.EnableSsl = true;
                    smtp.Send(mail);
                }
            }



            return true;
        }





    }
}
