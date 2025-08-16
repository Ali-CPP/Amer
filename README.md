# 🏗️ Construction Safety Survey Application

A comprehensive safety survey application with **C# console backend** and **modern web frontend** for construction companies. The application conducts daily safety and security surveys and saves the results to text files.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/construction-safety-survey)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

### 🖥️ Console Application (Backend)
- ✅ Interactive console-based safety survey
- ✅ Easily editable survey questions
- ✅ Automatic text file report generation
- ✅ Clean, formatted text output
- ✅ Support for Yes/No and text-based questions
- ✅ No external dependencies required

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

## 📁 Project Structure

```
construction-safety-survey/
├── frontend/                    # Web application
│   ├── index.html              # Main HTML file
│   ├── script.js               # JavaScript functionality
│   ├── web-server.js           # Local development server
│   └── package.json            # Node.js configuration
├── backend/                    # C# console application
│   ├── Program.cs              # Main application code
│   └── ConstructionSafetySurvey.csproj  # Project file
├── vercel.json                 # Vercel deployment configuration
├── .gitignore                  # Git ignore rules
├── LICENSE                     # MIT License
└── README.md                   # This file
```

## 📋 Prerequisites

### For Console Application
- .NET 8.0 or later

### For Web Frontend
- Node.js 14.0.0 or later (optional, for local development)
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 🛠️ Setup Instructions

### Console Application (Backend)

1. **Navigate to backend folder:**
   ```bash
   cd backend
   ```

2. **Build and run:**
   ```bash
   dotnet build
   dotnet run
   ```

### Web Frontend

#### Option 1: Direct Browser Access
1. **Open the frontend:**
   - Double-click `frontend/index.html` to open in your browser
   - Or drag `frontend/index.html` into your browser window

#### Option 2: Local Development Server
1. **Navigate to frontend folder:**
   ```bash
   cd frontend
   ```

2. **Start the server:**
   ```bash
   node web-server.js
   ```

3. **Access the application:**
   - Open your browser and go to `http://localhost:3000`

## 🎯 Quick Start

1. **Web Version (Recommended):** Visit the live demo or run locally
2. **Console Version:** Use the C# application for offline use

## 📝 Customizing Survey Questions

### Console Application
Edit `backend/Program.cs`:
```csharp
private static readonly List<SurveyQuestion> SurveyQuestions = new List<SurveyQuestion>
{
    new SurveyQuestion
    {
        Question = "Your custom question here?",
        Type = QuestionType.YesNo
    },
    // Add more questions...
};
```

### Web Frontend
Edit `frontend/script.js`:
```javascript
this.surveyQuestions = [
    {
        question: "Your custom question here?",
        type: "yesno"
    },
    // Add more questions...
];
```

## 📊 Sample Survey Questions

1. Have all workers completed their safety orientation for today?
2. Are all personal protective equipment (PPE) items in good condition?
3. Are all tools and equipment in safe working condition?
4. Are there any visible safety hazards on the construction site?
5. Describe any safety incidents or near-misses that occurred today:

## 🌐 Deployment

### Vercel Deployment (Automatic)

1. **Fork this repository**
2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Deploy automatically

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
   - Ensure you have write permissions
   - Check if the `SurveyReports` folder can be created

2. **Build errors**
   - Run `dotnet restore` then `dotnet build`
   - Ensure .NET 8.0 or later is installed

3. **Web server not starting**
   - Verify Node.js is installed: `node --version`
   - Check if port 3000 is available

## 🔒 Security Notes

- Survey reports are saved locally
- No external data transmission
- Web version runs entirely in the browser

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ for construction safety
- Uses modern web technologies
- Designed for workplace compliance

---

**Made with ❤️ for construction safety compliance**
