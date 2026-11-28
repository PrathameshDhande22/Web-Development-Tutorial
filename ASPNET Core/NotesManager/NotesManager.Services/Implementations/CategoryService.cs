using FluentValidation;
using Microsoft.Extensions.Logging;
using NotesManager.Data.Interfaces;
using NotesManager.Data.Models;
using NotesManager.Data.Repositories;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.Models.Category;
using NotesManager.Services.Interfaces;

namespace NotesManager.Services.Implementations
{
    public class CategoryService : ICategoryService
    {
        private CategoryRepository _categoryRepository;
        private ILogger<CategoryService> _logger;
        private IValidator<CreateCategory> validator;
        private readonly IUnitOfWork UnitOfWork;

        public CategoryService(
            CategoryRepository categoryRepository,
            ILogger<CategoryService> logger,
            IValidator<CreateCategory> validator,
            IUnitOfWork unitOfWork
        )
        {
            this._categoryRepository = categoryRepository;
            this._logger = logger;
            this.validator = validator;
            this.UnitOfWork = unitOfWork;
        }

        public Task<bool> CategoryExists(string name, int? IdToIgnore = null)
        {
            return _categoryRepository.CategoryExists(name, IdToIgnore);
        }

        public async Task<CategoryDTO> CreateAsync(CreateCategory category)
        {
            // Now instead of calling these categoryexits use the async validator by fluentvalidation
            await validator.ValidateAndThrowAsync(category);

            Category categorycreated = await _categoryRepository.AddAsync(category.Name, category.Color);

            // using unit of work pattern for saving the data in one save
            await UnitOfWork.SaveChangesAsync();

            return new CategoryDTO()
            {
                Id = categorycreated.Id,
                Color = categorycreated.Color,
                Name = categorycreated.Name
            };

        }

        /// <inheritdoc/>
        public async Task<List<CategoryDTO>> GetCategoriesAsync()
        {
            try
            {
                List<Category> categories = await _categoryRepository.GetAll();

                return categories.Select(c => new CategoryDTO()
                {
                    Id = c.Id,
                    Color = c.Color,
                    Name = c.Name
                }).ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occured when getting the categories");
                throw;
            }
        }

        public async Task<List<CategoryNotesDTO>> GetCategoriesNotesAsync()
        {
            try
            {
                return await _categoryRepository.GetCategoriesAsync();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occured when gettign the categories with notes");
                throw;
            }
        }

        public async Task<ServiceResult<bool>> DeleteCategoryAsync(int categoryid)
        {
            // first check if there are any notes with that category
            bool notes_exists = await _categoryRepository.NotesExistsForCategory(categoryid);
            if (notes_exists)
            {
                _logger.LogInformation("Notes Exists for Category Id ={categoryId}, These category can't be deleted", categoryid);
                return ServiceResult<bool>.Fail("Notes exists for these category, can't delete");
            }

            _logger.LogInformation("Deleting the Category with Id={Id}", categoryid);

            int updated_rows = await _categoryRepository.DeleteAsync(categoryid);
            _logger.LogInformation("Affected Rows Count {Count}, while deleting the category with id={Id}", updated_rows, categoryid);
            if (updated_rows == 1)
            {
                return ServiceResult<bool>.Ok(true, "Category deleted successfully");
            }
            return ServiceResult<bool>.Error("Failed to delete category");
        }

        public async Task<ServiceResult<bool>> UpdateCategoryAsync(UpdateCategory category)
        {
            // Check if the Category Exists
            _logger.LogInformation("Fetching the Details regarding the Category Id={Id}", category.Id);
            Category? categoryFetched = await _categoryRepository.GetAsync(category.Id);
            if (categoryFetched == null)
            {
                _logger.LogInformation("No Category found with these Id={Id}. Hence unable to update", category.Id);
                return ServiceResult<bool>.Fail("No Category found with these id");
            }

            // Check if the provided name already exists on the Category
            bool nameAlreadyExists = await _categoryRepository.CategoryExists(category.Name, category.Id);
            if (nameAlreadyExists)
            {
                _logger.LogInformation("Category for id={Id} Updating, provided Name={name} already exists", category.Id, category.Name);
                return ServiceResult<bool>.Fail("Category with these name already exists");
            }

            _logger.LogInformation("Updating the Category for Id={id}", category.Id);
            int updateRowcount = await _categoryRepository.UpdateAsync(category.Id, category.Name, category.Color);
            if (updateRowcount == 1)
            {
                _logger.LogInformation("Updated the Category Name and Color for Id={Id}", category.Id);
                return ServiceResult<bool>.Ok(true, "Category updated Successfully");
            }

            _logger.LogWarning("While updating the Category the expected Row count should be 1 but recieved {Count} for CategoryId={Id}", updateRowcount, category.Id);
            return ServiceResult<bool>.Error("Error occured when updating the category");
        }
    }
}
