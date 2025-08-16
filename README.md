# 🏗️ Construction Safety Survey Application

A comprehensive safety survey application with both **C# console backend** and **modern web frontend** for construction companies. The application conducts daily safety and security surveys and saves the results to text files.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/construction-safety-survey)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🖥️ Console Application
- ✅ Interactive console-based safety survey
- ✅ Easily editable survey questions (configured at the top of Program.cs)
- ✅ Automatic text file report generation
- ✅ Clean, formatted text output
- ✅ Support for Yes/No and text-based questions
- ✅ No external dependencies or API setup required

### 🌐 Web Frontend
- ✅ Modern, responsive web interface
- ✅ Beautiful UI with smooth animations
- ✅ Progress tracking and navigation
- ✅ Review screen before submission
- ✅ Automatic report download
- ✅ Mobile-friendly design
- ✅ Real-time date/time display

## 🚀 Live Demo

**Try the web application:** [https://construction-safety-survey.vercel.app](https://construction-safety-survey.vercel.app)

## 📋 Prerequisites

### For Console Application
- .NET 8.0 or later
- No external accounts or APIs required

### For Web Frontend
- Node.js 14.0.0 or later (optional, for local development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🛠️ Setup Instructions

### Console Application

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/construction-safety-survey.git
   cd construction-safety-survey
   ```

2. **Build the application:**
   ```bash
   dotnet build
   ```

3. **Run the application:**
   ```bash
   dotnet run
   ```

4. **Using the Console Application:**
   - Answer safety survey questions in the console
   - Responses are saved to text files in the `SurveyReports` folder

### Web Frontend

#### Option 1: Direct Browser Access
1. **Open the frontend files:**
   - Double-click `index.html` to open in your browser
   - Or drag `index.html` into your browser window

#### Option 2: Local Development Server (Recommended)
1. **Start the web server:**
   ```bash
   node web-server.js
   ```

2. **Access the application:**
   - Open your browser and go to `http://localhost:3000`
   - The web interface will load automatically

3. **Using the Web Frontend:**
   - Click "Start Survey" to begin
   - Navigate through questions using the interface
   - Review your responses before submitting
   - Download the generated report

## 🎯 Quick Start

### For Users
1. **Web Version (Recommended):** Visit the live demo or run locally
2. **Console Version:** Use the C# application for offline use

### For Developers
1. **Fork the repository**
2. **Clone your fork**
3. **Make changes**
4. **Test locally**
5. **Submit a pull request**

## 📝 Customizing Survey Questions

### Console Application
Edit the questions at the top of the `Program.cs` file:

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

### Web Frontend
Edit the `script.js` file to change survey questions:

```javascript
this.surveyQuestions = [
    {
        question: "Your custom question here?",
        type: "yesno"  // or "text"
    },
    // Add more questions...
];
```

## 📊 Sample Survey Questions

The application comes with 5 sample safety questions:

1. Have all workers completed their safety orientation for today?
2. Are all personal protective equipment (PPE) items in good condition and being worn properly?
3. Are all tools and equipment in safe working condition?
4. Are there any visible safety hazards on the construction site?
5. Describe any safety incidents or near-misses that occurred today:

## 📄 Output

The application creates a text file report with:
- Filename: "Daily_Safety_and_Security_Survey_YYYY-MM-DD_HH-mm-ss.txt"
- Survey date and time
- All questions and answers in a clean, readable format
- Professional formatting with headers and separators

## 📁 File Structure

```
construction-safety-survey/
├── Program.cs                    # C# console application
├── ConstructionSafetySurvey.csproj  # .NET project file
├── SurveyReports/               # Generated reports folder (auto-created)
│   └── Daily_Safety_and_Security_Survey_*.txt  # Survey reports
├── index.html                   # Web frontend main page
├── styles.css                   # Frontend styling
├── script.js                    # Frontend JavaScript functionality
├── web-server.js                # Local development server
├── package.json                 # Node.js configuration
├── vercel.json                  # Vercel deployment configuration
├── .gitignore                   # Git ignore rules
├── sample_report.txt            # Example report format
├── FRONTEND_GUIDE.md            # Frontend-specific documentation
└── README.md                    # This file
```

## 🌐 Deployment

### Vercel Deployment (Automatic)

This repository is configured for automatic deployment on Vercel:

1. **Fork this repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your forked repository
   - Deploy automatically

3. **Custom Domain (Optional):**
   - Add your custom domain in Vercel dashboard
   - Configure DNS settings

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🔧 Troubleshooting

### Common Issues

1. **"Failed to create report"**
   - Ensure you have write permissions in the application directory
   - Check if the `SurveyReports` folder can be created

2. **Build errors**
   - Run `dotnet restore` then `dotnet build`
   - Ensure .NET 8.0 or later is installed

3. **Web server not starting**
   - Verify Node.js is installed: `node --version`
   - Check if port 3000 is available

### Error Messages

- **"Failed to create report"**: Check file permissions and disk space
- **"An error occurred"**: Check the console output for specific error details

## 🔒 Security Notes

- Survey reports are saved locally in the `SurveyReports` folder
- No external data transmission or cloud storage
- Reports contain only the survey responses and timestamps
- Web version runs entirely in the browser (no server-side processing)

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Contributing Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for construction safety
- Uses modern web technologies for better user experience
- Designed for workplace compliance and safety standards

## 📞 Support

If you have any questions or need support:

- 📧 Create an issue on GitHub
- 📖 Check the documentation in this README
- 🔧 Review the troubleshooting section

---

**Made with ❤️ for construction safety compliance**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/construction-safety-survey?style=social)](https://github.com/yourusername/construction-safety-survey)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/construction-safety-survey?style=social)](https://github.com/yourusername/construction-safety-survey)
[![GitHub issues](https://img.shields.io/github/issues/yourusername/construction-safety-survey)](https://github.com/yourusername/construction-safety-survey/issues)
