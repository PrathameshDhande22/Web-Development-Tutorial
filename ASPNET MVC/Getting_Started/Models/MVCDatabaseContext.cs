using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using MVCBusinessModels;

namespace Getting_Started.Models
{
    public class MVCDatabaseContext : DbContext
    {
        public MVCDatabaseContext() : base("name=MVCTutorialDatabase")
        {
        }
        public DbSet<Student> Students { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Product> Products { get; set; }


    }



}