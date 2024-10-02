namespace MVC_Sheet_Tutorial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class auth : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.LoginDetails",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Username = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.RolesMappings",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        RoleId_Id = c.Int(),
                        UserLogin_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Roles", t => t.RoleId_Id)
                .ForeignKey("dbo.LoginDetails", t => t.UserLogin_Id)
                .Index(t => t.RoleId_Id)
                .Index(t => t.UserLogin_Id);
            
            CreateTable(
                "dbo.Roles",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Rolename = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Address = c.String(),
                        City = c.String(),
                        ZipCode = c.Int(nullable: false),
                        Country = c.String(),
                        Phone = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.RolesMappings", "UserLogin_Id", "dbo.LoginDetails");
            DropForeignKey("dbo.RolesMappings", "RoleId_Id", "dbo.Roles");
            DropIndex("dbo.RolesMappings", new[] { "UserLogin_Id" });
            DropIndex("dbo.RolesMappings", new[] { "RoleId_Id" });
            DropTable("dbo.Users");
            DropTable("dbo.Roles");
            DropTable("dbo.RolesMappings");
            DropTable("dbo.LoginDetails");
        }
    }
}
