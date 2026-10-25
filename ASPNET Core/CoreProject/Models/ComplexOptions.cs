using System.ComponentModel.DataAnnotations;

namespace CoreProject.Models
{
    // Strongly typed class for settings
    public class ComplexOptions
    {
        public string ApiKey { get; set; } = string.Empty;
        public float Threshold { get; set; }
        [Required]
        public string[] ActiveClient { get; set; } = [];
    }
}
