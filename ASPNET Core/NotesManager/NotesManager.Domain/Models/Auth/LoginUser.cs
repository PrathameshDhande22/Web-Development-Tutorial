using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Auth
{
    public class LoginUser
    {
        [EmailAddress]
        [Required]
        public string Email { get; set; } = string.Empty;

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; } = string.Empty;
    }
}
