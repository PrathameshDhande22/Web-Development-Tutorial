using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.Models.Category;

namespace NotesManager.Services.Interfaces
{
    public interface ICategoryService
    {
        /// <summary>
        /// Get All the Categories
        /// </summary>
        /// <returns>List of Category</returns>
        public Task<List<CategoryDTO>> GetCategoriesAsync();

        public Task<List<CategoryNotesDTO>> GetCategoriesNotesAsync();
        public Task<CategoryDTO> CreateAsync(CreateCategory category);

        public Task<bool> CategoryExists(string name,int? IdToIgnore);
        public Task<ServiceResult<bool>> DeleteCategoryAsync(int categoryid);
        public Task<ServiceResult<bool>> UpdateCategoryAsync(UpdateCategory category);
    }
}
