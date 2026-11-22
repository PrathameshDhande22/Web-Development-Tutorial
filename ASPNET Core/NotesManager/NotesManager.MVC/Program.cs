using NotesManager.Data;
using NotesManager.MVC.Filters;
using NotesManager.MVC.ModelBinders;
using NotesManager.MVC.RouteConstraints;
using NotesManager.Services;

var builder = WebApplication.CreateBuilder(args);

// Adding the DbContext
builder.Services.AddNoteDbContext(builder.Configuration);

// Adds the Logging services
builder.Services.AddLogging(config =>
{
    config.AddConsole();
});

builder.Logging.AddConsole();

// Add the memory cache
builder.Services.AddMemoryCache();

// Add the Response caching
builder.Services.AddResponseCaching();

// Add the Session configuration
builder.Services.AddSession(configure =>
{
    // Settings these as the cookie in the browser with some restrictions
    configure.Cookie.Name = "NotesManager.Session";
    configure.Cookie.IsEssential = true;
    configure.IdleTimeout = TimeSpan.FromMinutes(1);
    configure.Cookie.HttpOnly = true;
});

// Add services to the container.
builder.Services.AddControllersWithViews(config =>
{
    // Register the newly created model binder
    config.ModelBinderProviders.Insert(0, new CommaSeparatedModelBinderProvider());
});

// Registering the custom Route Constraint
builder.Services.AddRouting(options =>
{
    // Registered with notestatus
    options.ConstraintMap.Add("notestatus", typeof(NoteStatusConstraint));
});

// http logging services
builder.Services.AddHttpLogging();

// Configure the Antiforgery token
builder.Services.AddAntiforgery(setup =>
{
    // set the custom from field name
    setup.FormFieldName = "CSRFToken";
    setup.Cookie.Name = "NotesManager.CSRF";
    setup.HeaderName = "X-CSRF-Token";
});

// Injecting the custom filter
builder.Services.AddScoped<ApiExceptionFilter>();

// Add the services and database related services
builder.Services.AddDataServices();
builder.Services.AddApplicationServices();
builder.Services.AddFluentValidation();

var app = builder.Build();

// Middleware component to log the http 
app.UseHttpLogging();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

// Adds the Status code pages middleware 
//app.UseStatusCodePagesWithRedirects("/Error"); // here redirect will be happen to the client side
app.UseStatusCodePagesWithReExecute("/Error"); // These will redirect and execute the error controller internally without redirecting to the client side

app.UseHttpsRedirection();
app.UseRouting();

// add the response caching middleware components
app.UseResponseCaching();


app.UseAuthorization();

// Enable to use the Session : Remember the Middleware ordering
app.UseSession();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();


app.Run();
