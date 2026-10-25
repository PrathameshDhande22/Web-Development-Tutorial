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

    // Can can even use these class based middleware creation by inheriting the IMiddleware interface
    public class CallNextMiddleware : IMiddleware
    {
        public async Task InvokeAsync(HttpContext context, RequestDelegate next)
        {
            await context.Response.WriteAsync("These is the middleware class based\n");
            await next(context);
        }
    }

    // defining the middleware using the delegate only
    public class DelegateCallMiddleware
    {
        private readonly RequestDelegate _requestdelegate;

        public DelegateCallMiddleware(RequestDelegate requestdelegate)
        {
            this._requestdelegate = requestdelegate;
        }

        public async Task InvokeAsync(HttpContext context)
        {

            await context.Response.WriteAsync("Using the Delegate MMiddleware\n");
            await _requestdelegate(context);
        }
    }
}
