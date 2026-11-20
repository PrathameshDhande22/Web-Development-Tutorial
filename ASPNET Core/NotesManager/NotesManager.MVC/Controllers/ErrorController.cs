using Microsoft.AspNetCore.Mvc;

namespace NotesManager.MVC.Controllers
{
    public class ErrorController : Controller
    {
        // Action method to handle the errors
        public IActionResult Index()
        {
            if (Response.StatusCode == StatusCodes.Status404NotFound)
            {
                return View("NotFound");
            }
            return View("NotFound");
        }
    }
}
