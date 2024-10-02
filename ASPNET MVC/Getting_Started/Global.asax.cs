using Getting_Started.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Getting_Started
{
    public class MvcApplication : HttpApplication
    {
        protected void Application_Start()
        {
            // Database Configuration 
            Database.SetInitializer<MVCDatabaseContext>(null); // setting the initializer to null

            // Other Configuration
            AreaRegistration.RegisterAllAreas();
            RouteConfig.RegisterRoutes(RouteTable.Routes);
        }
    }
}
