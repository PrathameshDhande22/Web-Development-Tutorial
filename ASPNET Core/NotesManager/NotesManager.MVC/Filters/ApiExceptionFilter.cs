using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace NotesManager.MVC.Filters
{
    // implmement the custom exception filter for api by inheriting the ExceptionFilterAttribute
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        private readonly ILogger<ApiExceptionFilter> logger;

        public ApiExceptionFilter(ILogger<ApiExceptionFilter> logger)
        {
            this.logger = logger;
        }

        // Implement these when an exception is occured send as json with 500 status code
        public override void OnException(ExceptionContext context)
        {
            // When ever an exception occurs
            logger.LogError(context.Exception, "Error Occured in endpoint={Endpoint} Message={Message}", context.ActionDescriptor.DisplayName, context.Exception.Message);

            // Send as the view result
            context.Result = new JsonResult(new
            {
                message = "Error occured on our side.",
                success = false
            });
            context.HttpContext.Response.StatusCode = StatusCodes.Status500InternalServerError;

            base.OnException(context);
        }
    }
}
