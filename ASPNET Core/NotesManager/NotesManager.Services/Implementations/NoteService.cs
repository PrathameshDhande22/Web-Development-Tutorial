using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using NotesManager.Data.Interfaces;
using NotesManager.Data.Models;
using NotesManager.Data.Repositories;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Enums;
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
        private readonly IFileUploadService fileUploadService;

        public NoteService(NoteRepository noteRepository, ILogger<NoteService> logger, IUnitOfWork unitofwork, IFileUploadService fileUploadService)
        {
            this.noteRepository = noteRepository;
            this.logger = logger;
            this.unitOfWork = unitofwork;
            this.fileUploadService = fileUploadService;
        }

        public async Task<NoteDTO?> GetNoteById(int Id)
        {
            try
            {
                Note? note = await noteRepository.GetById(Id, new Data.PropertyInclude { IncludeAttachments = true, IncludeCategory = true, IncludeNoteHistory = true });
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
                    },
                    Attachments = note.Attachments.Select(a => new NoteAttachmentDTO()
                    {
                        Id = a.Id,
                        FileName = a.Name,
                        Size = a.Length,
                        FilePath = a.FilePath,
                        CreatedAt = a.CreatedAt.DateTime,
                        AttachMentType = a.Extension
                    }).ToList()
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
                // Add Note
                Note note = await noteRepository.Add(createNote);

                // Record the Creation History
                NoteHistory history = new()
                {
                    Action = "Created",
                    NewCategoryId = note.CategoryId,
                    NewDescripton = note.Description,
                    NewStatus = note.Status,
                    NewTitle = note.Title,
                    Note = note
                };

                await noteRepository.RecordHistoryAsync(history);

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

            // Store old values for history
            string? oldTitle = note.Title;
            string? oldDescription = note.Description;
            NoteStatus? oldStatus = note.Status;
            int? oldCategoryId = note.CategoryId;

            // Apply updates
            note.Title = string.IsNullOrWhiteSpace(updateNote.Title) ? note.Title : updateNote.Title;
            note.UpdatedAt = DateTime.UtcNow;
            note.Description = string.IsNullOrWhiteSpace(updateNote.Description) ? note.Description : updateNote.Description;
            note.Status = updateNote.Status == note.Status ? note.Status : updateNote.Status;
            note.CategoryId = updateNote.CategoryId == 0 || updateNote.CategoryId == note.CategoryId ? note.CategoryId : updateNote.CategoryId;

            // Check what changed
            bool titleChanged = note.Title != oldTitle;
            bool descriptionChanged = note.Description != oldDescription;
            bool statusChanged = note.Status != oldStatus;
            bool categoryChanged = note.CategoryId != oldCategoryId;

            // Determine action
            string action = GetUpdateAction(titleChanged, descriptionChanged, statusChanged, categoryChanged, note.Status);

            // Record the Update
            NoteHistory newhistory = new()
            {
                NoteId = note.Id,
                Action = action,
                OldTitle = titleChanged ? oldTitle : null,
                NewTitle = titleChanged ? note.Title : null,
                OldDescription = descriptionChanged ? oldDescription : null,
                NewDescripton = descriptionChanged ? note.Description : null,
                OldStatus = statusChanged ? oldStatus : null,
                NewStatus = statusChanged ? note.Status : null,
                OldCategoryId = categoryChanged ? oldCategoryId : null,
                NewCategoryId = categoryChanged ? note.CategoryId : null,
                Note = note
            };

            await noteRepository.RecordHistoryAsync(newhistory);

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

        public async Task<List<NoteHistoryDTO>?> GetHistoryForNoteAsync(int noteid)
        {
            List<NoteHistoryDTO> history = await noteRepository.GetHistoryListAsync(noteid);
            if (history.Count == 0)
            {
                logger.LogInformation("No history found for Note with Id={Id}", noteid);
                return null;
            }
            return history;
        }

        public async Task<NoteDetailedHistoryDTO?> GetHistoryById(int id)
        {
            NoteHistory? history = await noteRepository.GetDetailNoteHistory(id);
            if (history == null)
            {
                logger.LogInformation("No history found for NoteHistory with Id={Id}", id);
                return null;
            }
            return new NoteDetailedHistoryDTO()
            {
                Id = history.Id,
                ActionName = history.Action,
                CreatedAt = history.CreatedAt.DateTime,
                NewCategoryId = history.NewCategoryId,
                NewDescripton = history.NewDescripton,
                NewStatus = history.NewStatus,
                NewTitle = history.NewTitle,
                OldCategoryId = history.OldCategoryId,
                OldDescription = history.OldDescription,
                OldStatus = history.OldStatus,
                OldTitle = history.OldTitle
            };
        }

        public async Task<ServiceResult<List<string>>> AddAttachmentsToNote(List<IFormFile> files, int noteId)
        {
            Note? note = await noteRepository.GetById(noteId);
            if (note == null)
            {
                return ServiceResult<List<string>>.Fail("Note with these id does not exists");
            }

            // Upload the files to S3 and save the attachment details in the database
            var tasks = files.Select(async f =>
            {
                string filePath = $"{noteId}/{f.FileName}_{Guid.NewGuid().ToString()}";
                bool success = await fileUploadService.UploadAsync(f, filePath, f.ContentType);

                if (success)
                {
                    NoteAttachments attachment = new()
                    {
                        Extension = GetNoteAttachmentType(f.ContentType),
                        FilePath = filePath,
                        Length = f.Length / 1000,
                        Name = f.FileName,
                        Noteid = note.Id
                    };

                    noteRepository.AddAttachments(attachment);
                    return (true, f.FileName);
                }
                else
                {
                    logger.LogInformation("Failed to add the attachments for NoteId={Id}", noteId);
                }
                return (false, f.FileName);
            });

            // Process all files concurrently and wait for all of them to complete
            var results = await Task.WhenAll(tasks);
            List<string> failedresults = results.Where(r => !r.Item1).Select(r => $"{r.FileName} failed to upload. Try again with these file later").ToList();

            await unitOfWork.SaveChangesAsync();

            if (failedresults.Count == files.Count)
            {
                return ServiceResult<List<string>>.Fail("Files Failed to Upload. No attachments added");
            }
            return ServiceResult<List<string>>.Ok(failedresults, failedresults.Count > 0 ? "Some files failed to upload" : "Files attached successfully");
        }

        #region Helper Methods
        private string GetUpdateAction(bool titleChanged, bool descriptionChanged, bool statusChanged, bool categoryChanged, NoteStatus newStatus)
        {
            if (!titleChanged && !descriptionChanged && !categoryChanged && statusChanged)
                return $"Status -> {newStatus}";
            return "Edited";
        }

        private NoteAttachmentType GetNoteAttachmentType(string Extension)
        {
            return Extension switch
            {
                "image/png" => NoteAttachmentType.PNG,
                "image/jpg" or "image/jpeg" => NoteAttachmentType.JPG,
                "application/pdf" => NoteAttachmentType.PDF,
                _ => NoteAttachmentType.PNG,
            };
        }
        #endregion

    }
}
