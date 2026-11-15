using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Validations
{
    // Custom Data Annotation by inheriting the ValidationAttribute
    public class ValidNoteTitleAttribute : ValidationAttribute
    {
        public List<string> InvalidChars { get => ["@", "#", "%", "$", "*", "&", "^"]; }

        public ValidNoteTitleAttribute()
        {
            // Setting the Default Error messsage
            ErrorMessage = "Title cannot contain characters like @,#,%,$,*,etc";
        }

        // Overriding the method for validating the data
        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            if (value == null)
            {
                return ValidationResult.Success;
            }

            if (value is string title)
            {
                if (InvalidChars.Any(character => title.Contains(character)))
                {
                    return new ValidationResult(ErrorMessage);
                }
            }
            else
            {
                return new ValidationResult("Title must be a string");
            }
            return ValidationResult.Success;
        }
    }
}
