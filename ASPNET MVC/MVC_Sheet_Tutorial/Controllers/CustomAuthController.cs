using MVC_Sheet_Tutorial.Models;
using MVC_Sheet_Tutorial.Models.Context;
using Newtonsoft.Json;
using System;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using MVC_Sheet_Tutorial.CustomFilters;

namespace MVC_Sheet_Tutorial.Controllers
{
    public class CustomAuthController : Controller
    {
        // GET: CustomAuth
        public ActionResult Index()
        {
            return View();
        }

        // GET: CustomAuth/Login
        public ActionResult Login()
        {
            return View();
        }

        // POST: CustomAuth/Login
        [HttpPost]
        public ActionResult Login(LoginDetail logindetail)
        {
            MVCApplication db = new MVCApplication();
            if (ModelState.IsValid)
            {
                LoginDetail dbdetail = (from logind in db.LoginDetails
                                        where logind.Username == logindetail.Username && logind.Password == logindetail.Password
                                        select logind).FirstOrDefault();
                if (dbdetail != null)
                {
                    // setting the auth cookie
                    FormsAuthentication.SetAuthCookie(logindetail.Id.ToString(), false);

                    // creating the Authentication ticket
                    FormsAuthenticationTicket ticket = new FormsAuthenticationTicket(1, "PAuth", DateTime.Now, DateTime.Now.AddSeconds(20), true, JsonConvert.SerializeObject(logindetail));

                    // encrypted ticket
                    string encryptedTicket = FormsAuthentication.Encrypt(ticket);

                    // creating the cookie
                    HttpCookie cookie = new HttpCookie("PrathmAuth", encryptedTicket) { Expires = DateTime.Now.AddSeconds(40) };

                    // setting the cookie in the response
                    Response.Cookies.Add(cookie);

                    return RedirectToAction(nameof(UDetail));
                }

            }
            ModelState.AddModelError("Username", "Invalid Username");
            ModelState.AddModelError("Password", "Invalid Password");
            return View(logindetail);
        }

        // GET: CustomAuth/Logout
        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            Request.Cookies.Clear();
            return RedirectToAction("Login", "CustomAuth");
        }

        // GET: CustomAuth/UDetail
        [CustomAuthorize]
        public ActionResult UDetail()
        {
            return View();
        }


        // GET: CustomAuth/Denied
        public ActionResult Denied()
        {
            return Content("You are here because of logout");
        }


    }
}