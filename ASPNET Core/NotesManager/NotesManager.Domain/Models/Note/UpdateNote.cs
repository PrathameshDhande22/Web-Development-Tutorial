using Microsoft.AspNetCore.Mvc.ModelBinding;
using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Note
{
    public class UpdateNote : CreateNote
    {
        [BindRequired] // Binding these is required
        [Required]
        public int Id { get; set; }

        [BindNever] // These will not bind
        public DateTimeOffset CreatedAt { get; set; }
    }
}
