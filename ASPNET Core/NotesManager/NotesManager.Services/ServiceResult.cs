namespace NotesManager.Services
{
    public class ServiceResult<T>
    {
        public bool Success { get; set; }
        public string? Message { get; set; } = string.Empty;
        public T? Data { get; set; }

        public static ServiceResult<T> Ok(T data, string message)
        {
            return new ServiceResult<T>()
            {
                Data = data,
                Message = message,
                Success = true
            };
        }

        public static ServiceResult<T> Fail(string message)
        {
            return new ServiceResult<T>()
            {
                Message = message,
                Success = false
            };
        }
    }
}
