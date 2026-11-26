using Microsoft.AspNetCore.Http;

namespace NotesManager.Services.Interfaces
{
    public interface IBlobService
    {
        public Task<bool> UploadAsync(IFormFile file, string key, string ContentType);
        public Task<bool> UploadAsync(Stream stream, string key, string ContentType);
        public Task<string> GetFileUrlAsync(string key);
        public Task<Stream?> DownloadFileAsync(string Key);
        public Task<bool> DeleteAsync(string Key);
    }
}
