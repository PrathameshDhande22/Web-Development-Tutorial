using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Category
{
    public class CreateCategory
    {
        [Required(ErrorMessage = "Category Name is required")]
        [StringLength(60, ErrorMessage = "Name must be 60 characters only")]
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Category color selection is required")]
        [StringLength(40, ErrorMessage = "Color must be 40 characters only")]
        public string Color { get; set; } = string.Empty;
    }
}
