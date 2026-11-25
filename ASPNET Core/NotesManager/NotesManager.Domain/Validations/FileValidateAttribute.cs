using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Validations
{
    // Custom Validation Attribute for validating the file size
    public class FileValidateAttribute : ValidationAttribute
    {
        public int MaxFileSize { get; set; }
        public string[] SupportedExtensions { get; set; } = [];

        private bool IsUnderFileSize(long filesize)
        {
            long providedfilesize = MaxFileSize * 1000;
            return filesize <= providedfilesize;
        }

        private bool ValidExtension(string extension)
        {
            return SupportedExtensions.Contains(extension);
        }

        protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
        {
            // Already handled by the other attribute
            if (value == null)
            {
                return ValidationResult.Success;
            }

            // Check the type
            if (value is List<IFormFile> files)
            {
                // Loop each file to check the extension
                foreach (IFormFile file in files)
                {
                    // Check the Extension
                    if (!IsUnderFileSize(file.Length))
                    {
                        return new ValidationResult($"File size must be below {MaxFileSize} KB");
                    }
                    else if (!ValidExtension(file.ContentType))
                    {
                        return new ValidationResult($"File with Content-Type {file.ContentType} is not supported");
                    }
                }
            }
            else
            {
                return new ValidationResult("It must only contains files");
            }
            return ValidationResult.Success;
        }
    }
}
