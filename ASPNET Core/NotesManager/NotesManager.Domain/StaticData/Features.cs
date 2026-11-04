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
        Icon="https://files.svgcdn.io/streamline/interface-edit-pencil-change-edit-modify-pencil-write-writing.svg",
        Name = "Easy formatting",
        Description = "Headings, bullet points and tick-box checklists from a simple toolbar. See how it looks as you type."
    },
    new Feature
    {
        Id = 2,
        Icon="https://files.svgcdn.io/ri/kanban-view-2.svg",
        Name = "To-do board",
        Description = "Drag notes from Draft to In progress to Completed, so you always know what is left to do."
    },
    new Feature
    {
        Id = 3,
        Icon="https://files.svgcdn.io/flowbite/clock-arrow-outline.svg",
        Name = "Undo any change",
        Description = "Every save is kept. See what changed and bring back an older version in one click."
    },
    new Feature
    {
        Id = 4,
        Icon="https://files.svgcdn.io/wpf/attach.svg",
        Name = "Receipts & photos",
        Description = "Keep tickets, receipts, warranties and photos with the note they belong to (PDF or image, up to 5 MB)."
    },
    new Feature
    {
        Id = 5,
        Icon="https://files.svgcdn.io/akar-icons/thunder.svg",
        Name = "Always in sync",
        Description = "Tick something off and every open window shows it straight away."
    },
    new Feature
    {
        Id = 6,
        Icon="https://files.svgcdn.io/zondicons/search.svg",
        Name = "Find it fast",
        Description = "Search every note, filter by category or status, and pin the ones you use most."
    }
};
        public static IReadOnlyList<FAQItem> FAQs = [
            new()
    {
        Id = 1,
        Question = "Is Notewell free?",
        Answer = "Yes. Notewell is completely free to use, with no ads and no subscription."
    },
    new()
    {
        Id = 2,
        Question = "Do I need to install anything?",
        Answer = "No. Notewell works in any modern web browser on your phone, tablet or computer."
    },
    new()
    {
        Id = 3,
        Question = "Where are my notes saved?",
        Answer = "Your notes are saved in your browser on your own device. You can download a backup at any time from your account settings."
    },
    new()
    {
        Id = 4,
        Question = "Can I get back something I changed by mistake?",
        Answer = "Yes. Every time you save, Notewell keeps the earlier version. Open a note's history to see what changed and bring an older version back."
    },
    new()
    {
        Id = 5,
        Question = "What can I attach to a note?",
        Answer = "Photos and PDF files up to 5 MB each, such as receipts, tickets, warranties or recipes."
    }

            ];
    }
}
