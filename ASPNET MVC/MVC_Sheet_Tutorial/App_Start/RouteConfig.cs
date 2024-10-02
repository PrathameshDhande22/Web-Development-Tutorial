using System.Web.Configuration;
using System.Web.Mvc;
using System.Web.Routing;

namespace MVC_Sheet_Tutorial
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();

            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional },
                namespaces: new string[] { "MVC_Sheet_Tutorial.Controllers" }
            );


        }
    }
}
