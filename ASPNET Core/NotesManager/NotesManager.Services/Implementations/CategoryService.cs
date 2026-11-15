using Microsoft.Extensions.Logging;
using NotesManager.Data.Repositories;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.Exceptions;
using NotesManager.Domain.Models.Category;
using NotesManager.Services.Interfaces;

namespace NotesManager.Services.Implementations
{
    public class CategoryService : ICategoryService
    {
        private CategoryRepository _categoryRepository;
        private ILogger<CategoryService> _logger;

        public CategoryService(
            CategoryRepository categoryRepository,
            ILogger<CategoryService> logger
        )
        {
            this._categoryRepository = categoryRepository;
            this._logger = logger;
        }

        public async Task<CategoryDTO> CreateAsync(CreateCategory category)
        {
            if (await _categoryRepository.CategoryExists(category.Name))
            {
                throw new AlreadyExistsException($"Category with Name {category.Name} already exists");
            }

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
