using NotesManager.Domain.DTO.Category;

namespace NotesManager.Services.Interfaces
{
    public interface ICategoryService
    {
        /// <summary>
        /// Get All the Categories
        /// </summary>
        /// <returns>List of Category</returns>
        public Task<List<CategoryDTO>> GetCategoriesAsync();
    }
}
