using Getting_Started.Models;
// import the business models
using MVCBusinessModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Getting_Started.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult Index()
        {
            Student student = new Student() { Id = 1, Name = "Prathamesh", City = "Panvel", Address = "Panvel near railway station", Standard = 4 };

            // passing the model to the view
            return View(student);
        }

        // GET: Student/StudentList
        public ActionResult StudentList()
        {
            Student student1 = new Student() { Id = 1, Name = "Prathamesh", City = "Panvel", Address = "Panvel near railway station", Standard = 4 };
            Student student2 = new Student() { Id = 2, Name = "Sneha", City = "Mumbai", Address = "Andheri West", Standard = 5 };
            Student student3 = new Student() { Id = 3, Name = "Rahul", City = "Navi Mumbai", Address = "Nerul East", Standard = 6 };

            List<Student> students = new List<Student>() { student1, student2, student3 };

            ListStudent liststudent = new ListStudent() { Students = students };
            return View(liststudent);
        }

        // GET: Student/lists
        public ActionResult Lists()
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            ListStudent listStudent = new ListStudent() { Students = db.Students.ToList() };
            return View(listStudent);
        }

        // GET: Student/Details/
        public ActionResult Details(string id)
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            Student foundStudent = db.Students.Find(Convert.ToInt32(id));
            if (foundStudent != null)
            {
                return View("Index", foundStudent);

            }
            return RedirectToAction("Lists");
        }

        // GET: Student/ListBusiness
        // These is referencing the model which is declared in another assembly
        public ActionResult ListBusiness()
        {
            List<Employee> emps = new ListofEmployee().Employees;
            return View(emps);
        }
    }
}