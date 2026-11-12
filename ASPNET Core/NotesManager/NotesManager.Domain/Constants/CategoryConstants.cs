using NotesManager.Domain.Enums;

namespace NotesManager.Domain.Constants
{
    public static class CategoryConstants
    {
        /// <summary>
        /// Status mapping to get its equivalent label and color. 
        /// </summary>
        public static readonly Dictionary<NoteStatus, (string label, string color)> StatusMapping = new()
        {
            {NoteStatus.Draft,("Draft","bg-gray-400")},
            {NoteStatus.InProgress,("In progress","bg-orange-500") },
            {NoteStatus.Completed,("Completed","bg-green-400") }
        };
    }
}
