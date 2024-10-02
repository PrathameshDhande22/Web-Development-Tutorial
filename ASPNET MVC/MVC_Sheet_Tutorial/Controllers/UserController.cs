using System.Linq;
using System.Web.Helpers;
using System.Web.Mvc;
using System.Web.Security;
using MVC_Sheet_Tutorial.Models;
using MVC_Sheet_Tutorial.Models.Context;
using Newtonsoft.Json;

namespace MVC_Sheet_Tutorial.Controllers
{


    internal class Data
    {
        public int Id { get; set; }
        public string Username { get; set; }
    }

    [Authorize]
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            return View();
        }

        // GET: User/userDetails
        [Authorize] // Specifying that these action method requires authentication without authentication it will not allow to call the action method. 
        public ActionResult UserDetails()
        {
            ViewBag.data = User.Identity.Name;
            var obj = JsonConvert.DeserializeObject<LoginDetail>(User.Identity.Name);
            ViewBag.userdata = obj.Username;
            User user = new MVCApplication().Users.Find(obj.Id);
            return View(user);
        }

        // GET: User/BuyerAdmin
        [Authorize(Roles = "Admin,Buyer")] // specifying the multiple roles
        public ActionResult BuyerAdmin()
        {
            return View();
        }


        // GET: user/adminpanel
        [Authorize(Roles = "Admin")] // specifiying the roles here
        public ActionResult AdminPanel()
        {
            return Content("These is admin panel");
        }

        // GET: User/Unsecure
        [AllowAnonymous] // allows you to skip the authorize attribute.
        public ActionResult UnSecure()
        {
            return Content("These is unsecure method which will allow any one");
        }


    }
}