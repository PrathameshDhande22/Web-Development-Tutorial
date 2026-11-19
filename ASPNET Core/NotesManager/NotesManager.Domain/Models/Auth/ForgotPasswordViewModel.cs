using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Auth
{
    public class ForgotPasswordViewModel
    {
        [Required(ErrorMessage = "Email is required")]
        [EmailAddress(ErrorMessage = "Enter valid Email")]
        public string Email { get; set; } = string.Empty;

        [BindNever] // Specifying the model from binding
        public bool ResetLinkSent { get; set; }
    }
}
