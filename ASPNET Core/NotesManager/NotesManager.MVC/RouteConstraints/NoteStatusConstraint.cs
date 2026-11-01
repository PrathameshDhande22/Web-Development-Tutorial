using NotesManager.Domain.Enums;

namespace NotesManager.MVC.RouteConstraints
{
    // Create the custom route constraint by implementing the IRouteConstraint
    public class NoteStatusConstraint : IRouteConstraint
    {
        // Match method to match the rooute constraint whether it matches or not
        public bool Match(HttpContext? httpContext, IRouter? route, string routeKey, RouteValueDictionary values, RouteDirection routeDirection)
        {
            if (values.TryGetValue(routeKey, out object? statusvalue))
            {
                string notesstatusvalue = Convert.ToString(statusvalue) ?? string.Empty;
                return Enum.GetNames<NoteStatus>().Contains(notesstatusvalue);
            }
            return false;
        }
    }
}
