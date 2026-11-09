using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Configuration;
using NotesManager.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Data.Models
{
    [EntityTypeConfiguration(typeof(NoteConfiguration))]
    public class Note
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        public string? Description { get; set; } = string.Empty;
        public NoteStatus Status { get; set; }
        public int CategoryId { get; set; }

        public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;
        public DateTimeOffset? UpdatedAt { get; set; }

        // Navigational Properties
        public Category? Category { get; set; }
        public ICollection<NoteHistory> History { get; set; }=new List<NoteHistory>();

    }
}
