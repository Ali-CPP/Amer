# Quick Setup Guide - Construction Safety Survey

## ✅ What You Have

Your C# console application is ready! Here's what was created:

- **Program.cs** - Complete application with survey logic and text file output
- **ConstructionSafetySurvey.csproj** - Project file (no external dependencies)
- **README.md** - Detailed documentation
- **.gitignore** - Prevents build files from being committed

## 🚀 Next Steps to Run the Application

### 1. Build and Run
```bash
dotnet build
dotnet run
```

### 2. Complete the Survey
- Answer the safety questions in the console
- The app will save your responses to a text file
- Reports are saved in the `SurveyReports` folder

## 📝 Customizing Survey Questions

Edit the questions at the top of `Program.cs`:

```csharp
private static readonly List<SurveyQuestion> SurveyQuestions = new List<SurveyQuestion>
{
    new SurveyQuestion
    {
        Question = "Your custom question here?",
        Type = QuestionType.YesNo  // or QuestionType.Text
    },
    // Add more questions...
};
```

## 🔧 Troubleshooting

- **"Failed to create report"** → Check file permissions and disk space
- **Build errors** → Run `dotnet restore` then `dotnet build`

## 📄 Output

The app creates text file reports with:
- Filename: "Daily_Safety_and_Security_Survey_YYYY-MM-DD_HH-mm-ss.txt"
- All questions and answers
- Professional formatting with headers and separators

## 🎯 Sample Questions Included

1. Have all workers completed their safety orientation for today?
2. Are all personal protective equipment (PPE) items in good condition?
3. Are all tools and equipment in safe working condition?
4. Are there any visible safety hazards on the construction site?
5. Describe any safety incidents or near-misses that occurred today:

---

**Ready to use!** Just run `dotnet run` and start the survey 🚀
