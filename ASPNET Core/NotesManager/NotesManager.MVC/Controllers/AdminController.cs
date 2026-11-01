using Microsoft.AspNetCore.Mvc;

namespace NotesManager.MVC.Controllers
{
    [Route("admin/[action]")] // Token Attribute Routing
    public class AdminController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
