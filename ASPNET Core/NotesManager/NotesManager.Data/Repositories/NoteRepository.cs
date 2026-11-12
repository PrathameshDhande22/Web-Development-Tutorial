using NotesManager.Data.Models;
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

        public async Task<NoteDTO> Add(CreateNote note)
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
            return new NoteDTO()
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
