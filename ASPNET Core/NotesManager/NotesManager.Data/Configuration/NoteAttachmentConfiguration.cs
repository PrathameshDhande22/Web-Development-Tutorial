using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NotesManager.Data.Models;

namespace NotesManager.Data.Configuration
{
    public class NoteAttachmentConfiguration : IEntityTypeConfiguration<NoteAttachments>
    {
        public void Configure(EntityTypeBuilder<NoteAttachments> builder)
        {
            // Configuring the enum to be stored as string
            builder.Property(p => p.Extension)
                .HasConversion<string>();
        }
    }
}
