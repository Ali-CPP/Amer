# 🚀 Deployment Guide

This guide will walk you through setting up the GitHub repository and deploying the Construction Safety Survey application to Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- Git installed on your local machine

## 🗂️ Step 1: Create GitHub Repository

### Option A: Create New Repository

1. **Go to GitHub:**
   - Visit [github.com](https://github.com)
   - Sign in to your account

2. **Create New Repository:**
   - Click the "+" icon in the top right
   - Select "New repository"
   - Repository name: `construction-safety-survey`
   - Description: `A comprehensive safety survey application with C# console backend and modern web frontend`
   - Make it **Public** (for free Vercel deployment)
   - Check "Add a README file"
   - Click "Create repository"

### Option B: Fork Existing Repository

1. **Fork the repository:**
   - Visit the original repository
   - Click "Fork" button
   - Select your account
   - Repository will be copied to your account

## 💻 Step 2: Upload Your Code

### Using Git Commands

1. **Clone your repository:**
   ```bash
   git clone https://github.com/yourusername/construction-safety-survey.git
   cd construction-safety-survey
   ```

2. **Copy your project files:**
   - Copy all your project files into this directory
   - Ensure all files are in the root directory

3. **Add files to Git:**
   ```bash
   git add .
   git commit -m "Initial commit: Construction Safety Survey application"
   git push origin main
   ```

### Using GitHub Web Interface

1. **Upload files:**
   - Go to your repository on GitHub
   - Click "Add file" → "Upload files"
   - Drag and drop all your project files
   - Add commit message: "Initial commit: Construction Safety Survey application"
   - Click "Commit changes"

## 🌐 Step 3: Deploy to Vercel

### Automatic Deployment

1. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub

2. **Import Project:**
   - Click "New Project"
   - Select "Import Git Repository"
   - Find and select your `construction-safety-survey` repository
   - Click "Import"

3. **Configure Project:**
   - Project Name: `construction-safety-survey` (or your preferred name)
   - Framework Preset: **Other** (or leave as default)
   - Root Directory: `./` (leave as default)
   - Build Command: Leave empty (not needed for static files)
   - Output Directory: Leave empty (not needed for static files)
   - Install Command: Leave empty (not needed for static files)

4. **Deploy:**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your app will be live at: `https://your-project-name.vercel.app`

### Manual Deployment (Alternative)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project? No
   - Project name: construction-safety-survey
   - Directory: ./
   - Override settings? No

## 🔧 Step 4: Configure Custom Domain (Optional)

1. **Add Custom Domain:**
   - Go to your Vercel dashboard
   - Select your project
   - Go to "Settings" → "Domains"
   - Add your custom domain

2. **Configure DNS:**
   - Follow Vercel's DNS configuration instructions
   - Update your domain provider's DNS settings

## 🔄 Step 5: Set Up GitHub Actions (Optional)

For automated deployment on every push:

1. **Get Vercel Tokens:**
   - Go to Vercel dashboard → Settings → Tokens
   - Create a new token
   - Copy the token

2. **Add Repository Secrets:**
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Add the following secrets:
     - `VERCEL_TOKEN`: Your Vercel token
     - `ORG_ID`: Your Vercel organization ID
     - `PROJECT_ID`: Your Vercel project ID

3. **Enable GitHub Actions:**
   - The workflow file is already included
   - Actions will run automatically on pushes to main branch

## 📱 Step 6: Test Your Deployment

1. **Test the Web Application:**
   - Visit your Vercel URL
   - Complete a test survey
   - Verify report download works

2. **Test Console Application:**
   - Clone the repository locally
   - Run `dotnet build` and `dotnet run`
   - Verify console application works

## 🎯 Step 7: Update Documentation

1. **Update README.md:**
   - Replace `yourusername` with your actual GitHub username
   - Update the live demo URL
   - Update any other personal information

2. **Update Links:**
   - Update GitHub badges in README
   - Update deployment links
   - Update any other references

## 🔍 Troubleshooting

### Common Issues

**"Build failed on Vercel"**
- Check that all files are in the root directory
- Ensure `vercel.json` is present
- Verify no build dependencies are missing

**"Page not found"**
- Check that `index.html` is in the root directory
- Verify `vercel.json` routing configuration
- Check Vercel deployment logs

**"GitHub Actions failing"**
- Verify all secrets are set correctly
- Check that the workflow file is in `.github/workflows/`
- Ensure repository has proper permissions

### Getting Help

- 📧 Create an issue on GitHub
- 📖 Check Vercel documentation
- 🔧 Review deployment logs in Vercel dashboard

## 🎉 Success!

Your Construction Safety Survey application is now:
- ✅ Hosted on GitHub
- ✅ Deployed on Vercel
- ✅ Available worldwide
- ✅ Automatically updated on pushes

**Live URL:** `https://your-project-name.vercel.app`

## 📈 Next Steps

1. **Share your application:**
   - Share the live URL with colleagues
   - Add to your portfolio
   - Promote on social media

2. **Customize further:**
   - Add your company branding
   - Customize survey questions
   - Add additional features

3. **Monitor usage:**
   - Check Vercel analytics
   - Monitor GitHub repository activity
   - Gather user feedback

---

**Congratulations! Your application is now live and ready for use! 🚀**
