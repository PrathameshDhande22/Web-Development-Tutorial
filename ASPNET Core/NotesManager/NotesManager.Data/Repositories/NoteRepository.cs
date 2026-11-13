using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Models;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.DTO.Note;
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

        public async Task<List<NoteDTO>> GetAsync()
        {
            List<NoteDTO> notes = await dbContext.Notes.AsNoTracking()
                         .Include(n => n.Category)
                         .OrderByDescending(n=>n.CreatedAt)
                         .Select(note => new NoteDTO()
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
                         }).ToListAsync();
            return notes;

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
