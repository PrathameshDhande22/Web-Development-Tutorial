using FluentValidation;
using NotesManager.Data.Repositories;
using NotesManager.Domain.Models.Category;

namespace NotesManager.Services.Validators
{
    // Creating the async validator for checking category already exists
    public class CategoryValidator : AbstractValidator<CreateCategory>
    {
        // Define the rules for the models
        // using the dependency injection for instance creation
        public CategoryValidator(CategoryRepository categoryRepository)
        {
            // Creating the Async Validator using CustomAsync
            RuleFor(c => c.Name)
                .NotEmpty()
                .WithMessage("Name is required")
                .Length(2, 60)
                .WithMessage("Name must be 60 characters only")
                // Calling the async
                .CustomAsync(async (name, validtioncontext, cancellationToken) =>
                {
                    // calling the category service for checking the category name
                    bool exists = await categoryRepository.CategoryExists(name);
                    if (exists)
                    {
                        validtioncontext.AddFailure($"Category with these name already exists");
                    }
                });

            RuleFor(c => c.Color)
                .NotEmpty()
                .WithMessage("Color is required")
                .Length(2,40)
                .WithMessage("Color must be 40 characters long");
        }
    }
}
