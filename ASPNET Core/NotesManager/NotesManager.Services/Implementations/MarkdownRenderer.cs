using Markdig;

namespace NotesManager.Services.Implementations
{
    public static class MarkdownRenderer
    {
        /// <summary>
        /// Converts the markdown string to the plain text string
        /// </summary>
        /// <param name="markdown">Markdown string</param>
        /// <returns>Markdown converted to plain text</returns>
        public static string ConvertToPlainText(string markdown)
        {
            return Markdown.ToPlainText(markdown);
        }
    }
}
