using System.Collections.Generic;

namespace Getting_Started.Models
{
    public class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Selected { get; set; }
    }
    public class Departments
    {
        public int Selected { get; set; }
        public List<Department> Department
        {
            get
            {
                return new List<Department>() { new Department() { Id = 1, Name = "HR", Selected = "HR" }, new Department() { Id = 2, Name = "IT" }, new Department() { Id = 3, Name = "Comp", Selected = "Comp" }, new Department() { Id = 4, Name = "Tech" } };
            }
        }
    }
}