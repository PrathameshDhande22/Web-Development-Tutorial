using System.ComponentModel.DataAnnotations;

namespace MVCBusinessModels
{

    // Include only those property for which you want to update
    public interface IEmployee
    {
        [Required]
        string Department { get; set; }
        [Required]
        string Address { get; set; }
        [Required]
        double Salary { get; set; }
    }

    //[MetadataType(typeof(EmployeeMetaData))] // setting the metadata where we created
    public class Employee : IEmployee
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        
        [Required]
        [Display(Name="Department Name")]
        public string Department { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public double Salary { get; set; }
    }

    public class EmployeeMetaData
    {
        [Display(Name = "DeptName")] // Giving the name that will be displayed by the view
        public string Department { get; set; }
    }
}
