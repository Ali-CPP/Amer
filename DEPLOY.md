# 🚀 Quick Deployment Guide

## 📋 Prerequisites
- GitHub account
- Vercel account (free)

## 🗂️ Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com)
2. Click "New repository"
3. Name: `construction-safety-survey`
4. Make it **Public**
5. Click "Create repository"

## 💻 Step 2: Upload to GitHub
```bash
# Initialize Git (if not already done)
git init
git add .
git commit -m "Initial commit: Clean project structure"

# Add your repository
git remote add origin https://github.com/YOUR_USERNAME/construction-safety-survey.git
git branch -M main
git push -u origin main
```

## 🌐 Step 3: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your `construction-safety-survey` repository
5. Click "Deploy"

## ✅ Done!
Your app will be live at: `https://your-project-name.vercel.app`

## 🧪 Testing
- **Web Frontend:** Visit your Vercel URL
- **Console Backend:** Run `cd backend && dotnet run`

## 📁 Project Structure
```
├── frontend/          # Web application (deployed to Vercel)
├── backend/           # C# console application (local use)
├── vercel.json        # Vercel configuration
└── README.md          # Documentation
```
