using Microsoft.Ajax.Utilities;
using MVC_Sheet_Tutorial.Models;
using MVC_Sheet_Tutorial.Models.Context;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
namespace MVC_Sheet_Tutorial.Controllers
{
    public class TryExampleController : Controller
    {
        // GET: TryExample
        // HTML Encoding and Decoding
        public ActionResult Index()
        {
            return View();
        }

        // Question: Set Hidden field value before submitting form using jquery
        // GET: TryExample/SetHiddenField
        [HttpGet]
        public ActionResult SetHiddenField()
        {
            return View();
        }

        // POST: TryExample/SetHiddenField
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult SetHiddenField(string name, string role)
        {
            return View("DisplayHiddenField", (name, role));
        }

        // Ajax with JSON // assigning the c# value to js variable.
        // GET: TryExample/ShowPage
        [HttpGet]
        public ActionResult ShowPage()
        {
            List<Student> students = new MVCApplication().Students.ToList();
            StudentExtend st = new StudentExtend() { students = students };
            return View(st);
        }

        // These method can be called with Ajax
        // POST: TryExample/CreateStudent
        [HttpPost]
        public JsonResult CreateStudent(Student stud)
        {
            if (ModelState.IsValid)
            {
                MVCApplication db = new MVCApplication();
                db.Students.Add(stud);
                db.SaveChanges();
                return Json(new { message = "Success", student = new { name = stud.Name, address = stud.Address, standard = stud.Standard, city = stud.City } }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { message = "Error" }, JsonRequestBehavior.AllowGet);

        }

        // To serve the files to the user from the App_Data folder.
        // GET: TryExample/GetFile
        public FileResult GetFile()
        {
            return File("~/App_Data/Images/download.jpg", "image/jpg");
        }


        // GET: TryExample/ThrowError
        [HandleError(View = "Error", ExceptionType = typeof(ApplicationException))]  // Handle Error attribute and passing the View name of the error there are several parameter properties available
        public ActionResult ThrowError()
        {
            int no = Convert.ToInt32("Prath");   // these code line will throw an error.
            return Content("These is the error view ");
        }

        // GET: TryExample/ErrorPage
        public ActionResult ErrorPage()
        {
            return View("Error");
        }

        // GET: TryExample/Cookie
        public ActionResult CookieT()
        {
            // Setting the Cookie
            HttpCookie cookie = new HttpCookie("PrathamApp");
            cookie.Value = "Hello Dear these is the cookie";
            cookie["apikey"] = "dfdsafa"; // appends the cookie using &key=value
            Response.AppendCookie(cookie);
            return View();
        }

        // GET: TryExample/SessionGEt
        public ActionResult SessionGet()
        {
            Session["AppPrathamesh"] = "These is the Prathamesh"; // setting the data in the session.
            return View();
        }

        // GET: TryExample/GetViewNameController
        public ActionResult GetViewNameController()
        {
            ViewBag.ControllerName = this.ControllerContext.RouteData.GetRequiredString("controller");
            return View();
        }

        // get the data using Request.Form 
        // GET: TryExample/FromDataMultiple
        public ActionResult FromDataMultiple()
        {
            return View();
        }

        // POST: TryExample/FromDataMultiple
        [HttpPost]
        [ActionName("FromDataMultiple")]
        public ActionResult PostFormData()
        {
            return View("PostFormData");
        }


        // get the formfield of using Query string by making the formmethod as get.
        // GET: TryExample/QueryStringForm
        public ActionResult QueryStringForm(string firstname)
        {
            if (!String.IsNullOrWhiteSpace(firstname))
            {
                return View("QueryStringData");

            }
            return View();
        }

        // Async Action method
        // GET: TryExample/AsyncView
        public async Task<ActionResult> AsyncView()
        {
            Stopwatch stopwatch = Stopwatch.StartNew();
            List<Product> prods = await GetProducts();
            stopwatch.Stop();
            var data = stopwatch.Elapsed;
            return View(new Tuple<TimeSpan, IEnumerable<Product>>(data, prods.AsEnumerable()));
        }

        // Sync Action method
        // GET: TryExample/SyncView
        public ActionResult syncView()
        {
            Stopwatch stopwatch = Stopwatch.StartNew();
            List<Product> prods = new MVCApplication().Products.ToList();
            stopwatch.Stop();
            var data = stopwatch.Elapsed;
            return View("AsyncView", new Tuple<TimeSpan, IEnumerable<Product>>(data, prods));
        }

        [NonAction]
        public Task<List<Product>> GetProducts()
        {
            MVCApplication db = new MVCApplication();
            return Task.FromResult(db.Products.ToList());
        }

        // GET: TryExample/GetDateView
        // DAtetime formats
        public ActionResult GetDateView()
        {
            return View();
        }

        // Question: Remove records present in List B from List A
        // GET: TryExample/RemoveRecords
        public ActionResult RemoveRecords()
        {
            List<Employee> listA = new List<Employee>
        {
            new Employee { Id = 1, Name = "John Doe", Department = "HR", Address = "123 Street A", Salary = 5000 },
            new Employee { Id = 2, Name = "Jane Smith", Department = "IT", Address = "456 Street B", Salary = 6000 },
            new Employee { Id = 3, Name = "Alice Johnson", Department = "Finance", Address = "789 Street C", Salary = 7000 },
            new Employee { Id = 4, Name = "Bob Williams", Department = "Marketing", Address = "101 Street D", Salary = 4500 },
            new Employee { Id = 5, Name = "Charlie Brown", Department = "IT", Address = "202 Street E", Salary = 6500 }
        };

            // List B with 2 records (same as 2 records from listA)
            List<Employee> listB = new List<Employee>
        {
            new Employee { Id = 2, Name = "Jane Smith", Department = "IT", Address = "456 Street B", Salary = 6000 },
            new Employee { Id = 5, Name = "Charlie Brown", Department = "IT", Address = "202 Street E", Salary = 6500 }
        };

            var removed = listA.Except(listB, new CompareId());
            var intersept = listA.Intersect(listB, new CompareId());
            ICollection<Employee> listacopy = new List<Employee>();
            listA.CopyItemsTo(toSet: listacopy);
            listA.RemoveAll(x => listB.Any(y => y.Id == x.Id));

            // remove duplicate records
            List<Employee> listc = new List<Employee>
        {
            new Employee { Id = 2, Name = "Jane Smith", Department = "IT", Address = "456 Street B", Salary = 6000 },
            new Employee { Id = 5, Name = "Charlie Brown", Department = "IT", Address = "202 Street E", Salary = 6500 },
             new Employee { Id = 5, Name = "Charlie Brown", Department = "IT", Address = "202 Street E", Salary = 6500 },
             new Employee { Id = 2, Name = "Jane Smith", Department = "IT", Address = "456 Street B", Salary = 6000 }
        };

            var dup = listc.GroupBy(emp => new { emp.Id, emp.Name, emp.Salary, emp.Department, emp.Address }).Select(g => g.First());

            return Json(new { lista = listacopy, listb = listB, removed = removed, inter = intersept, listaremoved = listA, duplicate = dup }, JsonRequestBehavior.AllowGet);
        }


        // Trying the custom html helpers like unorderd list
        // GET: Tryexample/CustomHelpers
        public ActionResult CustomHelpers()
        {
            return View();
        }

        public ActionResult MultipleCheckBoxes()
        {
            return View();
        }




    }

    class CompareId : IEqualityComparer<Employee>
    {
        public bool Equals(Employee x, Employee y)
        {
            return x.Id == y.Id;
        }

        public int GetHashCode(Employee obj)
        {
            return obj.Id.GetHashCode();
        }
    }

    class CompareEmployee : IEqualityComparer<Employee>
    {
        public bool Equals(Employee x, Employee y)
        {
            return (x.Id == y.Id && x.Name == y.Name && x.Department == y.Department && x.Address == y.Address && x.Salary == y.Salary);
        }

        public int GetHashCode(Employee obj)
        {
            return obj.GetHashCode();
        }
    }
}