using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;

namespace NotesManager.Domain.Models.Category
{
    public class CreateCategory
    {
        [Required(ErrorMessage = "Category Name is required")]
        [StringLength(60, ErrorMessage = "Name must be 60 characters only")]
        [Remote("IsCategoryAvailable", "Admin")] // Adding the Remote validation
        [Display(Name = "Name")] // Setting the Display Name
        public string Name { get; set; } = string.Empty;

        [Required(ErrorMessage = "Category color selection is required")]
        [StringLength(40, ErrorMessage = "Color must be 40 characters only")]
        [DisplayName("Colour")] // Setting the Display Name
        public string Color { get; set; } = string.Empty;
    }
}
