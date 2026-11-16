using Microsoft.AspNetCore.Mvc;

namespace NotesManager.MVC.Controllers
{
    [Route("[action]")] // Specifies that the route for this controller will be based on the action name
    public class AuthController : Controller
    {
        public IActionResult Login()
        {
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }
    }
}
