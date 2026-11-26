using NotesManager.Domain.Enums;

namespace NotesManager.Domain.DTO.Note
{
    public class NoteAttachmentDTO
    {
        public int Id { get; set; }
        public string FileName { get; set; } = string.Empty;
        public DateTimeOffset CreatedAt { get; set; }
        public long Size { get; set; }
        public string FilePath { get; set; } = string.Empty;
        public NoteAttachmentType AttachMentType { get; set; }
        public string ErrorMessage { get; set; } = string.Empty;

        // Used by the view and the js to decide whether to open the file in a new tab or in the modal
        public bool IsPdf => AttachMentType == NoteAttachmentType.PDF;
    }
}
