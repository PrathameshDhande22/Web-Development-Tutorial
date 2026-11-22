using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.DTO.Note;
using NotesManager.Services.Interfaces;

namespace NotesManager.MVC.ViewComponents
{
    // For Implementing the Component inherit the class with Viewcomponent
    public class PinnedNotes : ViewComponent
    {
        private readonly INoteService noteService;
        private readonly ILogger<PinnedNotes> logger;

        public PinnedNotes(INoteService noteService, ILogger<PinnedNotes> logger)
        {
            this.noteService = noteService;
            this.logger = logger;
        }

        // The invoke method for the view component returning the view
        public async Task<IViewComponentResult> InvokeAsync()
        {
            List<NoteDTO> notes = await noteService.GetPinNotesAsync();
            return View(notes);
        }
    }
}
