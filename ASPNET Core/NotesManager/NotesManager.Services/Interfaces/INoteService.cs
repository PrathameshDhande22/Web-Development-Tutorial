using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Models.Note;

namespace NotesManager.Services.Interfaces
{
    public interface INoteService
    {
        public Task<AddNoteDTO> NewNoteAsync(CreateNote createNote);
        public Task<List<NoteDTO>> GetNotesAsync(SearchNoteQuery? query = null);
    }
}
