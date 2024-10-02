namespace MVC_Sheet_Tutorial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;

    public partial class InitialCreate : DbMigration
    {
        public override void Up()
        {


            CreateTable(
                "dbo.Samples",
                c => new
                {
                    Id = c.Int(nullable: false, identity: true),
                    Name = c.String(nullable: false),
                    Description = c.String(),
                    URL = c.String(),
                    UserName = c.String(maxLength: 10),
                    Age = c.Int(nullable: false),
                })
                .PrimaryKey(t => t.Id);



        }

        public override void Down()
        {
            DropTable("dbo.Samples");
        }
    }
}
