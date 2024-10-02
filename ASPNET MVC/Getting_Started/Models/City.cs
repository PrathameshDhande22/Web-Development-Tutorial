using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Getting_Started.Models
{
    public class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public bool isSelected { get; set; }

    }

    public class Cities
    {
        public List<City> ListOfCity
        {
            get
            {
                return new List<City>
            {
            new City { Id = 1, Name = "New York",isSelected=true },
            new City { Id = 2, Name = "Los Angeles" },
            new City { Id = 3, Name = "Chicago" },
            new City { Id = 4, Name = "Houston" },
            new City { Id = 5, Name = "Phoenix" },
            new City { Id = 6, Name = "Philadelphia" },
            new City { Id = 7, Name = "San Antonio" },
            new City { Id = 8, Name = "San Diego" }
                };
            }
        }
    }
}