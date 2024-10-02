using System;
using System.IO;
using System.Web;
using System.Web.Mvc;
using MVC_Sheet_Tutorial.Models;

namespace MVC_Sheet_Tutorial.Controllers
{
    public class UploadController : Controller
    {
        // GET: Upload
        public ActionResult Index()
        {
            return View();
        }

        // GET: Upload/FileUpload
        [HttpGet]
        public ActionResult FileUpload()
        {
            return View(new FileUploadViewModel());
        }

        // POST: Upload/FileUpload
        [HttpPost]
        [ActionName("FileUpload")]
        public ActionResult FileUpload_(FileUploadViewModel model)
        {
            if (model.Image != null)
            {
                string imageext = Path.GetExtension(model.Image.FileName);
                if (imageext != ".jpg")
                {
                    ViewData["Message"] = "Upload file in JPG Format";
                    return View(model);
                }
            }
            if (model.Image == null && String.IsNullOrWhiteSpace(model.TempFile))
            {
                ViewData["Message"] = "Upload File first";
                return View(model);
            }
            else if (model.FullName == null && model.Image != null)
            {
                // save the file in temporary path
                model.TempFile = this.SaveFile("~/Content/Images/TempImages", model.Image);
                return View(model);

            }
            else if (model.FullName != null && !String.IsNullOrWhiteSpace(model.TempFile) && model.Image == null)
            {
                // save the temp file
                string filename = Path.GetFileName(model.TempFile);
                string serverPath = Server.MapPath(model.TempFile);
                string destPath = Server.MapPath("~/Content/Images/" + filename);
                System.IO.File.Move(serverPath, destPath);
                //System.IO.File.Delete(serverPath);
                ViewData["Success"] = "File Uploaded SuccessFully";
                ViewData["FileName"] = "~/Content/Images/" + filename;
                ViewData["FullName"] = model.FullName;
                return View("FileSuccess");

            }
            else if (model.Image != null && model.FullName != null)
            {

                string fullname = this.SaveFile("~/Content/Images", model.Image);
                if (!String.IsNullOrWhiteSpace(model.TempFile))
                {
                    System.IO.File.Delete(Server.MapPath(model.TempFile));
                }
                ViewData["Success"] = "File Uploaded SuccessFully";
                ViewData["FileName"] = fullname;
                ViewData["FullName"] = model.FullName;
                return View("FileSuccess");
            }
            return View(model);
        }

        private string SaveFile(string path, HttpPostedFileBase file)

        {
            string imagePath = Path.GetFileName(file.FileName);
            string Extension = Path.GetExtension(file.FileName);
            string newFile = Guid.NewGuid().ToString() + Extension;
            // Saving the file in the content folder
            string savePath = Path.Combine(Server.MapPath(path), newFile);
            file.SaveAs(savePath);
            return path + "/" + newFile;
        }
    }
}