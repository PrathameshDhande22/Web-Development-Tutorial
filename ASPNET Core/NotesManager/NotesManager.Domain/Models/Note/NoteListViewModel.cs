using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.DTO.Note;

namespace NotesManager.Domain.Models.Note
{
    public class NoteListViewModel
    {
        public List<NoteDTO> Notes { get; set; } = [];
        public int TotalNotes { get; set; }
        public List<CategoryDTO> Category { get; set; } = [];
    }
}
