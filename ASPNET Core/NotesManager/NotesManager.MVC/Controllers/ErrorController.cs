using Microsoft.AspNetCore.Mvc;

namespace NotesManager.MVC.Controllers
{
    public class ErrorController : Controller
    {
        // Action method to handle the errors
        public IActionResult Index()
        {
            // Clear the previous response
            Response.Clear();

            // Setting the Error Status code explicitly
            Response.StatusCode = HttpContext.Response.StatusCode;

            ViewResult result = HttpContext.Response.StatusCode switch
            {
                StatusCodes.Status404NotFound => View("NotFound"),
                StatusCodes.Status403Forbidden => View("AccessDenied"),
                StatusCodes.Status500InternalServerError => View("ServerError"),
                _ => View("NotFound")
            };
            return result;
        }
    }
}
