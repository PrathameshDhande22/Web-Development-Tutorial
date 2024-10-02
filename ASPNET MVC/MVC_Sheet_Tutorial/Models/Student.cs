using System.Collections.Generic;

namespace MVC_Sheet_Tutorial.Models
{
    public partial class Student
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Address { get; set; }

        public string City { get; set; }

        public int Standard { get; set; }
    }


    public class StudentExtend : Student
    {
        public List<Student> students { get; set; }
    }
}
