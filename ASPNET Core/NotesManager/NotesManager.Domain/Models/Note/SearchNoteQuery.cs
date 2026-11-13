using NotesManager.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Note
{
    public class SearchNoteQuery
    {
        /// <summary>
        /// Search title or content from the notes
        /// </summary>
        [MaxLength(100)]
        public string? Search { get; set; }

        /// <summary>
        /// Status to search the Notes
        /// </summary>
        public NoteStatus? Status { get; set; }

        /// <summary>
        /// CategoryId to search for the notes
        /// </summary>
        public int? CategoryId { get; set; }

        public int Page { get; set; } = 1;
    }
}
