using Microsoft.AspNetCore.Mvc.ModelBinding;
using NotesManager.Domain.Enums;

namespace NotesManager.MVC.ModelBinders
{
    // Create the class by implementing the IModelBinder interface
    public class CommaSeparatedStatusBinder : IModelBinder
    {
        // Implement these method for binding
        public Task BindModelAsync(ModelBindingContext bindingContext)
        {
            //Here are will be supporting the commaseparated status and that are present in the query so get that query
            var querystring = bindingContext.HttpContext.Request.Query;
            string statusstring = querystring["status"].ToString();

            // check if they are present or not
            if (string.IsNullOrWhiteSpace(statusstring))
            {
                return Task.CompletedTask;
            }

            // Split the query and parse it
            var statuses = statusstring.Split(",").Select(s => Enum.Parse<NoteStatus>(s.Trim())).ToList();

            // Create the success result
            bindingContext.Result = ModelBindingResult.Success(statuses);

            return Task.CompletedTask;
        }
    }

    // After creating the model binder need to create the class with ModelBinderProvider by implementing the IModelBinderProvider
    public class CommaSeparatedModelBinderProvider : IModelBinderProvider
    {
        public IModelBinder? GetBinder(ModelBinderProviderContext context)
        {
            // Get the Model Type
            if (context.Metadata.ModelType == typeof(List<NoteStatus>))
            {
                // return the newly created model binder;
                return new CommaSeparatedStatusBinder();
            }
            return null;
        }
    }
}
