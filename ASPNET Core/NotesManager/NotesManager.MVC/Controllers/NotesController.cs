using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesManager.Data;
using NotesManager.Data.Models;
using NotesManager.Domain.Constants;
using NotesManager.Domain.DTO.Category;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Enums;
using NotesManager.Domain.Models;
using NotesManager.Domain.Models.Note;
using NotesManager.MVC.Filters;
using NotesManager.Services;
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

        // Action method to get the data from the route
        [HttpGet]  // Specifying these action method as the get method only
        [Route("Notes", Name = "NotesList")]
        [Route("Note/{id:int}", Name = "NoteDetails")]
        public async Task<IActionResult> Index([FromRoute(Name = "id")] int? noteId, bool LoadPrevFilter = false, [FromQuery] SearchNoteQuery? searchquery = null)
        {
            try
            {
                // When Id specified then show the detail view.
                if (noteId.HasValue)
                {
                    NoteDTO? note = await noteService.GetNoteById(noteId.Value);
                    if (note == null)
                    {
                        // Returning the Not Found result
                        return NotFound();
                    }
                    return View("NoteDetail", note);
                }
                // Getting the cookies from the request
                if (!Request.Cookies.TryGetValue(NoteConstants.NotesViewCookieName, out string? noteview))
                {
                    // Setting the cookie options
                    CookieOptions options = new()
                    {
                        Expires = DateTime.UtcNow.AddDays(30),
                        IsEssential = true,
                        SameSite = SameSiteMode.Strict,
                        Secure = true
                    };

                    // Not found then Set the cookies
                    Response.Cookies.Append(NoteConstants.NotesViewCookieName, "Grid", options);
                }

                SearchNoteQuery searchQuery = searchquery ?? new();
                if (LoadPrevFilter)
                {
                    // Get the last notes filter using the Session
                    string? lastnotesfilter = HttpContext.Session.GetString(NoteConstants.LastNotesFilterSessionKey);
                    _logger.LogInformation("Fetched from the last applied filter {Filter}", lastnotesfilter);
                    searchQuery = !string.IsNullOrEmpty(lastnotesfilter) ? JsonSerializer.Deserialize<SearchNoteQuery>(lastnotesfilter) ?? new SearchNoteQuery() : new SearchNoteQuery();
                }

                // For getting all the notes
                List<CategoryDTO> categories = await categoryService.GetCategoriesAsync();
                PaginatedResponse<NoteDTO> notes = await noteService.GetNotesAsync(searchQuery);

                NoteListViewModel vmmodel = new()
                {
                    Notes = notes.Data,
                    TotalNotes = notes.TotalItems,
                    Page = notes.CurrentPage,
                    TotalPage = notes.TotalPages,
                    Category = categories,
                    SearchNoteQuery = searchQuery
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
        [Route("note/status/{status:notestatus}")]
        [ServiceFilter<ApiExceptionFilter>]
        [HttpPut]  // put action method
        public async Task<IActionResult> Status(NoteStatus status, [FromQuery] int noteid)
        {
            UpdateNote updatedNote = new()
            {
                Id = noteid,
                Status = status
            };

            NoteDTO? updated = await noteService.UpdateAsync(updatedNote);
            if (updated == null)
            {
                return Json(new
                {
                    message = "Note with provided id does'nt exist",
                    success = false
                });
            }

            return Json(new
            {
                message = "Note status updated",
                success = true,
                data = status
            });
        }

        [Route("note/{id:int}/history")]  // defining the route with attribute routing
        [Route("note/history/{id:int}")] // Specifying multiple route
        public string History(int id)
        {
            return $"History for Notes {id}";
        }

        // Partial View action method
        // Action method accepting the parameters from query
        [HttpPost]
        public async Task<IActionResult> MyNotes([FromQuery] SearchNoteQuery searchNote)
        {
            try
            {
                // Setting the filter in the Session
                HttpContext.Session.SetString(NoteConstants.LastNotesFilterSessionKey, JsonSerializer.Serialize(searchNote));

                PaginatedResponse<NoteDTO> noteDTOs = await noteService.GetNotesAsync(searchNote);

                // Setting the Total Counts
                ViewData["TotalNotes"] = noteDTOs.TotalItems;
                ViewData["TotalPages"] = noteDTOs.TotalPages;

                // Returning the partial view
                return PartialView(noteDTOs.Data);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error Occurred when retrieving the notes for Search={Search},Status={Status},CategoryId={CategoryId}", searchNote.Search, searchNote.Search, searchNote.CategoryId);
                // Explicitly returning the status code.
                return StatusCode(StatusCodes.Status500InternalServerError);
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

        // Action method for using the Html Helpers
        [HttpGet]
        public async Task<IActionResult> Edit(int Id)
        {
            NoteDTO? note = await noteService.GetNoteById(Id);
            ViewBag.Categories = await categoryService.GetCategoriesAsync();

            if (note == null)
            {
                // Not Found Result
                return NotFound();
            }

            UpdateNote updateNote = new()
            {
                Id = note.Id,
                CategoryId = note.CategoryId,
                Description = note.Description,
                CreatedAt = note.CreatedAt,
                Title = note.Title,
                Status = note.Status
            };

            return View(updateNote);
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(UpdateNote updateNote)
        {
            // Validate the model
            if (ModelState.IsValid)
            {
                // Update the Note
                NoteDTO? updatedNote = await noteService.UpdateAsync(updateNote);
                if (updatedNote == null)
                {
                    return NotFound();
                }
                // Success
                TempData["Success"] = "Note Updated";
                return RedirectToAction(nameof(Index), new { Id = updatedNote.Id });
            }

            ViewBag.Categories = await categoryService.GetCategoriesAsync();
            return View(updateNote);
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
        [ValidateAntiForgeryToken] // Validate the antiforgery token
        public async Task<IActionResult> New([FromForm] CreateNote createNote)
        {
            try
            {
                // Checking from the ModelBinding is the model state is valid or not
                if (ModelState.IsValid)
                {
                    _logger.LogInformation("Saving the Note with Title {Title}", createNote.Title);
                    AddNoteDTO newlycreatedNote = await noteService.NewNoteAsync(createNote);
                    if (newlycreatedNote != null)
                    {
                        TempData["Success"] = "Note Added";
                        return RedirectToAction(nameof(Index), new { id = newlycreatedNote.Id });
                    }
                }
                // Calling the service layer interface over here
                ViewBag.Categories = await categoryService.GetCategoriesAsync();

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

        // Action method to return the JSON Data as an API Call
        [HttpPost]
        [ServiceFilter<ApiExceptionFilter>] // You cannot use the exception filter directly where the services are injected
        public async Task<IActionResult> Pin(int id)
        {
            ServiceResult<bool> result = await noteService.TogglePinAsync(id);
            if (!result.Success)
            {
                return NotFound(new
                {
                    message = result.Message
                });
            }
            return Ok(new
            {
                message = result.Message,
                success = result.Success,
                data = result.Data
            });
        }
    }
}
