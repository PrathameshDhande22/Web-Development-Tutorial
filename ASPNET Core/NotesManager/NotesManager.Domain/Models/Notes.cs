using NotesManager.Domain.Enums;

namespace NotesManager.Domain.Models
{
    public class Notes
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int CategoryId { get; set; }
        public string Status { get; set; } = Enum.GetName<NoteStatus>(NoteStatus.Draft)!;
        public bool IsPinned { get; set; } = false;
        public IEnumerable<int> FilterCategoryId { get; set; } = new List<int>();
        public DateTime Createdat { get; set; } = DateTime.Now;
    }
}
