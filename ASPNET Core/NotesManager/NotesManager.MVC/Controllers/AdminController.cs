using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.Models.Category;
using NotesManager.MVC.Filters;
using NotesManager.Services;
using NotesManager.Services.Interfaces;
using System.Threading.Tasks;

namespace NotesManager.MVC.Controllers
{
    [TypeFilter<NoIndexFilter>()] // Using the typefilter as our filter is not an attribute
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


        #region Category
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
        [ValidateAntiForgeryToken]
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

        [HttpDelete]
        public async Task<IActionResult> Category(int id)
        {
            ServiceResult<bool> results = await categoryService.DeleteCategoryAsync(id);
            if (results.Success)
            {
                return Ok(new
                {
                    message = results.Message,
                    success = results.Success,
                    data = results.Data
                });
            }
            else if (results.ErrorOccured)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, results);
            }
            return BadRequest(results);
        }
        #endregion
    }
}

