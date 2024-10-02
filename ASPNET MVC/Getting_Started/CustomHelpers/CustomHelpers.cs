using System.Web;
using System.Web.Mvc;
namespace Getting_Started.CustomHelpers
{
    // Creating the Custom Helper Method
    public static class CustomHelpers
    {
        public static HtmlString Image(this HtmlHelper htmlhelper, string url, string alt)
        {
            TagBuilder img = new TagBuilder("img");
            img.Attributes.Add("src", VirtualPathUtility.ToAbsolute(url));
            img.Attributes.Add("alt", alt);
            return new HtmlString(img.ToString(TagRenderMode.SelfClosing));
        }
    }
}