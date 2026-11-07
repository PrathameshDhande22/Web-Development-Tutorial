using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Configuration;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Data.Models
{

    public class Category
    {
        [Key]
        public int Id { get; set; }

        [MaxLength(60)]
        public string Name { get; set; } = string.Empty;

        [MaxLength(40)]
        public string Color { get; set; } = string.Empty;

        public DateTimeOffset CreatedAt { get; set; } = DateTimeOffset.UtcNow;

        // Creating these column as nullable
        public DateTimeOffset? UpdatedAt { get; set; }

        // Navigational Properties
        public ICollection<Note> Notes { get; set; } = new List<Note>();
    }
}
