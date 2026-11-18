using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.Exceptions;
using NotesManager.Domain.Models.Category;
using NotesManager.Services.Interfaces;

namespace NotesManager.MVC.Controllers
{
    [Route("admin/[action]")] // Token Attribute Routing
    public class AdminController : Controller
    {
        private ILogger<AdminController> logger;
        private ICategoryService categoryService;

        public AdminController(
            ILogger<AdminController> logger,
            ICategoryService categoryService
        )
        {
            this.logger = logger;
            this.categoryService = categoryService;
        }


        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Category()
        {
            try
            {
                // Fetch the category and assign it to the viewbag
                List<CategoryNotesDTO> categories = await categoryService.GetCategoriesNotesAsync();
                ViewBag.Categories = categories;
                return View(new CreateCategory());
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error Occured when getting the categories");
                TempData["Error"] = "Error Occured. Try again later";
                return View(new List<CategoryDTO>());
            }
        }

        [HttpPost]
        public async Task<IActionResult> Category(CreateCategory category)
        {
            try
            {
                // Fetch the category and assign it to the viewbag
                List<CategoryNotesDTO> categories = await categoryService.GetCategoriesNotesAsync();
                ViewBag.Categories = categories;

                if (ModelState.IsValid)
                {
                    CategoryDTO newlyCreatedCategory = await categoryService.CreateAsync(category);
                    TempData["Success"] = "New Category added";
                    return RedirectToAction(nameof(Category));
                }
                return View(category);
            }
            // Catch the validation exception here for fluent validation
            catch (ValidationException vex)
            {
                logger.LogError(vex, vex.Message);

                // Add the errors in the model state
                foreach (var err in vex.Errors)
                {
                    ModelState.AddModelError(err.PropertyName, err.ErrorMessage);
                }

                return View(category);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error Occured when getting the categories");
                TempData["Error"] = "Error Occured. Try again later";
                return View(category);
            }
        }

        // Action method for Remote validation
        [HttpGet, HttpPost]
        public async Task<JsonResult> IsCategoryAvailable(string Name)
        {
            try
            {
                bool categoryExists = await categoryService.CategoryExists(Name);
                // Return true for Remote validation Success
                return Json(categoryExists ? "The category with this name already exists" : true);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, ex.Message);
                return Json(StatusCode(StatusCodes.Status500InternalServerError, ex.Message));
            }
        }
    }
}

