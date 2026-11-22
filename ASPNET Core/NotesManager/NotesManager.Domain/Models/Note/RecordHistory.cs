using NotesManager.Domain.Enums;

namespace NotesManager.Domain.Models.Note
{
    public class RecordHistory
    {
        public int NoteId { get; set; }
        public string Action { get; set; } = string.Empty;
        public string? OldTitle { get; set; }
        public string? NewTitle { get; set; }
        public NoteStatus? OldStatus { get; set; }
        public NoteStatus? NewStatus { get; set; }
        public string? OldDescription { get; set; }
        public string? NewDescripton { get; set; }
        public int? OldCategoryId { get; set; }
        public int? NewCategoryId { get; set; }
    }
}
