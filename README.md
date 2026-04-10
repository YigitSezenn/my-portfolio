# 🚀 Portfolio Website - Süleyman Yiğit

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YigitSezenn/my-portfolio)

Professional portfolio website with dynamic GitHub integration and multi-language support (TR/EN).

## ✨ Features

- 🌐 **Multi-language Support** - Turkish & English
- 🎨 **Light/Dark Theme** - Toggle between modes
- 📊 **GitHub API Integration** - Real-time project data
- 💫 **Modern Animations** - Framer Motion powered
- 📱 **Fully Responsive** - Works on all devices
- ⚡ **Fast & Optimized** - Built with React & FastAPI

---

## 🚀 Deploy to Vercel (Recommended)

### Quick Deploy (5 minutes)

1. **Fork this repository** to your GitHub account

2. **Go to [Vercel](https://vercel.com)**
   - Sign in with GitHub
   - Click "Add New..." → "Project"

3. **Import your forked repository**
   - Search for `my-portfolio`
   - Click "Import"

4. **Configure Project Settings**
   
   **Option 1: Automatic (Recommended)**
   - Vercel will auto-detect settings from `vercel.json`
   - Just click "Deploy"!
   
   **Option 2: Manual Configuration**
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: cd frontend && yarn install && yarn build
   Output Directory: frontend/build
   Install Command: yarn install
   ```

5. **Add Environment Variables**
   Click "Add Environment Variable" and add:
   
   **Variable 1:**
   ```
   Name: REACT_APP_BACKEND_URL
   Value: https://your-app-name.vercel.app
   ```
   (You can use the auto-generated Vercel URL or update after deployment)
   
   **Variable 2:**
   ```
   Name: MONGO_URL
   Value: mongodb+srv://username:password@cluster.mongodb.net/
   ```
   (Get this from MongoDB Atlas - see below)
   
   **Variable 3:**
   ```
   Name: DB_NAME
   Value: portfolio
   ```

6. **Click "Deploy"** 🎉

---

## 🗄️ MongoDB Atlas Setup (Required for Backend)

### Free MongoDB Database (3 minutes)

1. **Create Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for free

2. **Create Cluster**
   - Choose **FREE** tier (M0 Sandbox)
   - Select region closest to you
   - Click "Create Cluster"

3. **Create Database User**
   - Go to: Database Access → Add New Database User
   - Username: `portfoliouser`
   - Password: Create a strong password (save it!)
   - User Privileges: "Read and write to any database"
   - Click "Add User"

4. **Whitelist IP Address**
   - Go to: Network Access → Add IP Address
   - Click "Allow Access from Anywhere" (0.0.0.0/0)
   - Click "Confirm"

5. **Get Connection String**
   - Go to: Database → Connect → "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your actual password
   - Example: `mongodb+srv://portfoliouser:YourPassword123@cluster0.abc123.mongodb.net/`

---

## 🔄 Update Environment Variable After Deployment

After your first deployment:

1. **Get your Vercel URL** (e.g., `https://my-portfolio-abc123.vercel.app`)

2. **Update `REACT_APP_BACKEND_URL`**
   - Go to Vercel Dashboard → Settings → Environment Variables
   - Edit `REACT_APP_BACKEND_URL`
   - Set value to your actual Vercel URL
   - Click "Save"

3. **Redeploy**
   - Go to Deployments tab
   - Click "..." on latest deployment
   - Click "Redeploy"

---

## 💻 Local Development

### Prerequisites
- Node.js 16+ & Yarn
- Python 3.8+
- MongoDB (local or Atlas)

### Frontend Setup
```bash
cd frontend
yarn install
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env
yarn start
```
Frontend: http://localhost:3000

### Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
echo "MONGO_URL=mongodb://localhost:27017" > .env
echo "DB_NAME=portfolio" >> .env
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```
Backend: http://localhost:8001

---

## 📁 Project Structure

```
my-portfolio/
├── frontend/              # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── context/       # Theme & Language contexts
│   │   └── App.js         # Main app
│   └── package.json
├── backend/               # FastAPI application
│   ├── server.py          # Main server
│   └── requirements.txt
├── vercel.json            # Vercel config (if needed)
└── README.md
```

---

## 🌐 API Endpoints

- `GET /api/` - Health check
- `GET /api/github/profile` - GitHub profile data
- `GET /api/github/repos` - GitHub repositories

---

## 🎨 Customization

### Change GitHub Username
Edit `backend/server.py` line 60 and 90:
```python
def get_github_profile(username: str = "YourGitHubUsername"):
def get_github_repos(username: str = "YourGitHubUsername"):
```

### Update Personal Info
Edit translations in `frontend/src/context/LanguageContext.jsx`

### Modify Theme Colors
Edit `frontend/src/index.css` CSS variables

---

## 🔧 Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel dashboard
- Verify all environment variables are set
- Make sure `yarn.lock` is committed to git

### Backend Not Working
- Verify MongoDB connection string
- Check MONGO_URL includes password
- Ensure IP whitelist includes 0.0.0.0/0

### GitHub API Rate Limit
- Public API: 60 requests/hour
- Add caching (already implemented)
- Or add GitHub token for 5000 req/hour

---

## 📊 Tech Stack

**Frontend:**
- React 19
- TailwindCSS
- Framer Motion
- Shadcn UI
- Axios

**Backend:**
- FastAPI (Python)
- MongoDB
- GitHub REST API

---

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

---

## 📧 Contact

- **GitHub**: [@YigitSezenn](https://github.com/YigitSezenn)
- **LinkedIn**: [/suleymanyigit](https://www.linkedin.com/in/suleymanyigit)
- **Email**: ysezenn@outlook.com

---

## 📝 License

MIT License - Feel free to use for your own portfolio!

---

**⭐ Star this repo if you found it helpful!**

**Made with ❤️ using [Emergent AI](https://emergent.sh)**
