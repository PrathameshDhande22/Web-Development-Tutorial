using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.DTO.Note;
using NotesManager.Services.Interfaces;

namespace NotesManager.MVC.ViewComponents
{
    // Creating the custom View Component for getting the data by Viewcomponent Attribute
    [ViewComponent(Name = "DashboardStats")]
    public class DashboardStats : ViewComponent
    {
        // Injecting the component by injecting the service
        private readonly INoteService noteService;
        private readonly ILogger<DashboardStats> logger;

        public DashboardStats(INoteService noteService, ILogger<DashboardStats> logger)
        {
            this.noteService = noteService;
            this.logger = logger;
        }

        // Component method to call these.
        public async Task<IViewComponentResult> InvokeAsync()
        {
            try
            {
                NoteStatusCountsDTO counts = await noteService.GetNotesCountsByStatusAsync();

                return View(counts);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error Occured during Getting the Notes Counts by Status");
                return View(new NoteStatusCountsDTO() { CompletedCount = 0, DraftCount = 0, InProgressCount = 0, TotalCount = 0 });
            }
        }
    }
}
