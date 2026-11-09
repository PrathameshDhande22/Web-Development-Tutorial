# Notes and Document Manager

Demo: [Link](https://prathameshsystenics.github.io/notewell/index.html)

## Used Technology

1. [Icon Buddy](https://iconbuddy.com/) - For Icons
2. [TailwindCSS](https://tailwindcss.com/) - For Styling 
3. [DaisyUI](https://daisyui.com/) - For Components

## EF Migration
1. Create EF Migration
```bash
dotnet ef migrations add InitialCreate --project NotesManager.Data --startup-project NotesManager.Mvc
```

2. Update the Models with database
```bash
dotnet ef database update -p NotesManager.Mvc
```
