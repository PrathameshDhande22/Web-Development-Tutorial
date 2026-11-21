using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Auth
{
    public class ResetPasswordViewModel
    {
        [Required(ErrorMessage = "Password is required.")]
        [DataType(DataType.Password)]
        [Length(8,40, ErrorMessage = "Password must be between 8 to 40 characters.")]
        [RegularExpression(@"^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).+$",
            ErrorMessage = "Password must contain an uppercase letter, a lowercase letter, a number and a symbol.")]
        public string Password { get; set; } = string.Empty;

        [Required(ErrorMessage = "Confirm Password is required.")]
        [DataType(DataType.Password)]
        [Compare(nameof(Password), ErrorMessage = "Confirm password must be same as password.")]
        public string ConfirmPassword { get; set; } = string.Empty;
    }
}
