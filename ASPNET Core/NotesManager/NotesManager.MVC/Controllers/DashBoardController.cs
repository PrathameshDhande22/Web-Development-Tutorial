using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.Constants;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Models.Note;
using NotesManager.Services.Interfaces;

namespace NotesManager.MVC.Controllers
{
    public class DashBoardController : Controller
    {
        private readonly INoteService noteService;
        private readonly ILogger<DashBoardController> logger;

        public DashBoardController(INoteService noteService, ILogger<DashBoardController> logger)
        {
            this.noteService = noteService;
            this.logger = logger;
        }

        public async Task<IActionResult> Index()
        {
            // Get Recently updated notes
            List<NoteDTO> recentnotes = (await noteService.GetNotesAsync(new SearchNoteQuery())).Data.Take(NoteConstants.RecentNoteCount).ToList();

            return View(recentnotes);
        }
    }
}
