using NotesManager.Domain.Models.Home;

namespace NotesManager.Domain.StaticData
{
    public static class DataConstants
    {
        public static readonly List<Feature> Features = new()
{
    new Feature
    {
        Id = 1,
        Name = "Easy formatting",
        Description = "Headings, bullet points and tick-box checklists from a simple toolbar. See how it looks as you type."
    },
    new Feature
    {
        Id = 2,
        Name = "To-do board",
        Description = "Drag notes from Draft to In progress to Completed, so you always know what is left to do."
    },
    new Feature
    {
        Id = 3,
        Name = "Undo any change",
        Description = "Every save is kept. See what changed and bring back an older version in one click."
    },
    new Feature
    {
        Id = 4,
        Name = "Receipts & photos",
        Description = "Keep tickets, receipts, warranties and photos with the note they belong to (PDF or image, up to 5 MB)."
    },
    new Feature
    {
        Id = 5,
        Name = "Always in sync",
        Description = "Tick something off and every open window shows it straight away."
    },
    new Feature
    {
        Id = 6,
        Name = "Find it fast",
        Description = "Search every note, filter by category or status, and pin the ones you use most."
    }
};
    }
}
