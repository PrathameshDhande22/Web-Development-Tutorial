namespace NotesManager.Domain.Constants
{
    public static class NoteConstants
    {
        /// <summary>
        /// Default page size for pagination of notes. 
        /// This constant defines how many notes will be displayed per page in the application.
        /// </summary>
        public const int PageSize = 9;

        /// <summary>
        /// Name of the cookie used to store the notes view preference.
        /// </summary>
        public const string NotesViewCookieName = "NotesView";

        /// <summary>
        /// Key for the session variable that stores the last notes filter.
        /// </summary>
        public const string LastNotesFilterSessionKey = "LastNotesFilter";

        public const int RecentNoteCount = 5;
    }
}
