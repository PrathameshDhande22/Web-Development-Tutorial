using NotesManager.Data.Interfaces;

namespace NotesManager.Data
{
    // Implementing the Unit of work pattern
    public class UnitOfWork : IUnitOfWork
    {
        private NoteDbContext dbContext;
        public UnitOfWork(NoteDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        // One common method to use
        public Task<int> SaveChangesAsync()
        {
            return dbContext.SaveChangesAsync();
        }
    }
}
