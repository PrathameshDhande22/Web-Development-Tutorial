using Microsoft.AspNetCore.Mvc;
using NotesManager.MVC.Models;
using System.Diagnostics;
using NotesManager.Domain.StaticData;

namespace NotesManager.MVC.Controllers
{
    public class HomeController : Controller
    {
        // You can even declare the property with attribute ViewData
        [ViewData]
        public string About { get; set; }

        public IActionResult Index()
        {
            // Data Passing between Controller and View using View Data
            ViewData["Title"] = "NoteWell";
            ViewData["Features"] = DataConstants.Features; // List of features
            About = "Lists · Checklists · Undo any change";

            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
