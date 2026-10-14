namespace CoreProject
{
    public class Middlewares
    {
        // Declaring the Middleware as a method
        public static async Task SecondMiddleware(HttpContext context)
        {
            await context.Response.WriteAsync("These is Second Middleware");
        }
    }
}
