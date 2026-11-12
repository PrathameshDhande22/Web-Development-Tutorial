using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace NotesManager.Data
{
    public static class DbContextExtensions
    {
        /// <summary>
        /// Extension method to Registers the NoteDbContext in the Services collection with the table.
        /// </summary>
        /// <param name="services"></param>
        /// <param name="configuration">Configuration Interface</param>
        /// <returns>Services collection to be used further for builder pattern or injecting the services.</returns>
        public static IServiceCollection AddNoteDbContext(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDatabaseDeveloperPageExceptionFilter();

            // Injecting or Registering the dbcontext
            services.AddDbContext<NoteDbContext>(options =>
            {
                options.EnableDetailedErrors(true);
                options.UseSqlServer(configuration.GetConnectionString("NoteDbContext"));
                // Use these method for async seeding
                options.UseSeeding(DbInitalizer.Initialize);
            });

            return services;
        }
    }
}
