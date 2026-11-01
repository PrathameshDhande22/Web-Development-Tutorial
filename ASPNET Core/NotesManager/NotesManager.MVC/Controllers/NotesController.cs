using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.Enums;

namespace NotesManager.MVC.Controllers
{
    public class NotesController : Controller
    {
        [HttpGet]  // Specifying these action method as the get method only
        public string Index(int id)
        {
            return $"Index({id}) of the Notes Controller";
        }

        // defining the custom Route constraint
        [Route("status/{status:notestatus}")]
        public string Status(NoteStatus status)
        {
            return $"Status of the Notes {status.ToString()}";
        }

        [Route("note/{id:int}/history")]  // defining the route with attribute routing
        [Route("note/history/{id:int}")] // Specifying multiple route
        public string History(int id)
        {
            return $"History for Notes {id}";
        }
    }
}
