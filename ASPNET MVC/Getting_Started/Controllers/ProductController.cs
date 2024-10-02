using Getting_Started.Models;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace Getting_Started.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product/id

        public ActionResult Index(int id)
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            Product prod = db.Products.Find(id);
            if (prod == null)
            {
                ViewData["Message"] = "No Product Found";
                return View();
            }
            return View(prod);
        }

        // GET: Product/Edit/id
        [HttpGet]
        public ActionResult Edit(int id)
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            Product prod = db.Products.Find(id);
            if (prod == null)
            {
                ViewData["Message"] = "No Product Found";
                return View();
            }
            return View(prod);
        }

        // POST: Product/Edit/id
        [HttpPost]
        public ActionResult Edit(Product prod)
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            Product dbPro = db.Products.Find(prod.ProductId);
            if (dbPro == null)
            {
                ViewData["Message"] = "No Product Found";
            }
            UpdateModel(dbPro);
            db.SaveChanges();
            ViewData["Message"] = "Product Updated Successfully";
            return View();
        }

        // GET: Product/GetImage
        public ActionResult GetImage()
        {
            ViewData["ImageURL"] = "/Content/Images/download.jpg";
            ViewData["Alt"] = "Download Image";
            return View();
        }

        // GET: Product/Lists
        public ActionResult Lists()
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            List<Product> products = db.Products.ToList();
            return View(products);
        }

        // GET: Product/ListPartial
        public PartialViewResult ListPartial()
        {
            MVCDatabaseContext db = new MVCDatabaseContext();
            List<Product> products = db.Products.ToList();
            // partial View returns only view not the renderbody method nor it calls the layout.
            return PartialView(viewName: "Lists", model: products);
        }
    }
}
