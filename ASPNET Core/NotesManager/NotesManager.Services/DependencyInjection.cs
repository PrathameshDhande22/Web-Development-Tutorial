using Microsoft.Extensions.DependencyInjection;
using NotesManager.Data.Repositories;
using NotesManager.Services.Implementations;
using NotesManager.Services.Interfaces;

namespace NotesManager.Services
{
    /// <summary>
    /// Injects the Required Services and Repository in the Application
    /// </summary>
    public static class DependencyInjection
    {
        // Extension method for injecting the Repository and db related services
        public static IServiceCollection AddDataServices(this IServiceCollection services)
        {
            // Injecting the Repository as scoped only
            services.AddScoped<CategoryRepository>();

            return services;
        }

        // Extension method for injecting the application related services
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<ICategoryService, CategoryService>();

            return services;
        }
    }
}
