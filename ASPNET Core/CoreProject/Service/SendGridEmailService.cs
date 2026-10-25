namespace CoreProject.Service
{
    public class SendGridEmailService : IEmailService
    {
        public void SendEmail(string email)
        {
            Console.WriteLine("Sending email using SendGrid");
        }
    }
}
