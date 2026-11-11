using Microsoft.AspNetCore.Html;
using Microsoft.AspNetCore.Mvc.Rendering;
using NotesManager.Domain.Enums;

namespace NotesManager.MVC.HtmlHelpers
{
    // Creating the extension method for the Status badge
    public static class StatusBadge
    {
        public static IHtmlContent Status(this IHtmlHelper htmlHelper, NoteStatus status, object? htmlAttributes = null)
        {
            // Creating the tag
            var tag = new TagBuilder("span");
            // Set the content to the span tag
            tag.InnerHtml.SetContent(Enum.GetName<NoteStatus>(status)!);
            // Adding the Css class to the tag
            tag.AddCssClass("p-3");
            tag.AddCssClass("rounded-xl");
            tag.AddCssClass("border border-gray-100");

            return tag;
        }
    }
}
