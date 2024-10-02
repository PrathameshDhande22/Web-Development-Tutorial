using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace MVC_Sheet_Tutorial.Models
{
    public class Sample
    {
        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "Name Field is required", AllowEmptyStrings = false)]
        public String Name { get; set; }

        // Usage of Regular Expression
        [RegularExpression("^[^0-9]+$", ErrorMessage = "Don't Enter Numbers in the Description")]
        public string Description { get; set; }

        [DataType(DataType.Url, ErrorMessage = "Must be URL")]
        public string URL { get; set; }

        [StringLength(10, MinimumLength = 4, ErrorMessage = "Username must be between 4-10 characters")]
        [DisplayName("Username of the User")]
        [Remote("IsUserNameExist", "Home", ErrorMessage = "The username you enter already Exists", HttpMethod = "POST")] // applying the remote validation
        public string UserName { get; set; }

        [Range(18, 100, ErrorMessage = "Must be between 18-100")]
        public int Age { get; set; }



    }
}