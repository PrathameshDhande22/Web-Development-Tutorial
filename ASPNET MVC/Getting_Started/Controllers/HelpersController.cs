using Getting_Started.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Getting_Started.Controllers
{
    [Route("html/{action=Index}")]
    public class HelpersController : Controller
    {
        // GET: html
        [HttpGet]
        public ActionResult Index()
        {
            ViewBag.Gender = new List<SelectListItem>() { new SelectListItem() { Text = "Male", Value = "male", Selected = true }, new SelectListItem() { Text = "Female", Value = "female" }, new SelectListItem() { Text = "Others", Value = "Others" } };

            Company company = new Company() { Name = "systenics" };
            Departments depts = new Departments();
            
            return View(new Tuple<Company, Departments>(company, depts));
        }

        // POST: html
        [HttpPost]
        public string Index(Department dept)
        {
            if (String.IsNullOrWhiteSpace(dept.Selected))
            {
                return "You have not selected any department";
            }
            return "You have Selected Dept=>" + dept.Selected + " with id=" + dept.Id.ToString();
        }

        // GET: html/DropDown
        [HttpGet]
        public ActionResult DropDown()
        {
            Departments depts = new Departments();
            depts.Selected = 2;
            return View(depts);
        }

        // POST: html/Dropdown
        [HttpPost]
        public string DropDown(Departments depts)
        {
            return "Welcome" + depts.Selected.ToString();
        }

        // GET: html/CheckBox
        [HttpGet]
        public ActionResult CheckBox()
        {
            List<City> city = new Cities().ListOfCity;
            return View(city);
        }

        // POST: html/CheckBox
        [HttpPost]
        public string CheckBox(List<City> cites)
        {
            List<string> selectedcities = cites.Where(city => city.isSelected).Select(city => city.Name).ToList();
            if (selectedcities.Count == 0)
            {
                return "Please Select One City";
            }
            return String.Join(" ", selectedcities);
        }

        // GET: html/ListBoxMVC
        [HttpGet]
        public ActionResult ListBoxMVC()
        {
            CityViewModel cvm = new CityViewModel();
            return View(cvm);
        }

        // POST: html/ListBoxMVC
        [HttpPost]
        public String ListBoxMVC(IEnumerable<string> SelectedCites)
        {
            if (SelectedCites == null)
            {
                return "Select One or Two Cities";
            }
            return String.Join(" ", SelectedCites);
        }

    }
}