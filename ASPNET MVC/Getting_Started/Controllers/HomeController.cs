using System;
using System.Collections.Generic;
using System.Web.Mvc;

namespace Getting_Started.Controllers
{
    //[RoutePrefix("MyHome")] // prefixes the route
    //[Route("prathamesh/{action}")] // defines the route
    public class HomeController : Controller
    {
        // GET: Home/Index/id?name=string&pageno=string
        // parameter based routing
        public string Index(string id, string name, string pageno)
        {
            if (!String.IsNullOrWhiteSpace(pageno))
            {
                Console.WriteLine(Request.QueryString["pageno"]);  // another way to access the query string parameter
                return "These is index page with Page No =" + pageno.ToString(); // to get the query parameter
            }
            if (id == "0")
            {
                return "ID is Zero";
            }
            return "Index Page" + name;
        }

        // GET: Home/Details
        public ActionResult Details()
        {
            List<string> countries = new List<string> { "India", "UK", "Afganistan", "Canada", "USA" }; // passing the list oof string to the view
            ViewBag.Countries = countries; // viewbag are used to pass the data to the cshtml files or the view

            // ViewData is also used to pass the data to the view from the controller
            ViewData["Page_Header"] = "List of Countries";

            return View("Details");  // explicitly specifying the View name.
        }


        // GET: Home/User1
        public ActionResult User1()
        {
            ViewBag.Newuser = "User1"; // these data will be viewed here but will not be visible over User2 Action
            TempData["User1"] = "User1Name";
            //return RedirectToAction(nameof(User2));
            TempData.Keep();
            return View();
        }

        // GET: Home/User2
        public ActionResult User2()
        {
            ViewBag.IsReaden = false;
            ViewBag.Newuser = ViewBag.Newuser;

            return View();
            //return RedirectToAction(nameof(User3));
        }


        // GET: Home/User3
        public ActionResult User3()
        {
            TempData.Keep();
            return View("User2");
        }

        // Routing using Route Attribute
        // GET: explicit
        [Route("explicit")]
        public ActionResult ExplicitRouted()
        {
            return View();
        }

        // GET: Optional/
        // GET: Optional/Prathamesh
        // routing using optional parameter
        [Route("Optional/{name12?}")]
        public ActionResult RouteingOptional(string name12)
        {
            ViewData["Name"] = name12;
            return View();
        }

        // GET: Default/
        // GET: Default/uk
        // Routing using Optional parameter with default value by assigning the = equal to operator.
        [Route("Default/{country=uk}")]
        public ActionResult RouteingOptionalDefaultParameter(string country)
        {
            ViewData["Name"] = country;
            return View("RouteingOptional");
        }

        // GET: Constraint/3
        [Route("Constraint/{id:int:min(3)}")] // applied the constraint of int if you try to pass the string it will throw error
        public ActionResult RouteConstraint(int id)
        {
            ViewData["Id"] = id;
            return View();
        }


    }
}