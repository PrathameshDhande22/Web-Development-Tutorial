using MVC_Sheet_Tutorial.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using MVC_Sheet_Tutorial.Models.Context;

namespace MVC_Sheet_Tutorial.Controllers
{
    public class EmployeeController : Controller
    {
        // GET: Employee
        public ActionResult Index()
        {
            return View();
        }

        // On Delete create a confirmation model
        // GET: Employee/Confirmation
        [HttpGet]
        public ActionResult Confirmation()
        {
            MVCApplication db = new MVCApplication();
            List<Employee> emps = db.Employees.ToList();
            return View(emps);
        }

        // POST: Employee/Confirmation/id
        [HttpPost]
        public ActionResult Confirmation(int id)
        {
            MVCApplication db = new MVCApplication();
            Employee emp = db.Employees.Where(e => e.Id == id).FirstOrDefault();
            if (emp == null)
            {
                return RedirectToAction("Confirmation");
            }
            db.Employees.Remove(emp);
            db.SaveChanges();
            return RedirectToAction(nameof(Confirmation));
        }

        // GET: Employee/create
        public ActionResult Create()
        {
            if (Request.HttpMethod == "GET")
            {

                Employee emp = new Employee();
                return View(emp);
            }
            else if (Request.HttpMethod == "POST")
            {
                Employee emp = new Employee();
                TryUpdateModel(emp);
                // used to check if the model state is valid or not
                if (ModelState.IsValid)
                {
                    if (emp.Salary == 0)
                    {
                        ModelState.AddModelError("Salary", "Do not enter 0 as salary"); // used to add the custom validation 
                    }
                    else
                    {
                        MVCApplication db = new MVCApplication();
                        db.Employees.Add(emp);
                        db.SaveChanges();
                    }
                }
                return View(emp);
            }
            return View();
        }

   


    }
}