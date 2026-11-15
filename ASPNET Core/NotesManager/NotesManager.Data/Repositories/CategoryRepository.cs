using Microsoft.EntityFrameworkCore;
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
        /// <returns>List of Category with Id,Name and color only.</returns>
        public async Task<List<CategoryDTO>> GetAll()
        {
            return await dbContext.Category.AsNoTracking().Select(c => new CategoryDTO() { Id = c.Id, Name = c.Name, Color = c.Color }).ToListAsync();
        }

        public async Task<List<CategoryNotesDTO>> GetCategoriesAsync()
        {
            var categories = from category in dbContext.Category
                             join notes in dbContext.Notes
                             on category.Id equals notes.Id
                             group category by new
                             {
                                 category.Id,
                                 category.Color,
                                 category.Name,
                                 category.CreatedAt
                             }
                             into grouped
                             select new CategoryNotesDTO()
                             {
                                 Id = grouped.Key.Id,
                                 Color = grouped.Key.Color,
                                 Name = grouped.Key.Name,
                                 CreatedAt = grouped.Key.CreatedAt,
                                 NotesCount = grouped.Count()
                             };
            return await categories.ToListAsync();
        }
    }
}
