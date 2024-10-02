using MVC_Sheet_Tutorial.Models;
using MVC_Sheet_Tutorial.Models.Context;
using System.Linq;
using System.Web.Mvc;
using MVC_Sheet_Tutorial.CustomFilters;
using System.Collections.Generic;

namespace MVC_Sheet_Tutorial.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home/Index
        // GET: Home
        // GET: /
        public ActionResult Index()
        {
            TempData["Name"] = "Prathamesh Dhande";
            TempData["Name2"] = "John Clever";
            return View();
        }

        // Tutorial for Tempdata with peek method
        // GET: Home/method1
        public ActionResult Method1()
        {
            return View("TempDataView");
        }

        // GET: Home/Method2
        public ActionResult Method2()
        {
            return View("TempDataView");
        }

        // GET: Home/method3
        public ActionResult method3()
        {
            return Json(new { names = new[] { "Prathamesh", "Aryan", "Vivo" } }, JsonRequestBehavior.AllowGet);
        }

        // GET: Home/Validation
        [HttpGet]
        public ActionResult Validation()
        {
            return View();
        }

        // POST: Home/Validation
        [HttpPost]
        public ActionResult Validation(Sample sample)
        {
            if (ModelState.IsValid)
            {
                if (sample.Description == null || sample.Description.Contains(0.ToString()))
                {
                    ModelState.AddModelError("Description", "Your Description cannot contain 0 as the Value or Empty Description");
                }
                else
                {
                    return View("DisplaySample", sample);
                }
            }
            return View(sample);
        }

        // Action method for remote validation
        // POST: Home/IsUserNameExist/username
        [HttpPost]
        public JsonResult IsUserNameExist(string username) // parameter name must be same while creating the remote validation
        {
            // the json result should return true for remote validation.

            MVCApplication db = new MVCApplication();
            bool res = db.Samples.Any(s => s.UserName == username); // must return false to enable the error.
            return Json(!res, JsonRequestBehavior.AllowGet);
        }

        // GET: Home/help
        [ActionName("help")] // giving the action name to the action method such that from now onwards it will be able to hit request on Home/help
        public string GetHelpFromMVC()
        {
            return "You got the help from MVC";
        }

        [NonAction] // usage of nonaction method it will make these method as nonaction method
        public Student NonActionMethod()
        {
            return new MVCApplication().Students.Find(12);
        }

        // GET: Home/VerbsRequest
        // POST: Home/VerbsRequest
        [AcceptVerbs(HttpVerbs.Get | HttpVerbs.Post)] // which means these action method will now support the GEt method as well as post method
        public ActionResult VerbsRequest()
        {
            if (Request.HttpMethod == "GET")
            {
                ViewData["Message"] = "These is the GET Request";
                return View();
            }
            else if (Request.HttpMethod == "POST")
            {
                ViewData["Message"] = "These is the POST request";
                return View();
            }
            return View();

        }

        // GET: Home/ActionFilters
        [OutputCache(Duration = 3)] // these attribute is actionfilter
        public ActionResult ActionFilters()
        {
            return View();
        }

        // GET: Home/CustomFilters
        [Headers(Key = "APITokenMVC", Value = "prathameshisdoinghomework")]  // using the custom action filters
        public ActionResult CustomFilters()
        {
            return View();
        }

        // GET: Home/Try1
        public ActionResult try1()
        {
            TempData["data"] = "Prathamesh";
            return RedirectToAction(nameof(try2));
        }

        public ActionResult try2()
        {
            return RedirectToAction(nameof(try3));
        }
        public ActionResult try3()
        {
            return RedirectToAction(nameof(try4));
        }
        // Get: Home/try4
        public ActionResult try4()
        {
            return View();
        }


        // GET: Home/CheckForDisable
        // Tutorial for posting the data for which the input is disabled and along with how to remove the errors with specified key.
        public ActionResult CheckForDisable()
        {
            MVCApplication db = new MVCApplication();
            Product prod = db.Products.Find(9);
            ProductExtend prodex = new ProductExtend() { ProductId = prod.ProductId, ProductAddedDate = prod.ProductAddedDate, ProductDescription = prod.ProductDescription, ProductPrice = prod.ProductPrice, ProductQuantity = prod.ProductQuantity, ProductSellerName = prod.ProductSellerName, ProductWarrantyYears = prod.ProductWarrantyYears };
            return View("EditProduct", prodex);
        }

        // Tutorial on check required data annotations on radio buttons
        // POST: Home/CheckforDisable
        [HttpPost]
        public ActionResult CheckForDisable(ProductExtend product)
        {
            if (ModelState.ContainsKey("ProductDescription"))
            {
                ModelState["ProductDescription"].Errors.Clear();
            }
            if (ModelState.IsValid)
            {
                return View(product);
            }
            return View("EditProduct", product);
        }

        // GET: Home/Fetchproducts
        public JsonResult FetchProducts()
        {
            MVCApplication db = new MVCApplication();
            List<Product> prods = db.Products.ToList();
            return Json(new { products = prods }, JsonRequestBehavior.AllowGet);
        }

        // Tutorial on if error occurs then what to do in such case turn off the loader and show the error
        // GET: Home/GetLoader
        public ViewResult GetLoader() { return View(); }


    }
}