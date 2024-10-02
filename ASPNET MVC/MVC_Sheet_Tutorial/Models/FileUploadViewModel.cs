using System.ComponentModel.DataAnnotations;
using System.Web;

namespace MVC_Sheet_Tutorial.Models
{
    public class FileUploadViewModel
    {
        [Required(ErrorMessage = "Full Name is Required")]
        [Display(Name = "Full Name")]
        public string FullName { get; set; }

        public HttpPostedFileBase Image { get; set; }

        public string TempFile { get; set; }
    }
}