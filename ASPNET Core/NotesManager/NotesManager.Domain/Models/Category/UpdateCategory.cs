using System.ComponentModel.DataAnnotations;

namespace NotesManager.Domain.Models.Category
{
    public class UpdateCategory : CreateCategory
    {
        [Required(ErrorMessage = "Category Id is missing")]
        public int Id { get; set; }
    }
}
