using MVC_Sheet_Tutorial.CustomFilters;
using MVC_Sheet_Tutorial.Models;
using MVC_Sheet_Tutorial.Models.Context;
using Newtonsoft.Json;
using System.Linq;
using System.Web.Mvc;
using System.Web.Security;

namespace MVC_Sheet_Tutorial.Controllers
{
    public class AuthController : Controller
    {

        // The tutorial is based on authentication and authorization
        // GET: Auth/Login
        [CheckIfLogged]
        public ActionResult Login()
        {
            return View();
        }

        // POST: Auth/Login
        [HttpPost]
        public ActionResult Login(LoginDetail logindetail)
        {

            MVCApplication db = new MVCApplication();
            if (ModelState.IsValid)
            {
                var res = db.LoginDetails.Where(lg => lg.Username == logindetail.Username.ToLower() && lg.Password == logindetail.Password.ToLower()).FirstOrDefault();

                if (res != null)
                {
                    FormsAuthentication.SetAuthCookie(JsonConvert.SerializeObject(res), false);
                    return RedirectToAction("UserDetails", "User");
                }
            }
            ModelState.AddModelError("", "Invalid username or Password");
            return View(logindetail);
        }

        // GET: Auth/Signup
        [CheckIfLogged]
        public ActionResult SignUp()
        {
            return View();
        }

        // POST: Auth/Signup
        [HttpPost]
        public ActionResult SignUp(LoginDetail logindetail)
        {
            MVCApplication db = new MVCApplication();
            db.LoginDetails.Add(logindetail);
            db.SaveChanges();
            return RedirectToAction("Login");
        }

        // GET: Auth/Logout
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Login");
        }
    }
}