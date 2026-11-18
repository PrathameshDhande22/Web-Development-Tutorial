using FluentValidation;
using NotesManager.Domain.Models.Auth;

namespace NotesManager.Services.Validators
{
    // Creating the Validator using the AbstractValidator Base class with providing the model
    public class RegisterValidator : AbstractValidator<RegisterUser>
    {
        // Defines the rules in the Constructor
        public RegisterValidator()
        {
            // Create the Validator rule for each property
            RuleFor(r => r.FullName)
                .NotEmpty()
                .WithMessage("Full Name is required")
                .Length(5, 50)
                .WithMessage("Full name must be between 5 to 50 characters only");

            // Define the rule for other model properties as well
            RuleFor(r => r.Email)
                .NotEmpty()
                .WithMessage("Email is required")
                .EmailAddress()
                .WithMessage("Valid email address is required");

            // Password Rule
            RuleFor(r => r.Password)
                .NotEmpty()
                .WithMessage("Password is required")
                .Length(5, 40)
                .WithMessage("Password must be 5 characters long");

            RuleFor(r => r.ConfirmPassword)
                .NotEmpty()
                .WithMessage("Confirm Password is required")
                .Equal(r => r.Password)
                .WithMessage("Confirm password must be same as password");
        }
    }
}
