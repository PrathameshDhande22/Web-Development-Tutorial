using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.StaticData;
using NotesManager.MVC.Models;
using System.Diagnostics;

namespace NotesManager.MVC.Controllers
{
    public class HomeController : Controller
    {
        // You can even declare the property with attribute ViewData
        [ViewData]
        public string About { get; set; }

        // Returning the View result
        public ViewResult Index()
        {
            // Data Passing between Controller and View using View Data
            ViewData["Title"] = "NoteWell";
            ViewData["Features"] = DataConstants.Features; // List of features
            About = "Lists · Checklists · Undo any change";

            // Passing the Data from the ViewBag
            ViewBag.FAQs = DataConstants.FAQs;

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
