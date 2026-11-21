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

        public Task<bool> CategoryExists(string name)
        {
            return _categoryRepository.CategoryExists(name);
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
    }
}
