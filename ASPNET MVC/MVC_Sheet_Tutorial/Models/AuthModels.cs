using System.ComponentModel.DataAnnotations;

namespace MVC_Sheet_Tutorial.Models
{
    public class AuthModels
    {
    }

    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public int ZipCode { get; set; }
        public string Country { get; set; }
        public int Phone { get; set; }
    }


    public class LoginDetail
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Username is required", AllowEmptyStrings = false)]
        [StringLength(15, MinimumLength = 4, ErrorMessage = "Username must be 4 to 15 Characters")]
        public string Username { get; set; }

        [StringLength(15, MinimumLength = 4, ErrorMessage = "Password must be 4 to 15 Characters")]
        [Required(ErrorMessage = "Enter the Password Field", AllowEmptyStrings = false)]
        public string Password { get; set; }
    }

    public class Role
    {
        public int Id { get; set; }
        public Roles Rolename { get; set; }
    }


    public class RolesMapping
    {
        public int Id { get; set; }
        public Role RoleId { get; set; }
        public LoginDetail UserLogin { get; set; }
    }

    public enum Roles
    {
        Admin,
        Buyer,
        Seller
    }

}