namespace Getting_Started.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class mvcdb3 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        ProductSellerName = c.String(),
                        ProductPrice = c.Decimal(nullable: false, precision: 18, scale: 2),
                        ProductQuantity = c.Int(nullable: false),
                        ProductAddedDate = c.DateTime(nullable: false),
                        ProductDescription = c.String(),
                        ProductWarrantyYears = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProductId);
            
           
        }
        
        public override void Down()
        {
            DropTable("dbo.Products");
        }
    }
}
