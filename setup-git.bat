@echo off
REM Construction Safety Survey - Git Setup Script (Windows)
REM This script helps you set up your Git repository and make the initial commit

echo 🏗️  Construction Safety Survey - Git Setup
echo ==========================================

REM Check if Git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Git is not installed. Please install Git first.
    echo Download from: https://git-scm.com/download/win
    pause
    exit /b 1
)

REM Check if we're in a Git repository
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
) else (
    echo ✅ Git repository already initialized
)

REM Add all files
echo 📝 Adding files to Git...
git add .

REM Check if there are any changes to commit
git diff --cached --quiet
if errorlevel 1 (
    echo 💾 Making initial commit...
    git commit -m "Initial commit: Construction Safety Survey application

- C# console application for safety surveys
- Modern web frontend with responsive design
- Vercel deployment configuration
- Comprehensive documentation
- MIT License"
    
    echo ✅ Initial commit completed!
) else (
    echo ℹ️  No changes to commit
)

REM Check if remote origin is set
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo 🌐 Please add your GitHub repository as remote origin:
    echo    git remote add origin https://github.com/yourusername/construction-safety-survey.git
    echo    git branch -M main
    echo    git push -u origin main
) else (
    echo 🌐 Remote origin already configured
    for /f "tokens=*" %%i in ('git remote get-url origin') do echo    Remote URL: %%i
)

echo.
echo 🎉 Setup complete! Next steps:
echo 1. Create a GitHub repository
echo 2. Add remote origin: git remote add origin ^<your-repo-url^>
echo 3. Push to GitHub: git push -u origin main
echo 4. Deploy to Vercel using the DEPLOYMENT_GUIDE.md
echo.
echo 📖 For detailed instructions, see DEPLOYMENT_GUIDE.md
pause
