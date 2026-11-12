using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Models.Note;

namespace NotesManager.Services.Interfaces
{
    public interface INoteService
    {
        public Task<NoteDTO> NewNoteAsync(CreateNote createNote);
    }
}
