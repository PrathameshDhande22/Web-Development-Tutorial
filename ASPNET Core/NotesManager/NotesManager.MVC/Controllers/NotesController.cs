using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesManager.Data;
using NotesManager.Data.Models;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Enums;
using NotesManager.Domain.Models.Note;
using NotesManager.Services.Interfaces;
using System.Net.Mime;
using System.Text.Json;

namespace NotesManager.MVC.Controllers
{
    public class NotesController : Controller
    {
        private NoteDbContext dbContext;
        private ILogger<NotesController> _logger;
        private ICategoryService categoryService;
        private INoteService noteService;

        // Constructor with dependency injection
        public NotesController(
            NoteDbContext dbContext,
            ILogger<NotesController> logger,
            ICategoryService categoryService,
            INoteService noteService
        )
        {
            this.dbContext = dbContext;
            this._logger = logger;
            this.categoryService = categoryService;
            this.noteService = noteService;
        }

        // This is the action method of redirect result
        public RedirectToActionResult Details(int Id)
        {
            return RedirectToAction(nameof(Index), new { Id = Id });
        }

        [HttpGet]  // Specifying these action method as the get method only
        [Route("Notes")]
        [Route("Note/{id:int}", Name = "NoteDetails")]
        public async Task<IActionResult> Index(int? id)
        {
            try
            {
                if (id.HasValue)
                {
                    Note? note = dbContext.Notes.Include(n => n.Category).FirstOrDefault(n => n.Id == id);
                    if (note is null)
                    {
                        // Returning the not found result
                        return NotFound();
                    }
                    return View("NoteDetail", note);
                }
                List<CategoryDTO> categories = await categoryService.GetCategoriesAsync();
                List<NoteDTO> notes = await noteService.GetNotesAsync();

                NoteListViewModel vmmodel = new()
                {
                    Notes = notes,
                    Category = categories
                };

                return View(vmmodel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occured when getting the notes");
                TempData["Error"] = "Error occured when getting the notes";
                return View();
            }
        }

        // defining the custom Route constraint
        [Route("status/{status:notestatus}")]
        public string Status(NoteStatus status)
        {
            return $"Status of the Notes {status.ToString()}";
        }

        [Route("note/{id:int}/history")]  // defining the route with attribute routing
        [Route("note/history/{id:int}")] // Specifying multiple route
        public string History(int id)
        {
            return $"History for Notes {id}";
        }

        // Partial View action method
        // Action method accepting the parameters from query
        public async Task<PartialViewResult> MyNotes([FromQuery] SearchNoteQuery searchNote)
        {
            try
            {
                List<NoteDTO> noteDTOs = await noteService.GetNotesAsync(searchNote);
                // Returning the partial view
                return PartialView(noteDTOs);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error Occurred when retrieving the notes for Search={Search},Status={Status},CategoryId={CategoryId}", searchNote.Search, searchNote.Search, searchNote.CategoryId);
                return PartialView(new List<NoteDTO>());
            }
        }

        // Returning the File
        public FileResult Export(int Id)
        {
            Note? note = dbContext.Notes.AsNoTracking().FirstOrDefault(note => note.Id == Id);
            string content = $"""
                # {note.Title}

                {note.Description}
                """;

            var memoryStream = new MemoryStream();
            using var streamWriter = new StreamWriter(memoryStream, leaveOpen: true);
            streamWriter.Write(content);
            streamWriter.Flush();

            memoryStream.Position = 0;

            return File(memoryStream, MediaTypeNames.Text.Markdown, $"{note.Title.ToLower()}.md");
        }

        // Action method to return the JSON Data
        public JsonResult AllStatus()
        {
            // Options for serializing
            JsonSerializerOptions options = new()
            {
                WriteIndented = true,
            };

            // Returning the Json data
            return Json(Enum.GetNames<NoteStatus>(), options);
        }

        // Action method for using the Html Helpers
        [HttpGet]
        public IActionResult Edit(int Id)
        {
            return View();
        }

        [HttpGet]
        public async Task<IActionResult> New()
        {
            try
            {
                // Calling the service layer interface over here
                ViewBag.Categories = await categoryService.GetCategoriesAsync();

                return View(new CreateNote());
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error Occurred");
                return RedirectToAction("Error", "Home");
            }
        }

        // Action method with post only for FromForm attribute
        [HttpPost]
        public async Task<IActionResult> New([FromForm] CreateNote createNote)
        {
            try
            {
                _logger.LogInformation("Saving the Note with Title {Title}", createNote.Title);
                AddNoteDTO newlycreatedNote = await noteService.NewNoteAsync(createNote);
                if (newlycreatedNote != null)
                {
                    TempData["Success"] = "Note Added";
                    return RedirectToAction(nameof(Index), new { id = newlycreatedNote.Id });
                }

                return View(createNote);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error occured when creating the new note");
                // Setting the Tempdata as the error
                TempData["Error"] = "Error occured creating the new note";
                return View(createNote);
            }
        }
    }
}
