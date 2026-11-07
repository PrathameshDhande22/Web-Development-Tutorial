using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using NotesManager.Data.Models;

namespace NotesManager.Data.Configuration
{
    public class NoteHistoryConfiguration : IEntityTypeConfiguration<NoteHistory>
    {
        public void Configure(EntityTypeBuilder<NoteHistory> builder)
        {
            // Configuring the model
            builder.Property(nh => nh.OldStatus)
                 .HasConversion<string>();

            builder.Property(nh => nh.NewStatus)
                .HasConversion<string>();

            // Configuring the relationship
            builder.HasOne(nh => nh.OldCategory)
                .WithMany()
                .HasForeignKey(nh => nh.OldCategoryId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(nh => nh.NewCategory)
                .WithMany()
                .HasForeignKey(nh => nh.NewCategoryId)
                .OnDelete(DeleteBehavior.Restrict);

            builder.HasOne(nh => nh.Note)
                .WithMany(n => n.History)
                .HasForeignKey(nh => nh.NoteId)
                .OnDelete(DeleteBehavior.Restrict);

        }
    }
}
