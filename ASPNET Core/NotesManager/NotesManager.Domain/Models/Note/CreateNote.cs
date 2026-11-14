using NotesManager.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Note
{
    // View model for creating the note
    public class CreateNote
    {
        [Required(AllowEmptyStrings = false, ErrorMessage = "Title is required")]
        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; }

        [Required(ErrorMessage = "Status is required")]
        public NoteStatus Status { get; set; } = NoteStatus.Draft;

        [Required(ErrorMessage = "Please select appropriate category for your note")]
        [Range(1, 9999, ErrorMessage = "Select the appropriate category")]
        public int CategoryId { get; set; }
    }
}
