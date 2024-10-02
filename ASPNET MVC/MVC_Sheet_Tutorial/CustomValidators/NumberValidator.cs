using System;
using System.ComponentModel.DataAnnotations;

namespace MVC_Sheet_Tutorial.CustomValidators
{

    // creation of custom attribute for the validation purpose
    public class NumberValidator : ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            double result = Convert.ToDouble(value);
            if (result == 0)
            {
                return new ValidationResult("These cannot have the 0 as the Salary");
            }
            return ValidationResult.Success;
        }
    }
}