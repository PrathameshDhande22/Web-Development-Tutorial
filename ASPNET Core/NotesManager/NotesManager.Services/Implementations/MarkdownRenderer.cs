using Markdig;

namespace NotesManager.Services.Implementations
{
    public static class MarkdownRenderer
    {
        private static readonly System.Text.RegularExpressions.Regex DisabledTaskListCheckbox = new(
            @"(<input\b(?=[^>]*\btype\s*=\s*[\""']checkbox[\""'])(?=[^>]*\bclass\s*=\s*[\""'][^\""']*\btask-list-item-checkbox\b[^\""']*[\""'])[^>]*?)\sdisabled(?:\s*=\s*(?:[\""'][^\""']*[\""']|[^\s>]+))?",
            System.Text.RegularExpressions.RegexOptions.IgnoreCase | System.Text.RegularExpressions.RegexOptions.Compiled);

        /// <summary>
        /// Converts the markdown string to the plain text string
        /// </summary>
        /// <param name="markdown">Markdown string</param>
        /// <returns>Markdown converted to plain text</returns>
        public static string ConvertToPlainText(string markdown)
        {
            return Markdown.ToPlainText(markdown);
        }

        public static string ConvertToHTML(string markdown)
        {
            try
            {
                var pipeline = new MarkdownPipelineBuilder()
                            .UseAdvancedExtensions()
                            .UseTaskLists()
                            .UseAbbreviations()
                            .UseAlertBlocks()
                            .UseAutoLinks()
                            .UseDefinitionLists()
                            .UseMathematics()
                            .UseMediaLinks()
                            .UsePipeTables()
                            .UseEmojiAndSmiley()
                            .UseGridTables()
                            .UseFigures()
                            .Build();


                var html = Markdown.ToHtml(markdown, pipeline);

                // Markdig disables task inputs by default. Enable only its task-list
                // checkboxes so users can interact with rendered task lists.
                return DisabledTaskListCheckbox.Replace(html, "$1");
            }
            catch (Exception ex)
            {
                return markdown;
            }
        }
    }
}
