namespace CoreProject.Service
{
    // These is the concrete class
    public class EmailService : IEmailService
    {
        public void SendEmail(string email)
        {
            Console.WriteLine("Sending email to " + email);
        }
    }
}
