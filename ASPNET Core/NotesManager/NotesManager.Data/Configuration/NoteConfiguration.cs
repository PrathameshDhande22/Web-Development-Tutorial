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

            // Configuring the Relationship for the Category Table
            builder.HasOne(n => n.Category)
                .WithMany(c => c.Notes)
                .HasForeignKey(n => n.CategoryId)
                .OnDelete(DeleteBehavior.Restrict);

            // Configuring the Relationship for the NoteAttachments Table
            // The Relationship with None returning
            builder.HasMany(n => n.Attachments)
                .WithOne()
                .HasForeignKey(a => a.Noteid)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
