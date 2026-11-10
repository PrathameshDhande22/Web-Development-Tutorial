using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesManager.Data;
using NotesManager.Domain.Enums;

namespace NotesManager.MVC.Controllers
{
    public class NotesController : Controller
    {
        private NoteDbContext dbContext;

        // Constructor with dependency injection
        public NotesController(NoteDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]  // Specifying these action method as the get method only
        public IActionResult Index(int id)
        {
            return View();
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

        // Partial View action method
        public PartialViewResult MyNotes()
        {
            var results = dbContext.Notes.Include(n => n.Category).ToList();
            // Returning the partial view
            return PartialView(results);
        }
    }
}
