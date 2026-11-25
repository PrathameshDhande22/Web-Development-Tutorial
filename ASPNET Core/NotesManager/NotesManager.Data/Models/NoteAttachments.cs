using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Configuration;
using NotesManager.Domain.Enums;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Data.Models
{
    [EntityTypeConfiguration(typeof(NoteAttachmentConfiguration))]
    public class NoteAttachments
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [Required]
        public long Length { get; set; }

        [Required]
        public NoteAttachmentType Extension { get; set; }

        // Foreign Key for the Note Id
        [Required]
        public int Noteid { get; set; }

        public DateTimeOffset CreatedAt { get; } = DateTimeOffset.UtcNow;

        [Required]
        public string FilePath { get; set; } = string.Empty;
    }
}
