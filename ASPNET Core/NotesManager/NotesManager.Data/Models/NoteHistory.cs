using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Configuration;
using NotesManager.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Data.Models
{
    [EntityTypeConfiguration(typeof(NoteHistoryConfiguration))]
    public class NoteHistory
    {
        [Key]
        public int Id { get; set; }
        public int NoteId { get; set; }

        [MaxLength(60)]
        public string Action { get; set; } = string.Empty;

        [MaxLength(100)]
        public string? OldTitle { get; set; }

        [MaxLength(100)]
        public string? NewTitle { get; set; }

        public NoteStatus? OldStatus { get; set; }
        public NoteStatus? NewStatus { get; set; }

        public string? OldDescription { get; set; }
        public string? NewDescripton { get; set; }

        public int? OldCategoryId { get; set; }
        public int? NewCategoryId { get; set; }

        public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;

        // Navigational Properties
        public Note? Note { get; set; }
        public Category? OldCategory { get; set; }
        public Category? NewCategory { get; set; }
    }
}
