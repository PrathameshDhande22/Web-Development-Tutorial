using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.StaticData;
using System.Net.Mime;

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

        // action method with content results
        [Route("robots.txt")]
        [HttpGet]
        public ContentResult RobotsTxt()
        {
            string txtrecord = """
                User-agent: *
                Disallow: 
                Disallow: /api
                Sitemap: https://localhost:7014/sitemap.xml
                """;
            // Return the content result
            return Content(txtrecord, MediaTypeNames.Text.Plain);
        }

        public IActionResult ThrowError(bool notfound)
        {
            if (notfound)
            {
                return NotFound();
            }
            return Unauthorized();
        }
    }
}
