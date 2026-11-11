using Microsoft.AspNetCore.Mvc;
using NotesManager.MVC.Models.Auth;

namespace NotesManager.MVC.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            // Defining the model
            AccountViewModel model = new()
            {
                Email = "prathamesh@gmail.com",
                MemberSince = new DateOnly(2026, 10, 20),
                Name = "prathamesh"
            };

            // Passing the TempData
            TempData["Message"] = "Successfully got the message";

            // Passing the model to the view
            return View(model);
        }

        [HttpGet(Name = "Login")] // specifying the route name
        public IActionResult Login()
        {
            return View();
        }
    }
}
