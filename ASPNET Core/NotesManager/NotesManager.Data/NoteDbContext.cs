using Microsoft.EntityFrameworkCore;
using NotesManager.Data.Models;

namespace NotesManager.Data
{
    public class NoteDbContext : DbContext
    {
        // These constructor is required when creating the db context
        public NoteDbContext(DbContextOptions<NoteDbContext> options) : base(options)
        {

        }

        // Adding the entity for in the dbcontext
        public DbSet<Note> Notes { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<NoteHistory> NoteHistory { get; set; }
    }
}
