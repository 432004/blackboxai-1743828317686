# LearnHub LMS Deployment Guide

## Features
- User authentication (login/signup)
- Course browsing and enrollment
- Progress tracking dashboard
- Responsive design with Tailwind CSS
- Client-side data persistence

## Netlify Hosting Instructions

### Prerequisites
- GitHub account
- Netlify account (free tier available)

### Deployment Steps
1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/learnhub-lms.git
   git push -u origin main
   ```

2. **Netlify Setup**:
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Keep default settings (no build command needed)
   - Click "Deploy site"

3. **Post-Deployment**:
   - Your site will be live at: `https://your-site-name.netlify.app`
   - Enable "Auto Publishing" in Site settings
   - Set up a custom domain if needed

## Development
To run locally:
```bash
python3 -m http.server 8000
```
Then open: http://localhost:8000

## Project Structure
- `index.html` - Main landing page
- `auth.js` - Authentication logic
- `courses.js` - Course data
- `script.js` - Main application logic
- `login.html`/`signup.html` - Auth pages
- `dashboard.html` - User dashboard
- `course-details.html` - Course view
- `profile.html` - User profile
- `404.html` - Error page