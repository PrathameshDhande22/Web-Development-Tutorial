namespace NotesManager.Domain.DTO.Note
{
    public class NoteHistoryDTO
    {
        public int Id { get; set; }
        public string ActionName { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public int RowNumber { get; set; }
        public string Version { get => $"v{RowNumber}"; }
    }
}
