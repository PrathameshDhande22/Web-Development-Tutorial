using MVC_Sheet_Tutorial.Models;
using Newtonsoft.Json;
using System.Security.Principal;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace MVC_Sheet_Tutorial.CustomFilters
{
    public class CustomAuthorize : AuthorizeAttribute
    {
        protected override bool AuthorizeCore(HttpContextBase httpContext)
        {
            if (httpContext.Request.Cookies["PrathmAuth"] == null)
            {
                return false;
            }
            HttpCookie cookie = httpContext.Request.Cookies["PrathmAuth"];
            FormsAuthenticationTicket ticket = FormsAuthentication.Decrypt(cookie.Value);
            if (ticket.Expired)
            {
                return false;
            }
            LoginDetail loginDetail = JsonConvert.DeserializeObject<LoginDetail>(ticket.UserData);
            if (loginDetail == null)
            {
                return false;
            }
            httpContext.User = new GenericPrincipal(new FormsIdentity(ticket), new string[] { "Admin" });
            return true;
        }

        protected override void HandleUnauthorizedRequest(AuthorizationContext filterContext)
        {
            filterContext.Result = new RedirectToRouteResult(new System.Web.Routing.RouteValueDictionary { { "controller", "CustomAuth" }, { "action", "Denied" } });
        }
    }
}