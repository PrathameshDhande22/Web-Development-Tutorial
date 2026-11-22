using Humanizer;
using Microsoft.AspNetCore.Razor.TagHelpers;

namespace NotesManager.MVC.TagHelpers
{
    // Creating the custom tag helper
    [HtmlTargetElement("time-ago")]
    public class TimeAgoTagHelper : TagHelper
    {
        [HtmlAttributeName("date")]
        public DateTime DateTime { get; set; }

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            output.TagName = "span";
            output.TagMode = TagMode.StartTagAndEndTag;

            // Applying the existing classes
            output.Attributes.TryGetAttribute("class", out var attributes);
            string existingClass = attributes?.Value?.ToString() ?? string.Empty;

            output.Attributes.SetAttribute("class", $"{existingClass} text-sm text-stone-400");
            string? humanDateTime = DateTime.Humanize(true);
            if (!string.IsNullOrWhiteSpace(humanDateTime))
            {
                output.Content.SetContent(humanDateTime);
            }
        }
    }
}
