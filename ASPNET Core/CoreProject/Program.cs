// Step 1: Configuring the required services
WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

Console.WriteLine(builder.Configuration.GetValue<string>("CustomKey"));

// Step 2: Build the Web application
WebApplication app = builder.Build();
// Step 3: Configure the Routes and middleware
app.MapGet("/", () => "Hello World From Prathamesh");

// Reading the Value from the appsettings.json
Console.WriteLine(app.Configuration.GetValue<string>("CustomKey"));

// Reading the nested value and array from the appsettings.json
string authorization_key = app.Configuration.GetValue<string>("Authentication:Key") ?? "Default";
string module = app.Configuration.GetValue<string>("Modules:0")??"Default Modules";
app.MapGet("/nested", () => $"Authentication Key = {authorization_key}\nModule={module}");

// Step 4: Run the application
await app.RunAsync();