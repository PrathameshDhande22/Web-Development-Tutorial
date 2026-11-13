using NotesManager.Domain.Models.Note;

namespace NotesManager.Domain.DTO.Note
{
    public class AddNoteDTO : CreateNote
    {
        public int Id { get; set; }
    }
}
