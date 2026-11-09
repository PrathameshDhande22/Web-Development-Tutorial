using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NotesManager.Data.Models;
using NotesManager.Domain.Enums;

// Configuration of the tables is per class
namespace NotesManager.Data.Configuration
{
    public class NoteConfiguration : IEntityTypeConfiguration<Note>
    {
        public void Configure(EntityTypeBuilder<Note> builder)
        {
            // Configuring that each status must be stored as string only in db
            builder.Property(note => note.Status)
                .HasConversion<string>();

            builder.Property(note => note.Status)
                .HasDefaultValue(NoteStatus.Draft);

            // Configuring the Relationship
            builder.HasOne(n => n.Category)
                .WithMany(c => c.Notes)
                .HasForeignKey(n => n.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);
        }
    }
}
