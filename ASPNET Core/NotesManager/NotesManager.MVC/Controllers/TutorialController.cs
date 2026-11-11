using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NotesManager.Data;
using NotesManager.Domain.Models;

namespace NotesManager.MVC.Controllers
{
    public class TutorialController : Controller
    {
        private NoteDbContext dbContext;

        public TutorialController(NoteDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> HtmlHelpers()
        {
            // For Dropdown list convert it to the SelectListItem
            List<SelectListItem> categories = await dbContext.Category.AsNoTracking().Select(c => new SelectListItem()
            {
                Text = c.Name,
                Value = c.Id.ToString()
            }).ToListAsync();

            // Assigning it to the ViewBag
            ViewBag.Categories = categories;
            return View(new Notes());
        }
    }
}
