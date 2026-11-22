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
                    Pinned = note.Pinned,
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
                        Pinned = n.Pinned,
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

        public async Task<NoteStatusCountsDTO> GetNotesCountsByStatusAsync()
        {
            return await noteRepository.GetNoteStatusCountsAsync() ?? new NoteStatusCountsDTO()
            {
                CompletedCount = 0,
                DraftCount = 0,
                InProgressCount = 0,
                TotalCount = 0
            };
        }

        public async Task<ServiceResult<bool>> TogglePinAsync(int noteid)
        {
            Note? note = await noteRepository.GetForUpdateAsync(noteid);
            if (note == null)
            {
                logger.LogError("Tried to get notes with id={Id} which does not exists", noteid);
                return ServiceResult<bool>.Fail("Note with id not found");
            }

            note.Pinned = !note.Pinned;
            await unitOfWork.SaveChangesAsync();
            logger.LogInformation("Pinned the Note with id={Id} Pin={Pin}", noteid, note.Pinned);
            return ServiceResult<bool>.Ok(note.Pinned, note.Pinned ? "note pin successfully" : "note unpin successfully");
        }

        public async Task<NoteDTO?> UpdateAsync(UpdateNote updateNote)
        {
            Note? note = await noteRepository.GetForUpdateAsync(updateNote.Id);
            if (note == null)
            {
                logger.LogError("Note with id={Id} does not exists", updateNote.Id);
                return null;
            }

            note.Title = string.IsNullOrWhiteSpace(updateNote.Title) ? note.Title : updateNote.Title;
            note.UpdatedAt = DateTime.UtcNow;
            note.Description = string.IsNullOrWhiteSpace(updateNote.Description) ? note.Description : updateNote.Description;
            note.Status = updateNote.Status == note.Status ? note.Status : updateNote.Status;
            note.CategoryId = updateNote.CategoryId == 0 || updateNote.CategoryId == note.CategoryId ? note.CategoryId : updateNote.CategoryId;

            await unitOfWork.SaveChangesAsync();
            return new NoteDTO()
            {
                Id = note.Id,
                Title = note.Title,
                Description = note.Description,
                CategoryId = note.CategoryId,
                Status = note.Status,
                UpdatedAt = note.UpdatedAt
            };
        }

        public async Task<List<NoteDTO>> GetPinNotesAsync()
        {
            List<Note> pinnotes = await noteRepository.GetPinnedNotes();
            return pinnotes.Select(n => new NoteDTO()
            {
                Id = n.Id,
                Title = n.Title,
                Description = n.Description,
                Status = n.Status,
            }).ToList();
        }

        public async Task<bool> DeleteNoteAsync(int id)
        {
            Note? note = await noteRepository.GetById(id);
            if (note == null)
            {
                return false;
            }
            int noofrow = await noteRepository.DeleteAsync(id);
            logger.LogInformation("Deleted a Note with Id={Id} which affected Rows={Rows}", id, noofrow);
            return noofrow > 0;
        }
    }
}
