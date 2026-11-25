using Amazon.Extensions.NETCore.Setup;
using Amazon.S3;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using NotesManager.Data;
using NotesManager.Data.Interfaces;
using NotesManager.Data.Repositories;
using NotesManager.Services.Implementations;
using NotesManager.Services.Interfaces;
using NotesManager.Services.Validators;

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
            services.AddScoped<IFileUploadService, FileUploadService>();

            return services;
        }

        // Extension method for injecting the class and model related to Fluent Validation
        public static IServiceCollection AddFluentValidation(this IServiceCollection services)
        {
            // Registering the validator and injecting
            services.AddValidatorsFromAssemblyContaining<RegisterValidator>();

            return services;
        }

        // Services for adding the AWS
        public static IServiceCollection AddAWSRequiredServices(this IServiceCollection services, IConfiguration configuration)
        {
            // Get the default configuration for the AWS
            AWSOptions awsoptions = configuration.GetAWSOptions();

            // Add the Default AWS Option
            services.AddDefaultAWSOptions(awsoptions);

            // AWS Services
            services.AddAWSService<IAmazonS3>();

            return services;
        }
    }
}
