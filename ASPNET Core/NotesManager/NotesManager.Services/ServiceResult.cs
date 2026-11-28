namespace NotesManager.Services
{
    public class ServiceResult<T>
    {
        public bool Success { get; set; }
        public bool ErrorOccured { get; set; }
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

        public static ServiceResult<T> Error(string message)
        {
            return new ServiceResult<T>()
            {
                ErrorOccured = true,
                Message = message,
                Success = false
            };
        }
    }
}
