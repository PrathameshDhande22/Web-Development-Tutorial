using NotesManager.Domain.Enums;

namespace NotesManager.Domain.DTO.Note
{
    public class NoteDetailedHistoryDTO : NoteHistoryDTO
    {
        public string? OldTitle { get; set; }
        public string? NewTitle { get; set; }
        public NoteStatus? OldStatus { get; set; }
        public NoteStatus? NewStatus { get; set; }
        public string? OldDescription { get; set; }
        public string? NewDescripton { get; set; }
        public int? OldCategoryId { get; set; }
        public int? NewCategoryId { get; set; }
        public string? OldCategoryName { get; set; }
        public string? NewCategoryName { get; set; }
    }
}
