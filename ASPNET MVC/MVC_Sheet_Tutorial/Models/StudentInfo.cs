using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC_Sheet_Tutorial.Models
{
    public class StudentInfo
    {
        public string StudentName { get; set; }
        public IEnumerable<string> SkillSetSelected { get; set; }

    }
}