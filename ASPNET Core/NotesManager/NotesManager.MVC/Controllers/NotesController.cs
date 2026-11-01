using Microsoft.AspNetCore.Mvc;

namespace NotesManager.MVC.Controllers
{
    public class NotesController : Controller
    {
        public string Index(int id)
        {
            return $"Index({id}) of the Notes Controller";
        }
    }
}
