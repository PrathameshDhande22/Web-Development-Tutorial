using NotesManager.Domain.Models.Note;

namespace NotesManager.Domain.DTO.Note
{
    public class NoteDTO : CreateNote
    {
        public int Id { get; set; }
    }
}
