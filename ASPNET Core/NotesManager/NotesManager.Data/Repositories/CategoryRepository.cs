using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Models;
using NotesManager.Domain.DTO.Category;

namespace NotesManager.Data.Repositories
{
    // Repository Pattern
    public class CategoryRepository
    {
        private NoteDbContext dbContext;

        // Injecting the DbContext in the Repository
        public CategoryRepository(NoteDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        /// <summary>
        /// Get all the Categories
        /// </summary>
        /// <returns>List of <see cref="Category"/>.</returns>
        public Task<List<Category>> GetAll()
        {
            return dbContext.Category.AsNoTracking().ToListAsync();
        }

        /// <summary>
        /// Checks whether the category exists or not by name. It will check the name with the contains method.
        /// </summary>
        /// <param name="Name">Name of the category to check</param>
        /// <returns><see cref="true"/> if the category exists otherwise false</returns>
        public Task<bool> CategoryExists(string Name)
        {
            return dbContext.Category.Where(c => c.Name.Contains(Name)).AnyAsync();
        }

        /// <summary>
        /// Get all the categories with the count of notes in each category. It will return a list of <see cref="CategoryNotesDTO"/> which contains Id, Name, Color, CreatedAt and NotesCount.
        /// </summary>
        /// <returns>Returns a list of <see cref="CategoryNotesDTO"/></returns>
        public Task<List<CategoryNotesDTO>> GetCategoriesAsync()
        {
            var categories = dbContext.Category
                             .AsNoTracking()
                             .Select(c => new CategoryNotesDTO()
                             {
                                 Id = c.Id,
                                 Color = c.Color,
                                 CreatedAt = c.CreatedAt,
                                 Name = c.Name,
                                 NotesCount = c.Notes.Count
                             });
            return categories.ToListAsync();
        }

        /// <summary>
        /// Adds the new Category with the given name and color. It will return the newly created category with Id, Name and Color only.
        /// </summary>
        /// <param name="Name">Name of the category</param>
        /// <param name="Color">Color of the category</param>
        /// <returns>Returns the newly created category</returns>
        public async Task<Category> AddAsync(string Name, string Color)
        {
            Category newCategory = new()
            {
                Color = Color,
                Name = Name,
                CreatedAt = DateTimeOffset.UtcNow
            };

            await dbContext.Category.AddAsync(newCategory);
            return newCategory;
        }
    }
}
