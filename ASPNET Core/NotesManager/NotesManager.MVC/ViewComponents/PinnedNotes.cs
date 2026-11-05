using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.StaticData;

namespace NotesManager.MVC.ViewComponents
{
    // For Implementing the Component inherit the class with Viewcomponent
    public class PinnedNotes : ViewComponent
    {
        // The invoke method for the view component returning the view
        public async Task<IViewComponentResult> InvokeAsync()
        {
            return View(DataConstants.Notes);
        }
    }
}
