// Step 1: Configuring the required services
using CoreProject;
using CoreProject.Models;
using CoreProject.Service;
using Microsoft.Extensions.Options;

// Creating the Web application options
WebApplicationOptions options = new()
{
    ApplicationName = "Tutorial NET Core",
    Args = args
};

WebApplicationBuilder builder = WebApplication.CreateBuilder(options);

// Injecting the middleware
builder.Services.AddTransient<CallNextMiddleware>();

// Configure to inject these class
builder.Services.Configure<ComplexOptions>(builder.Configuration.GetSection("Complex"));

// Alternative
builder.Services.AddOptions<ComplexOptions>().BindConfiguration("Complex").ValidateDataAnnotations();

Console.WriteLine(builder.Configuration.GetValue<string>("CustomKey"));

// Injecting the dependency injection
builder.Services.AddScoped<IEmailService, EmailService>();

// Injecting as a Keyed Service
builder.Services.AddKeyedScoped<IEmailService, SendGridEmailService>("sendgrid");

// Step 2: Build the Web application
WebApplication app = builder.Build();

// Declaring the Developer Exception Page
if (app.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
}

// Serving the default files
app.UseDefaultFiles();

// Serving as the directory browser
app.UseDirectoryBrowser("/browse");

// Configure middleware for serving the static files
app.UseStaticFiles();

// Step 3: Configure the Routes and middleware
app.MapGet("/", () => "Hello World From Prathamesh");

// Reading the values from the options
app.MapGet("/get-options-value", (IOptions<ComplexOptions> complex) =>
{
    return $"Complex Key={complex.Value.ApiKey}";

});

// Using the dependency injection
// Injecting it through the constructor
app.MapGet("/send-email-now", (IEmailService emailservice) =>
{
    // call the method 
    emailservice.SendEmail("send email");
    return "Sent the Email";
});

// Injecting the keyed service
app.MapGet("/sendgrid-email", ([FromKeyedServices("sendgrid")] IEmailService emailservice) =>
{
    // call the method 
    emailservice.SendEmail("send email");
    return "Sent the Email";
});

app.MapGet("/error", async (context) =>
{
    int Number2 = 0;
    int remainder = 10 / Number2;
    await context.Response.WriteAsync("good");
});

// Reading the Value from the appsettings.json
Console.WriteLine(app.Configuration.GetValue<string>("CustomKey"));

// Reading the nested value and array from the appsettings.json
string authorization_key = app.Configuration.GetValue<string>("Authentication:Key") ?? "Default";
string module = app.Configuration.GetValue<string>("Modules:0") ?? "Default Modules";
app.MapGet("/nested", () => $"Authentication Key = {authorization_key}\nModule={module}");

// Defining the Middleware using the Map Method
app.Map("/nested-route", () => "hello route");

//// using the class based middleware
//app.UseMiddleware<CallNextMiddleware>();

//// Using the Delegate based middleware
//app.UseMiddleware<DelegateCallMiddleware>();

//// Defining the middleware using the Use Extension method
//app.Use(async (context, next) =>
//{
//    // Here it can forward the request to the next middleware
//    await context.Response.WriteAsync("Response from the Use Middleware");
//    // call the next middleware
//    await next();
//});


//// Configuring the Middleware using the Run Method
//app.Run(async (context) =>
//{
//    // Accessing the context
//    await context.Response.WriteAsync("these is middleware");
//});

//// Using the Middleware as the Method
//app.Run(Middlewares.SecondMiddleware);

// Step 4: Run the application
await app.RunAsync();