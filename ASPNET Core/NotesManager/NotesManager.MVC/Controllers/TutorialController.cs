using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using NotesManager.Data;
using NotesManager.Domain.Enums;
using NotesManager.Domain.Models;
using NotesManager.MVC.ModelBinders;

namespace NotesManager.MVC.Controllers
{
    public class TutorialController : Controller
    {
        private NoteDbContext dbContext;

        public TutorialController(NoteDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public async Task<IActionResult> HtmlHelpers(TutorialNotes notes)
        {
            // For Dropdown list convert it to the SelectListItem
            List<SelectListItem> categories = await dbContext.Category.AsNoTracking().Select(c => new SelectListItem()
            {
                Text = c.Name,
                Value = c.Id.ToString()
            }).ToListAsync();

            // Assigning it to the ViewBag
            ViewBag.Categories = categories;

            TempData["Info"] = "HTMLTutorial";
            return View(new TutorialNotes());
        }

        // using the custom model binder by specifying the ModelBinder attribute
        public async Task<IActionResult> CustomBinder(
            [ModelBinder(typeof(CommaSeparatedStatusBinder))] List<NoteStatus> status)
        {
            return Json(status);
        }
    }
}
