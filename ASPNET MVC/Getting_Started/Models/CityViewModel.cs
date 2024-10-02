using System.Collections.Generic;
using System.Web.Mvc;

namespace Getting_Started.Models
{
    public class CityViewModel
    {

        public CityViewModel()
        {

            List<SelectListItem> list = new List<SelectListItem>();
            foreach (City city in new Cities().ListOfCity)
            {
                list.Add(new SelectListItem() { Text = city.Name, Value = city.Id.ToString() });
            }
            Cities = list;

        }
        public IEnumerable<SelectListItem> Cities { get; set; }
        public IEnumerable<string> SelectedCites { get; set; }
    }
}