using NotesManager.Data;
using NotesManager.MVC.RouteConstraints;
using NotesManager.Services;

var builder = WebApplication.CreateBuilder(args);

// Adding the DbContext
builder.Services.AddNoteDbContext(builder.Configuration);

// Adds the Logging services
builder.Services.AddLogging();

// Add services to the container.
builder.Services.AddControllersWithViews();

// Registering the custom Route Constraint
builder.Services.AddRouting(options =>
{
    // Registered with notestatus
    options.ConstraintMap.Add("notestatus", typeof(NoteStatusConstraint));
});

// Add the services and database related services
builder.Services.AddDataServices();
builder.Services.AddApplicationServices();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthorization();

app.MapStaticAssets();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}")
    .WithStaticAssets();


app.Run();
