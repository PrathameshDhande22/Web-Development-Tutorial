using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Getting_Started.Models
{
    // creating the model
    public class Student
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public int Standard { get; set; }
    }
}