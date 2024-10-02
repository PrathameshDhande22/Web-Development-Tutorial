using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace MVC_Sheet_Tutorial.CustomHelper
{
    public enum ListHtml
    {
        UL,
        OL
    }

    public static class ListCreator
    {
        public static HtmlString CreateList(this HtmlHelper helper, ListHtml listhtml, IEnumerable<string> data)
        {
            string listtype = listhtml == ListHtml.UL ? "ul" : "ol";

            StringBuilder sb = new StringBuilder();
            sb.Append($"<{listtype}>");
            foreach (string listitem in data)
            {
                sb.Append($"<li>{listitem.ToString()}</li>");
            }
            sb.Append($"</{listtype}>");
            return MvcHtmlString.Create(sb.ToString());
        }
    }
}