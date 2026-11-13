using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Models;
using NotesManager.Domain.Models.Note;

namespace NotesManager.Services.Interfaces
{
    public interface INoteService
    {
        public Task<AddNoteDTO> NewNoteAsync(CreateNote createNote);
        public Task<PaginatedResponse<NoteDTO>> GetNotesAsync(SearchNoteQuery query);
    }
}
