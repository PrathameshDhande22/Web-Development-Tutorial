using Getting_Started.Models;
using MVCBusinessModels; // referencing class library
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Getting_Started.Controllers
{
    public class EmployeeController : Controller
    {
        private MVCDatabaseContext db = new MVCDatabaseContext();

        // GET: Employee
        public ActionResult Index()
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            List<Employee> employees = db.Employees.ToList();
            return View(employees);
        }

        // GET: Employee/Create
        [HttpGet] // defining the Get request and displaying only the form
        public ActionResult Create()
        {
            return View();
        }

        // POST: Employee/Create
        /*[HttpPost] // these action method will be called when the Post request is called
        public ActionResult Create(FormCollection formcollection)
        {
            Employee employee = new Employee() { Name = formcollection["Name"], Address = formcollection["Address"], Department = formcollection["Department"], Salary = Convert.ToDouble(formcollection["Salary"]) };

            MVCDatabaseContext db=new MVCDatabaseContext();
            db.Employees.Add(employee);
            db.SaveChanges();
            return RedirectToAction(nameof(Index)); // redirect to the action by specifying its name.
        }*/

        // POST: Employee/Create
        // without using FormCollection mvc will map automatically
        /* [HttpPost]
         public ActionResult Create(string name, string address, string department, double salary = 0)
         {
             Employee emp = new Employee() { Address = address, Department = department, Name = name, Salary = salary };
             MVCDatabaseContext db = new MVCDatabaseContext();
             db.Employees.Add(emp);
             db.SaveChanges();
             return RedirectToAction(nameof(Index));
         }*/

        // POST: Employee/Create
        // Directly getting the values in the class
        [HttpPost]
        public ActionResult Create_Post(Employee emp)
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            db.Employees.Add(emp);
            db.SaveChanges();
            return RedirectToAction(nameof(Index));
        }

        [HttpPost]
        [ActionName(nameof(Create_Post))] // specifying that these Create_Employee action method must work with Create action method. 
        public ActionResult Create_Employee()
        {
            if (ModelState.IsValid)
            {

                Employee emp = new Employee();
                UpdateModel<Employee>(emp); // used to fetch all the fields of the Request.Form in to the specified Model here we have given as Employee.
                db.Employees.Add(emp);
                db.SaveChanges();
                return RedirectToAction(nameof(Index));
            }
            return View();
        }

        [HttpPost]
        [ActionName(nameof(Create))] // specifying that these Create_Employee action method must work with Create action method. 
        public ActionResult Create_Employee_Try()
        {
            Employee emp = new Employee();
            if (ModelState.IsValid)
            {

                if (TryUpdateModel<Employee>(emp)) // try update model will not throw an exception as it returns if its successful then true otherwise false
                {
                    db.Employees.Add(emp);
                    db.SaveChanges();
                    return RedirectToAction(nameof(Index));
                }
                return View(emp);
            }
            return View(emp);
        }


        // GET: Employee/Edit/2
        [HttpGet]
        public ActionResult Edit(int id)
        {
            Employee emp = db.Employees.Find(id);
            if (emp == null)
            {
                return RedirectToAction(nameof(Index));
            }
            return View(emp);
        }

        // POST: Employee/Edit/2
        [HttpPost]
        [ActionName(nameof(PostData))]
        // Preventing the unintended updates
        public ActionResult Edit_Employee(int id)
        {
            Employee updateEmp = db.Employees.Find(id);
            if (updateEmp != null)
            {
                if (TryUpdateModel<Employee>(updateEmp, new string[] { "Salary", "Department", "Address" })) // specifying the parameter to be updated
                {
                    db.SaveChanges();
                }
            }
            return RedirectToAction(nameof(Index));
        }

        // POST: Employee/Edit/2
        [HttpPost]
        [ActionName(nameof(PostData))]
        // Preventing the unintended updates using Bind Attribute
        public ActionResult Edit_Employee_Bind([Bind(Include = "Salary, Department, Address", Exclude = "Id, Name")] Employee emp)
        {
            Employee updateEmp = db.Employees.Find(emp.Id);
            if (updateEmp != null)
            {
                if (TryUpdateModel<Employee>(updateEmp, new string[] { "Salary", "Department", "Address" })) // specifying the parameter to be updated
                {
                    db.SaveChanges();
                }
            }
            return RedirectToAction(nameof(Index));
        }

        // POST: Employee/Edit/2
        [HttpPost]
        [ActionName(nameof(Edit))]
        // Preventing the unintended updates using Interface
        public ActionResult Edit_Employee_Interface(int id)
        {
            Employee updateEmp = db.Employees.Find(id);
            if (updateEmp != null)
            {
                if (TryUpdateModel<IEmployee>(updateEmp)) // passing the interface for which property we want to update
                {
                    db.SaveChanges();
                }
            }
            return RedirectToAction(nameof(Index));
        }


        // GET: Employee/PostData
        [HttpGet] // explicitly defined the action method as get request.
        public ActionResult PostData()
        {
            return View();
        }

        // POST : Employee/Delete/id
        [HttpPost]
        public ActionResult Delete(int id)
        {
            Employee emp = db.Employees.Find(id);
            db.Employees.Remove(emp);
            db.SaveChanges();
            return RedirectToAction(nameof(Index));
        }


    }
}