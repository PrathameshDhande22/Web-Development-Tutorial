using Microsoft.Extensions.Logging;
using NotesManager.Data.Repositories;
using NotesManager.Domain.DTO.Category;
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
    }
}
