using Microsoft.AspNetCore.Razor.TagHelpers;

namespace NotesManager.MVC.TagHelpers
{
    // Creating the custom tag helper with multiple attribute name
    [HtmlTargetElement("category", TagStructure = TagStructure.NormalOrSelfClosing)]
    public class CategoryTagHelper : TagHelper
    {
        [HtmlAttributeName("category-name")]
        public string CategoryName { get; set; } = string.Empty;

        [HtmlAttributeName("color")]
        public string Color { get; set; } = "gray";

        // Overriding the method to generate the HTML output for the custom tag helper
        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            // setting the tag name
            output.TagName = "div";
            output.TagMode = TagMode.StartTagAndEndTag;

            // Get the existing attributes from the class
            output.Attributes.TryGetAttribute("class", out var existingClassAttribute);
            string? existingClass = existingClassAttribute?.Value?.ToString() ?? string.Empty;

            output.Attributes.SetAttribute("class", $"{existingClass} bg-{Color}-100 space-x-1 px-2");

            // Setting the inner HTML Content of the Tag helper
            output.Content.SetHtmlContent($@"
                <span class='bg-{Color}-500 inline-block w-2.5 h-2.5 rounded-[0.2em]'></span>
                <span class='text-{Color}-500 text-sm'>{CategoryName}</span>
            ");
        }
    }
}
