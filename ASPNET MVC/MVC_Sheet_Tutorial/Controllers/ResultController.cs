using System.Web.Mvc;

namespace MVC_Sheet_Tutorial.Controllers
{
    public class ResultController : Controller
    {
        // GET: Result/ViewResult
        public ViewResult ViewResult()
        {
            return View();
        }

        // GET: Result/PartialViewResult
        public PartialViewResult PartialViewResult()
        {
            return PartialView("ViewResult");
        }

        // GET: Result/ContentResult
        public ContentResult contentResult()
        {
            return Content("<b>HTML</b>");
        }

        // GET: Result/EmptyResult
        public EmptyResult EmptyResult()
        {
            return null;
        }

        // GET: Result/FileResult
        public FileResult FileResult()
        {
            return File("~/Content/Images/download.jpg", "image/jpg", "ImageFromMVC.jpg");
        }

        // GET: Result/JsonResult
        public JsonResult jsonResult()
        {
            return Json(new { id = 12, name = "Prathamesh" }, JsonRequestBehavior.AllowGet);
        }

        // GET: Result/Jsresult
        public JavaScriptResult jsResult()
        {
            return JavaScript("var a=12; alert('You have invoked js result");
        }

        // GET: Result/Redirect
        public RedirectResult redirect()
        {
            return Redirect("https://www.google.com");
        }

        // GET: Result/RedirectRoute
        public RedirectToRouteResult redirectRoute(int id)
        {
            if (id == 1)
            {
                return RedirectToRoute(new { controller = "Result", action = "Index" });
            }
            else
            {
                return RedirectToAction("ViewResult");
            }
        }

        // GET: Result/httpstatusresult
        public HttpStatusCodeResult httpstatusresult()
        {
            return new HttpStatusCodeResult(System.Net.HttpStatusCode.Forbidden);
        }
    }
}