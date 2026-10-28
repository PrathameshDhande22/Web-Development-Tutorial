using Microsoft.AspNetCore.Mvc;

namespace MVCCore.Controllers
{
    public class DashBoardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
