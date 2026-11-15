namespace NotesManager.Domain.Exceptions
{
    public class AlreadyExistsException : Exception
    {
        public AlreadyExistsException(string Message) : base(Message)
        {

        }
    }
}
