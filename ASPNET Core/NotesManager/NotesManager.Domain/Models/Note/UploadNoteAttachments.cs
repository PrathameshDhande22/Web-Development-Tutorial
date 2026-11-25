using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using NotesManager.Domain.Validations;

namespace NotesManager.Domain.Models.Note
{
    public class UploadNoteAttachments
    {
        [Required(ErrorMessage = "Files are required")]
        [FileValidate(MaxFileSize = 5120, SupportedExtensions = ["image/png", "image/jpg", "application/pdf","image/jpeg"])]
        public List<IFormFile> Files { get; set; } = null!;
    }
}
