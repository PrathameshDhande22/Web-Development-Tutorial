using Microsoft.AspNetCore.Razor.TagHelpers;
using NotesManager.Domain.Constants;
using NotesManager.Domain.Enums;

namespace NotesManager.MVC.TagHelpers
{
    // Create the class name with ending as the TagHelper extending the TAgHelper class
    /// <summary>
    /// Status badge tag helper
    /// </summary>
    [HtmlTargetElement("status-badge")] // Creating the new tag
    public class StatusBadgeTagHelper : TagHelper
    {
        // Define the public property as the Status
        [HtmlAttributeName("status")] // Specifying the attribute name
        public NoteStatus Status { get; set; }

        // Override these method for processing the custom tag logic
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            // Set the tagname
            output.TagName = "span";

            (string label, string color) = CategoryConstants.StatusMapping[Status];

            output.TagMode = TagMode.StartTagAndEndTag;

            // Set the html content
            output.Content.SetContent(label);

            // Set the attributes
            output.Attributes.SetAttribute("class", $"{color} px-2 py-1");
        }
    }
}
