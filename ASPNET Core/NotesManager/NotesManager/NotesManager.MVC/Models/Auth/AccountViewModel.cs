namespace NotesManager.MVC.Models.Auth
{
    public class AccountViewModel
    {
        public String Email { get; set; } = string.Empty;
        public string Name { get; set; } = string.Empty;
        public DateOnly MemberSince { get; set; }
    }
}
