#!/bin/bash

# Construction Safety Survey - Git Setup Script
# This script helps you set up your Git repository and make the initial commit

echo "🏗️  Construction Safety Survey - Git Setup"
echo "=========================================="

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a Git repository
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
else
    echo "✅ Git repository already initialized"
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Check if there are any changes to commit
if git diff --cached --quiet; then
    echo "ℹ️  No changes to commit"
else
    echo "💾 Making initial commit..."
    git commit -m "Initial commit: Construction Safety Survey application

- C# console application for safety surveys
- Modern web frontend with responsive design
- Vercel deployment configuration
- Comprehensive documentation
- MIT License"
    
    echo "✅ Initial commit completed!"
fi

# Check if remote origin is set
if git remote get-url origin &> /dev/null; then
    echo "🌐 Remote origin already configured"
    echo "Remote URL: $(git remote get-url origin)"
else
    echo "🌐 Please add your GitHub repository as remote origin:"
    echo "   git remote add origin https://github.com/yourusername/construction-safety-survey.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
fi

echo ""
echo "🎉 Setup complete! Next steps:"
echo "1. Create a GitHub repository"
echo "2. Add remote origin: git remote add origin <your-repo-url>"
echo "3. Push to GitHub: git push -u origin main"
echo "4. Deploy to Vercel using the DEPLOYMENT_GUIDE.md"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md"
