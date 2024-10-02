using System;
using System.Collections.Generic;

namespace MVC_Sheet_Tutorial.Models
{
    public class PagingViewModel
    {
        public IEnumerable<Product> Products { get; set; }
        public int PageCount => (int)Math.Ceiling((double)TotalProducts / PageSize);
        public int TotalProducts { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }

    }
}