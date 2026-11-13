using NotesManager.Domain.DTO.Category;

namespace NotesManager.Domain.DTO.Note
{
    public class NoteDTO:AddNoteDTO
    {
        public DateTimeOffset CreatedAt { get; set; }
        public CategoryDTO Category { get; set; }
    }
}
