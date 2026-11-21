namespace NotesManager.Data.Interfaces
{
    // Creating the unit of work design pattern for one method to call 
    public interface IUnitOfWork
    {
        public Task<int> SaveChangesAsync();
    }
}
