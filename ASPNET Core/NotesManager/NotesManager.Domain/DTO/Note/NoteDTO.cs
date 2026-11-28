using NotesManager.Domain.DTO.Category;

namespace NotesManager.Domain.DTO.Note
{
    public class NoteDTO : AddNoteDTO
    {
        public DateTimeOffset CreatedAt { get; set; }
        public DateTimeOffset? UpdatedAt { get; set; } = null;
        public CategoryDTO Category { get; set; } = null!;
        public List<NoteAttachmentDTO> Attachments { get; set; } = null!;
        public NoteHistoryDTO? CurrentHistory { get; set; } = null;
        public bool Pinned { get; set; }
    }
}
