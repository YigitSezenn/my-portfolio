# Vercel Deployment Guide - Portfolio Website

## 🚀 Quick Deploy to Vercel

### Prerequisites
- GitHub repository: https://github.com/YigitSezenn/my-portfolio
- Vercel account
- MongoDB Atlas account (for database)

---

## 📋 Step-by-Step Deployment

### 1. MongoDB Setup (5 minutes)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create a free cluster
3. Create database user (username + password)
4. Whitelist IP: `0.0.0.0/0` (allow from anywhere)
5. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/`

### 2. Deploy to Vercel (3 minutes)

#### Option A: Import from GitHub (Recommended)
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select `YigitSezenn/my-portfolio`
4. Configure project:
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: cd frontend && yarn install && yarn build
   Output Directory: frontend/build
   Install Command: yarn install
   ```

#### Option B: Vercel CLI
```bash
npm i -g vercel
cd /path/to/my-portfolio
vercel
```

### 3. Environment Variables
Add these in Vercel Dashboard → Settings → Environment Variables:

```bash
# MongoDB Connection
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=portfolio

# Frontend (automatically set by Vercel)
REACT_APP_BACKEND_URL=https://your-app.vercel.app
```

**Important:** Replace:
- `username:password` with your MongoDB credentials
- `your-app` with your Vercel app name

### 4. Deploy!
Click "Deploy" button in Vercel dashboard.

---

## 🔧 Configuration Files Included

✅ `vercel.json` - Vercel deployment config
✅ `frontend/package.json` - Build scripts
✅ `backend/requirements.txt` - Python dependencies

---

## 📝 Post-Deployment

After deployment:
1. Visit: `https://your-app.vercel.app`
2. Test GitHub API: `https://your-app.vercel.app/api/github/profile`
3. Check projects load correctly

---

## 🐛 Troubleshooting

### Backend not working?
- Check MongoDB connection string in env vars
- Verify Python version (3.9+)
- Check Vercel deployment logs

### Frontend not loading?
- Verify build command ran successfully
- Check `REACT_APP_BACKEND_URL` env var
- Clear browser cache

### GitHub API rate limit?
- Add GitHub Personal Access Token (optional):
  ```
  GITHUB_TOKEN=your_token_here
  ```

---

## 📊 Expected Result

✅ Frontend: Live portfolio website
✅ Backend: Working API endpoints
✅ GitHub Integration: Real-time repo data
✅ MongoDB: Status checks storage
✅ Email: ysezenn@outlook.com displayed

---

## 🔄 Auto-Deploy

Every push to `main` branch will automatically redeploy to Vercel!

```bash
git push origin main
# Vercel will auto-deploy in ~2 minutes
```

---

## 🌐 Custom Domain (Optional)

1. Go to Vercel Dashboard → Settings → Domains
2. Add custom domain
3. Update DNS records as instructed

---

Need help? Contact: ysezenn@outlook.com
