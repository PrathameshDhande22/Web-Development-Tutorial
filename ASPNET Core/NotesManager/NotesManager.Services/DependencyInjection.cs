using Microsoft.Extensions.DependencyInjection;
using NotesManager.Data.Repositories;
using NotesManager.Services.Implementations;
using NotesManager.Services.Interfaces;
using FluentValidation;

using NotesManager.Services.Validators;
using NotesManager.Data.Interfaces;
using NotesManager.Data;

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
            services.AddScoped<NoteRepository>();

            // register the Unit of work
            services.AddScoped<IUnitOfWork, UnitOfWork>();

            return services;
        }

        // Extension method for injecting the application related services
        public static IServiceCollection AddApplicationServices(this IServiceCollection services)
        {
            services.AddScoped<ICategoryService, CategoryService>();
            services.AddScoped<INoteService, NoteService>();

            return services;
        }

        // Extension method for injecting the class and model related to Fluent Validation
        public static IServiceCollection AddFluentValidation(this IServiceCollection services)
        {
            // Registering the validator and injecting
            services.AddValidatorsFromAssemblyContaining<RegisterValidator>();

            return services;
        }
    }
}
