using System.Web.Mvc;
using MVC_Sheet_Tutorial.Models.Context;
using MVC_Sheet_Tutorial.Models;
using System.Linq;
using System.Collections.Generic;
using System;

namespace MVC_Sheet_Tutorial.Controllers
{
    public class PagingController : Controller
    {

        private List<Product> GetProducts(int pageno, out int totalproducts)
        {
            MVCApplication db = new MVCApplication();
            int pageSize = 5;
            pageno = pageno == 0 ? pageno : pageno - 1;
            List<Product> products = db.Products.ToList();
            totalproducts = products.Count;
            return products.OrderBy(pr => pr.ProductId).Skip(pageSize * pageno).Take(pageSize).ToList();
        }

        // GET: Paging
        [HttpGet]
        [Route("Paging/Products/{pageno:int=0}")]
        public ActionResult Products(int pageno)
        {
            int totalProducts = 0;
            List<Product> products = GetProducts(pageno, out totalProducts);
            return View(new PagingViewModel() { Products = products, TotalProducts = totalProducts, PageNumber = pageno, PageSize = 5 });
        }

        // POST: Paging
        [HttpPost]
        [ActionName(nameof(Products))]
        public ActionResult Pagination_Post(int pageno)
        {
            return View();
        }
    }
}