using Amazon.S3;
using Amazon.S3.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using NotesManager.Services.Interfaces;

namespace NotesManager.Services.Implementations
{
    public class FileUploadService : IFileUploadService
    {
        private readonly ILogger<FileUploadService> logger;
        private readonly IAmazonS3 s3;

        private static string BucketName { get; set; } = string.Empty;

        public FileUploadService(
            ILogger<FileUploadService> logger,
            IAmazonS3 amazons3,
            IConfiguration configuration
        )
        {
            this.logger = logger;
            this.s3 = amazons3;

            // Get the Bucket Name from the configuration
            BucketName = configuration.GetValue<string>("AWS_BucketName") ?? string.Empty;
        }

        public async Task<bool> UploadAsync(Stream stream, string key, string ContentType)
        {
            PutObjectRequest putobjectRequest = new()
            {
                BucketName = BucketName,
                ContentType = ContentType,
                Key = key,
                InputStream = stream
            };

            logger.LogInformation("Uploading file Filepath={FilePath} to Amazon S3", key);

            try
            {
                var response = await s3.PutObjectAsync(putobjectRequest);

                // Check the status 
                if (response.HttpStatusCode != System.Net.HttpStatusCode.OK)
                {
                    logger.LogInformation("Something happened when uploading the file for key={Key} which returned the Status Code={StatusCode}", key, response.HttpStatusCode.ToString());
                    return false;
                }
                return true;
            }
            catch (AmazonS3Exception s3ex)
            {
                logger.LogError(s3ex, "Error Occured when uploading the file in {key}", key);
                return false;
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Error ocurred");
                return false;
            }
        }

        public Task<bool> UploadAsync(IFormFile file, string key, string ContentType)
        {
            using var stream = file.OpenReadStream();
            return UploadAsync(stream, key, ContentType);
        }
    }
}
