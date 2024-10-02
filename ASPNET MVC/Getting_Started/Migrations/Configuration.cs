namespace Getting_Started.Migrations
{
    using Getting_Started.Models;
    using MVCBusinessModels;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Getting_Started.Models.MVCDatabaseContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Getting_Started.Models.MVCDatabaseContext context)
        {
            //InsertStudent(context);
            //InsertEmployee(context);
            //InsertProducts(context);
        }

        private void InsertStudent(Getting_Started.Models.MVCDatabaseContext context)
        {
            Student student1 = new Student() { Id = 1, Name = "Prathamesh", City = "Panvel", Address = "Panvel near railway station", Standard = 4 };
            Student student2 = new Student() { Id = 2, Name = "Sneha", City = "Mumbai", Address = "Andheri West", Standard = 5 };
            Student student3 = new Student() { Id = 3, Name = "Rahul", City = "Navi Mumbai", Address = "Nerul East", Standard = 6 };
            Student student4 = new Student() { Id = 4, Name = "Aditi", City = "Thane", Address = "Thane near mall", Standard = 4 };
            Student student5 = new Student() { Id = 5, Name = "Kunal", City = "Vashi", Address = "Vashi near park", Standard = 7 };
            Student student6 = new Student() { Id = 6, Name = "Riya", City = "Dadar", Address = "Dadar West", Standard = 5 };
            Student student7 = new Student() { Id = 7, Name = "Arjun", City = "Chembur", Address = "Chembur colony", Standard = 6 };
            Student student8 = new Student() { Id = 8, Name = "Pooja", City = "Kalyan", Address = "Kalyan East", Standard = 4 };
            Student student9 = new Student() { Id = 9, Name = "Rakesh", City = "Kurla", Address = "Kurla station road", Standard = 7 };
            Student student10 = new Student() { Id = 10, Name = "Isha", City = "Bandra", Address = "Bandra Hill Road", Standard = 5 };

            context.Students.AddRange(new List<Student>() { student1, student2, student3, student4, student5, student6, student7, student8, student9, student10 });

            context.SaveChanges();
        }

        private void InsertEmployee(Getting_Started.Models.MVCDatabaseContext context)
        {
            context.Employees.AddRange(new ListofEmployee().Employees);
            context.SaveChanges();
        }

        private void InsertProducts(Getting_Started.Models.MVCDatabaseContext context)
        {
            List<Product> products = new List<Product>
        {
            new Product { ProductId = 1, ProductSellerName = "Seller A", ProductPrice = 150.50m, ProductQuantity = 10, ProductAddedDate = DateTime.Now, ProductDescription = "Product 1 Description", ProductWarrantyYears = 2 },
            new Product { ProductId = 2, ProductSellerName = "Seller B", ProductPrice = 250.99m, ProductQuantity = 5, ProductAddedDate = DateTime.Now, ProductDescription = "Product 2 Description", ProductWarrantyYears = 1 },
            new Product { ProductId = 3, ProductSellerName = "Seller C", ProductPrice = 399.75m, ProductQuantity = 15, ProductAddedDate = DateTime.Now, ProductDescription = "Product 3 Description", ProductWarrantyYears = 3 },
            new Product { ProductId = 4, ProductSellerName = "Seller D", ProductPrice = 99.99m, ProductQuantity = 20, ProductAddedDate = DateTime.Now, ProductDescription = "Product 4 Description", ProductWarrantyYears = 2 },
            new Product { ProductId = 5, ProductSellerName = "Seller E", ProductPrice = 159.45m, ProductQuantity = 8, ProductAddedDate = DateTime.Now, ProductDescription = "Product 5 Description", ProductWarrantyYears = 1 },
            new Product { ProductId = 6, ProductSellerName = "Seller F", ProductPrice = 599.89m, ProductQuantity = 12, ProductAddedDate = DateTime.Now, ProductDescription = "Product 6 Description", ProductWarrantyYears = 5 },
            new Product { ProductId = 7, ProductSellerName = "Seller G", ProductPrice = 75.30m, ProductQuantity = 25, ProductAddedDate = DateTime.Now, ProductDescription = "Product 7 Description", ProductWarrantyYears = 1 },
            new Product { ProductId = 8, ProductSellerName = "Seller H", ProductPrice = 89.60m, ProductQuantity = 30, ProductAddedDate = DateTime.Now, ProductDescription = "Product 8 Description", ProductWarrantyYears = 1 },
            new Product { ProductId = 9, ProductSellerName = "Seller I", ProductPrice = 300.00m, ProductQuantity = 7, ProductAddedDate = DateTime.Now, ProductDescription = "Product 9 Description", ProductWarrantyYears = 3 },
            new Product { ProductId = 10, ProductSellerName = "Seller J", ProductPrice = 420.75m, ProductQuantity = 18, ProductAddedDate = DateTime.Now, ProductDescription = "Product 10 Description", ProductWarrantyYears = 4 }
        };
            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}
