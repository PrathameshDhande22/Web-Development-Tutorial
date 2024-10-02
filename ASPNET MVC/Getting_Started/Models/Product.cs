using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace Getting_Started.Models
{
    public class Product
    {
        [ScaffoldColumn(false)]// scaffolding the column
        public int ProductId { get; set; }
        [DisplayName("Seller Name")] // specifying the column name as Seller Name
        public string ProductSellerName { get; set; }
        [Display(Name = "Price")] // Specifying the column name using Display Attribute
        [DataType(DataType.Currency)] // specifying the datatype as currency
        public decimal ProductPrice { get; set; }
        public int ProductQuantity { get; set; }
        // ApplyFormatinEditMode should be enabled to apply the formatted string in the template
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-ddTHH:mm}", ApplyFormatInEditMode = true)] // How the data is showed to the end user.
        public DateTime? ProductAddedDate { get; set; }
        public string ProductDescription { get; set; }
        public int ProductWarrantyYears { get; set; }
    }
}