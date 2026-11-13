using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Models;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Enums;
using NotesManager.Domain.Models.Note;

namespace NotesManager.Data.Repositories
{
    public class NoteRepository
    {
        private NoteDbContext dbContext;

        public NoteRepository(NoteDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        /// <summary>
        /// Gets the notes
        /// </summary>
        /// <param name="CategoryId">CategoryId of the Note to Search for</param>
        /// <param name="status">Status of the Note to Search for</param>
        /// <param name="Search">Title and Content to Search</param>
        /// <returns>List of Notes with Category</returns>
        public async Task<List<NoteDTO>> GetAsync(int? CategoryId = null, NoteStatus? status = null, string? Search = null)
        {
            var notes = dbContext.Notes
                         .AsNoTracking()
                         .Include(n => n.Category)
                         .OrderByDescending(n => n.CreatedAt)
                         .AsQueryable();

            // Check the Categoryid
            if (CategoryId.HasValue && CategoryId != 0)
            {
                notes = notes.Where(n => n.CategoryId == CategoryId);
            }

            // Check the status
            if (status.HasValue)
            {
                notes = notes.Where(n => n.Status == status);
            }

            // Check the Title and content
            if (!string.IsNullOrWhiteSpace(Search))
            {
                notes = notes.Where(n => n.Title.Contains(Search) || (n.Description != null && n.Description.Contains(Search)));
            }

            // Map to DTO
            var notedto = notes.Select(note => new NoteDTO()
            {
                Id = note.Id,
                CategoryId = note.CategoryId,
                CreatedAt = note.CreatedAt,
                Description = note.Description,
                Status = note.Status,
                Title = note.Title,
                Category = new CategoryDTO()
                {
                    Id = note.Category!.Id,
                    Color = note.Category.Color,
                    Name = note.Category.Name
                }
            });

            return await notedto.ToListAsync();
        }

        public async Task<AddNoteDTO> Add(CreateNote note)
        {
            Note newnote = new()
            {
                CategoryId = note.CategoryId,
                Title = note.Title,
                Status = note.Status,
                Description = note.Description,
                CreatedAt = DateTime.UtcNow,
            };
            await dbContext.Notes.AddAsync(newnote);
            await dbContext.SaveChangesAsync();
            return new AddNoteDTO()
            {
                Id = newnote.Id,
                CategoryId = note.CategoryId,
                Description = note.Description,
                Status = note.Status,
                Title = note.Title
            };
        }
    }
}
