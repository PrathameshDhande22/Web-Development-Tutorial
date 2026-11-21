using Microsoft.AspNetCore.Mvc.Filters;

namespace NotesManager.MVC.Filters
{
    // Implementing the custom result attribute by IResultFilter
    public class NoIndexFilter : IResultFilter
    {
        public void OnResultExecuted(ResultExecutedContext context)
        {

        }

        // These methods is called before action method result executes
        public void OnResultExecuting(ResultExecutingContext context)
        {
            // Setting the Response header as the NoIndex for the robots tax
            context.HttpContext.Response.Headers.Append("X-Robots-Tag", "noindex");
        }
    }
}
