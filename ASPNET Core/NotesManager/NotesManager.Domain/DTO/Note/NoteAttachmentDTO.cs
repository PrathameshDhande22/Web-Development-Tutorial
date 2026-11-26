using NotesManager.Domain.Enums;

namespace NotesManager.Domain.DTO.Note
{
    public class NoteAttachmentDTO
    {
        public int Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public long Size { get; set; }
        public string FilePath { get; set; } = string.Empty;
        public NoteAttachmentType AttachMentType { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;
    }
}
