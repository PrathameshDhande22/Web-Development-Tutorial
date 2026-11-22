using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Models;
using NotesManager.Domain.Constants;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Enums;
using NotesManager.Domain.Models;
using NotesManager.Domain.Models.Note;

namespace NotesManager.Data.Repositories
{
    public class NoteRepository
    {
        private NoteDbContext dbContext;

        public NoteRepository(NoteDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        /// <summary>
        /// Get a paginated list of notes based on the provided filters.
        /// </summary>
        /// <param name="Page">Page Number must start with 1</param>
        /// <param name="CategoryId">CategoryId of the Note to Search for</param>
        /// <param name="status">Status of the Note to Search for</param>
        /// <param name="Search">Title and Content to Search</param>
        /// <returns>Returns a paginated list of notes as a <see cref="PaginatedResponse{NoteDTO}"/></returns>
        public async Task<PaginatedResponse<Note>> GetAsync(int Page = 1, int? CategoryId = null, NoteStatus? status = null, string? Search = null)
        {
            var notes = dbContext.Notes
                         .AsNoTracking()
                         .Include(n => n.Category)
                         .OrderByDescending(n => n.Pinned)
                         .ThenByDescending(n => n.UpdatedAt.HasValue ? n.UpdatedAt : n.CreatedAt)
                         .AsQueryable();

            // Check the Categoryid
            if (CategoryId.HasValue && CategoryId != 0)
            {
                notes = notes.Where(n => n.CategoryId == CategoryId);
            }

            // Check the status
            if (status.HasValue)
            {
                notes = notes.Where(n => n.Status == status);
            }

            // Check the Title and content
            if (!string.IsNullOrWhiteSpace(Search))
            {
                notes = notes.Where(n => n.Title.Contains(Search) || (n.Description != null && n.Description.Contains(Search)));
            }

            PaginatedResponse<Note> paginatedResponse = new()
            {
                PageSize = NoteConstants.PageSize,
                TotalItems = await notes.CountAsync(),
                CurrentPage = Page
            };

            // Apply pagination
            notes = notes.Skip((Page - 1) * NoteConstants.PageSize).Take(NoteConstants.PageSize);

            paginatedResponse.Data = await notes.ToListAsync();

            return paginatedResponse;
        }

        public async Task<Note> Add(CreateNote note)
        {
            Note newnote = new()
            {
                CategoryId = note.CategoryId,
                Title = note.Title,
                Status = note.Status,
                Description = note.Description,
                CreatedAt = DateTime.UtcNow,
            };
            await dbContext.Notes.AddAsync(newnote);
            return newnote;
        }

        public Task<Note?> GetById(int id)
        {
            return dbContext.Notes
                        .Include(n => n.Category)
                        .Include(n => n.History)
                        .AsNoTracking()
                        .AsSplitQuery()
                        .Where(n => n.Id == id)
                        .FirstOrDefaultAsync();
        }

        public Task<Note?> GetForUpdateAsync(int id)
        {
            return dbContext.Notes.FirstOrDefaultAsync(n => n.Id == id);
        }

        public Task<List<Note>> GetPinnedNotes()
        {
            return dbContext.Notes
                .AsNoTracking()
                .Where(n => n.Pinned)
                .OrderByDescending(n => n.UpdatedAt.HasValue ? n.UpdatedAt : n.CreatedAt)
                .ToListAsync();
        }

        public Task<NoteStatusCountsDTO?> GetNoteStatusCountsAsync()
        {
            var query = from note in dbContext.Notes
                        group note by 1 into grouped
                        select new NoteStatusCountsDTO()
                        {
                            TotalCount = grouped.Count(),
                            CompletedCount = grouped.Count(n => n.Status == NoteStatus.Completed),
                            DraftCount = grouped.Count(n => n.Status == NoteStatus.Draft),
                            InProgressCount = grouped.Count(n => n.Status == NoteStatus.InProgress)
                        };
            return query.FirstOrDefaultAsync();
        }
    }
}
