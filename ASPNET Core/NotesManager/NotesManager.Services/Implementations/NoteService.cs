using Microsoft.Extensions.Logging;
using NotesManager.Data.Repositories;
using NotesManager.Domain.DTO.Note;
using NotesManager.Domain.Models.Note;
using NotesManager.Services.Interfaces;

namespace NotesManager.Services.Implementations
{
    public class NoteService : INoteService
    {
        private NoteRepository noteRepository;
        private ILogger<NoteService> logger;

        public NoteService(NoteRepository noteRepository, ILogger<NoteService> logger)
        {
            this.noteRepository = noteRepository;
            this.logger = logger;
        }

        public async Task<AddNoteDTO> NewNoteAsync(CreateNote createNote)
        {
            try
            {
                return await noteRepository.Add(createNote);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error occured when creating the new note");
                throw;
            }
        }
    }
}
