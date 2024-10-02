using System.Web.Mvc;

namespace MVC_Sheet_Tutorial.CustomFilters
{
    public class CheckIfLogged : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            if (filterContext.HttpContext.User.Identity.IsAuthenticated)
            {
                filterContext.Result = new RedirectResult("/User/UserDetails");
            }
            base.OnActionExecuting(filterContext);
        }
    }
}