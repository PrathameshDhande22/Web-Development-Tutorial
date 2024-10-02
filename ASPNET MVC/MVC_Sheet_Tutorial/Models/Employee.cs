using System.ComponentModel.DataAnnotations;
using MVC_Sheet_Tutorial.CustomValidators;

namespace MVC_Sheet_Tutorial.Models
{
    public partial class Employee
    {

        public int Id { get; set; }
        [Required(ErrorMessage = "Enter Your Name")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Enter Your Department")]
        public string Department { get; set; }

        public string Address { get; set; }

        [Required(ErrorMessage = "Enter your Salary")]
        [NumberValidator]  // using the custom validation
        public double Salary { get; set; }
    }
}
