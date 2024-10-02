namespace MVC_Sheet_Tutorial.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class new2 : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.LoginDetails", "Username", c => c.String(nullable: false, maxLength: 15));
            AlterColumn("dbo.LoginDetails", "Password", c => c.String(nullable: false, maxLength: 15));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.LoginDetails", "Password", c => c.String());
            AlterColumn("dbo.LoginDetails", "Username", c => c.String());
        }
    }
}
