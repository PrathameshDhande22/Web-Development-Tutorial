namespace MVC_Sheet_Tutorial.Models
{
    using System;
    using System.ComponentModel.DataAnnotations;

    [MetadataType(typeof(ProductMetaData))]
    public partial class Product
    {
        public int ProductId { get; set; }

        public string ProductSellerName { get; set; }

        public decimal ProductPrice { get; set; }

        public int ProductQuantity { get; set; }

        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}")]
        public DateTime ProductAddedDate { get; set; }

        public string ProductDescription { get; set; }

        public int ProductWarrantyYears { get; set; }
    }

    public class ProductMetaData
    {
        [Required(ErrorMessage = "product Seller name is required")]
        public string ProductSellerName { get; set; }

        [Required]
        public string ProductDescription { get; set; }
    }

    public class ProductExtend : Product
    {
        [Required(ErrorMessage ="user Type is required")]
        public string UserType { get; set; }
    }
}
