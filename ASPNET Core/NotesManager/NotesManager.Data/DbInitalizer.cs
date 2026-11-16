using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Models;

namespace NotesManager.Data
{
    /// <summary>
    /// Seeds the required data which is required when created or setupping the database for the first time using the EF tools. 
    /// </summary>
    public static class DbInitalizer
    {
        // Static class method for seeding the data using the AsynSeeding method of Ef core
        public static void Initialize(DbContext context, bool perform)
        {
            // Typecast the context to the original context
            NoteDbContext noteDbContext = (NoteDbContext)context;

            // Seeding the category
            if (!noteDbContext.Category.Any())
            {
                List<Category> categories = new List<Category>(){
                    new() { Name = "Home", Color = "gray" },
                    new() { Name = "Ideas", Color = "amber" },
                    new() { Name = "Money", Color = "orange" },
                    new() { Name = "Personal", Color = "green" },
                    new() { Name = "Travel", Color = "blue" },
                    new() { Name = "Work", Color = "pink" }
                };

                noteDbContext.AddRange(categories);
            }

            // Saving to the database
            noteDbContext.SaveChanges();
        }
    }
}
