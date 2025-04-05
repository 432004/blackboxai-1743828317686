#!/bin/bash
echo "🚀 Preparing LearnHub LMS for deployment..."

# Set proper file permissions
echo "🔧 Setting file permissions..."
find . -type f -exec chmod 644 {} \;  # Files
find . -type d -exec chmod 755 {} \;  # Directories

# Validate required files
echo "🔍 Validating required files..."
required_files=(
  "index.html"
  "courses.js"
  "script.js"
  "auth.js"
  "netlify.toml"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    echo "❌ Error: Missing required file: $file"
    exit 1
  fi
done

echo "✅ All checks passed!"
echo "📦 Ready for deployment to Netlify or other hosting platforms"

# Optional: Create zip archive for alternative hosting
# echo "📦 Creating deployment package..."
# zip -r learnhub-deploy.zip . -x ".*" -x "__MACOSX"

echo "✨ Done! Push to GitHub and connect to Netlify to deploy"