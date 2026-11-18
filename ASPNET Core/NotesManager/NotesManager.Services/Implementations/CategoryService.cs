using FluentValidation;
using Microsoft.Extensions.Logging;
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

        public CategoryService(
            CategoryRepository categoryRepository,
            ILogger<CategoryService> logger,
            IValidator<CreateCategory> validator
        )
        {
            this._categoryRepository = categoryRepository;
            this._logger = logger;
            this.validator = validator;
        }

        public async Task<bool> CategoryExists(string name)
        {
            return await _categoryRepository.CategoryExists(name);
        }

        public async Task<CategoryDTO> CreateAsync(CreateCategory category)
        {
            // Now instead of calling these categoryexits use the async validator by fluentvalidation
            await validator.ValidateAndThrowAsync(category);

            return await _categoryRepository.AddAsync(category.Name, category.Color);
        }

        /// <inheritdoc/>
        public Task<List<CategoryDTO>> GetCategoriesAsync()
        {
            try
            {
                return _categoryRepository.GetAll();
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
    }
}
