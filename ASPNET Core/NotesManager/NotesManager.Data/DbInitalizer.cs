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
                    new() { Name = "Home", Color = "#4F8065" },
                    new() { Name = "Ideas", Color = "#C0528D" },
                    new() { Name = "Money", Color = "#C9973F" },
                    new() { Name = "Personal", Color = "#4785AD" },
                    new() { Name = "Travel", Color = "#D9792B" },
                    new() { Name = "Work", Color = "#8964AE" }
                };

                noteDbContext.AddRange(categories);
            }

            // Saving to the database
            noteDbContext.SaveChanges();
        }
    }
}
