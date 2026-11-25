using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Models;
using NotesManager.Domain.Models.Note;

namespace NotesManager.Services.Interfaces
{
    public interface INoteService
    {
        public Task<AddNoteDTO> NewNoteAsync(CreateNote createNote);
        public Task<PaginatedResponse<NoteDTO>> GetNotesAsync(SearchNoteQuery query);
        public Task<NoteDTO?> GetNoteById(int Id);
        public Task<NoteStatusCountsDTO> GetNotesCountsByStatusAsync();
        public Task<ServiceResult<bool>> TogglePinAsync(int noteId);
        public Task<NoteDTO?> UpdateAsync(UpdateNote updateNote);
        public Task<List<NoteDTO>> GetPinNotesAsync();
        public Task<bool> DeleteNoteAsync(int id);
        public Task<List<NoteHistoryDTO>?> GetHistoryForNoteAsync(int noteid);
        public Task<NoteDetailedHistoryDTO?> GetHistoryById(int id);
    }
}
