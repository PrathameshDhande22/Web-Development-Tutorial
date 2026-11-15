namespace NotesManager.Domain.DTO.Category
{
    public class CategoryNotesDTO:CategoryDTO
    {
        public DateTimeOffset CreatedAt { get; set; }
        public int NotesCount { get; set; }
    }
}
