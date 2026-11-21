namespace NotesManager.Domain.DTO.Note
{
    public class NoteStatusCountsDTO
    {
        public required int TotalCount { get; init; }
        public required int DraftCount { get; init; }
        public required int InProgressCount { get; init; }
        public required int CompletedCount { get; init; }
    }
}
