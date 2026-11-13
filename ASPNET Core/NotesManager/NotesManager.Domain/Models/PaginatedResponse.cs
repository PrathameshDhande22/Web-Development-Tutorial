namespace NotesManager.Domain.Models
{
    // Paginated Generic Class to support multiple entity
    public class PaginatedResponse<T> where T : class
    {
        public int TotalPages { get => Convert.ToInt32(Math.Floor((double)TotalItems / PageSize)); }
        public int TotalItems { get; init; }
        public int PageSize { get; init; }
        public int CurrentPage { get; set; }
        public List<T> Data { get; set; } = new();
    }
}
