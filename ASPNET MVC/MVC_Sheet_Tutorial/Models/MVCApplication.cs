using System.Data.Entity;

namespace MVC_Sheet_Tutorial.Models.Context
{
    public partial class MVCApplication : DbContext
    {
        public MVCApplication()
            : base("name=MVCApplication")
        {

        }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<Student> Students { get; set; }

        // Tables required for Authentication
        public DbSet<LoginDetail> LoginDetails { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<RolesMapping> RoleMappings { get; set; }

        public virtual DbSet<Sample> Samples { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Ignore<StudentExtend>();
            modelBuilder.Ignore<ProductExtend>();
        }
    }
}
