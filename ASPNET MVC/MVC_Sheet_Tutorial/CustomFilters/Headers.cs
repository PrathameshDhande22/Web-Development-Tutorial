using System;
using System.Web.Mvc;

namespace MVC_Sheet_Tutorial.CustomFilters
{

    // to create the custom action filter firstly inherit the ActionFilterAttribute
    public class Headers : ActionFilterAttribute  // ActionFilterAttribute is an abstract class.
    {
        private string key;
        private string key_value;

        public string Key
        {
            set
            {

                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("You cannot have the header key as null");
                }
                key = value;
            }
            get
            {
                return key;
            }
        }

        public string Value
        {
            set
            {

                if (String.IsNullOrWhiteSpace(value))
                {
                    throw new ArgumentNullException("You cannot have the header key as null");
                }
                key_value = value;
            }
            get
            {
                return key_value;
            }
        }


        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            filterContext.RequestContext.HttpContext.Response.Headers.Add(key, key_value);
            base.OnActionExecuting(filterContext);
        }

    }
}