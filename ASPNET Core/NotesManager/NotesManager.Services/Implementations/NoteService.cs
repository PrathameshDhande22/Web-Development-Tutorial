using Microsoft.Extensions.Logging;
using NotesManager.Data.Interfaces;
using NotesManager.Data.Models;
using NotesManager.Data.Repositories;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Models;
using NotesManager.Domain.Models.Note;
using NotesManager.Services.Interfaces;

namespace NotesManager.Services.Implementations
{
    public class NoteService : INoteService
    {
        private readonly NoteRepository noteRepository;
        private ILogger<NoteService> logger;
        // Injecting the unit of work for saving the entities in one save only
        private readonly IUnitOfWork unitOfWork;

        public NoteService(NoteRepository noteRepository, ILogger<NoteService> logger, IUnitOfWork unitofwork)
        {
            this.noteRepository = noteRepository;
            this.logger = logger;
            this.unitOfWork = unitofwork;
        }

        public async Task<NoteDTO?> GetNoteById(int Id)
        {
            try
            {
                Note? note = await noteRepository.GetById(Id);
                if (note == null)
                {
                    return null;
                }

                return new NoteDTO()
                {
                    Id = note.Id,
                    Status = note.Status,
                    CreatedAt = note.CreatedAt,
                    CategoryId = note.CategoryId,
                    Description = note.Description,
                    Title = note.Title,
                    UpdatedAt = note.UpdatedAt,
                    Category = new()
                    {
                        Id = note.Category.Id,
                        Name = note.Category.Name,
                        Color = note.Category.Color
                    }
                };
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error occured when fetching the note for Id={Id}", Id);
                throw;
            }
        }

        public async Task<PaginatedResponse<NoteDTO>> GetNotesAsync(SearchNoteQuery searchQuery)
        {
            try
            {
                if (searchQuery.Page <= 0)
                {
                    searchQuery.Page = 1;
                }

                PaginatedResponse<Note> notes = await noteRepository.GetAsync(searchQuery.Page, searchQuery?.CategoryId, searchQuery?.Status, searchQuery?.Search);

                return new PaginatedResponse<NoteDTO>()
                {
                    CurrentPage = notes.CurrentPage,
                    PageSize = notes.PageSize,
                    TotalItems = notes.TotalItems,
                    Data = notes.Data.Select(n => new NoteDTO()
                    {
                        Id = n.Id,
                        Category = new()
                        {
                            Id = n.Category.Id,
                            Color = n.Category.Color,
                            Name = n.Category.Name
                        },
                        CategoryId = n.CategoryId,
                        CreatedAt = n.CreatedAt,
                        Description = n.Description,
                        Status = n.Status,
                        Title = n.Title,
                        UpdatedAt = n.UpdatedAt
                    }).ToList()
                };
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error occured when getting the notes");
                throw;
            }
        }

        public async Task<AddNoteDTO> NewNoteAsync(CreateNote createNote)
        {
            try
            {
                Note note = await noteRepository.Add(createNote);
                // use the unit of work to save
                await unitOfWork.SaveChangesAsync();
                return new AddNoteDTO()
                {
                    Id = note.Id,
                    CategoryId = note.CategoryId,
                    Description = note.Description,
                    Status = note.Status,
                    Title = note.Title
                };
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error occured when creating the new note");
                // Throw directly to maintain the stack of the exception
                throw;
            }
        }
    }
}
