# 🚀 Portfolio Website - Süleyman Yiğit

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YigitSezenn/my-portfolio)

Dark & white monochrome portfolio website showcasing GitHub projects dynamically.

## ✨ Features

- 🎨 **Modern Design**: Clean, monochrome (dark & white) theme
- 🔄 **Dynamic GitHub Integration**: Real-time project data from GitHub API
- 📱 **Responsive**: Works perfectly on all devices
- ⚡ **Fast**: Built with React & FastAPI
- 🎯 **SEO Ready**: Optimized for search engines

## 🛠️ Tech Stack

**Frontend:**
- React 19
- TailwindCSS
- Shadcn UI Components
- Axios

**Backend:**
- FastAPI (Python)
- MongoDB (Database)
- GitHub REST API
- In-memory caching

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/YigitSezenn/my-portfolio.git
   cd my-portfolio
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   yarn install
   echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env
   yarn start
   ```

3. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   pip install -r requirements.txt
   echo "MONGO_URL=mongodb://localhost:27017" > .env
   echo "DB_NAME=portfolio" >> .env
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   ```

### Deploy to Vercel

**Read the full deployment guide:** [VERCEL_DEPLOY.md](./VERCEL_DEPLOY.md)

**Quick Deploy:**
1. Fork this repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your forked repository
4. Add environment variables:
   - `MONGO_URL`: Your MongoDB connection string
   - `DB_NAME`: portfolio
5. Deploy! 🚀

## 📁 Project Structure

```
my-portfolio/
├── frontend/          # React application
│   ├── src/
│   │   ├── components/    # React components
│   │   └── App.js         # Main app
│   └── package.json
├── backend/           # FastAPI application
│   ├── server.py      # Main server
│   └── requirements.txt
├── vercel.json        # Vercel deployment config
└── README.md
```

## 🌐 API Endpoints

- `GET /api/github/profile` - Get GitHub profile data
- `GET /api/github/repos` - Get GitHub repositories
- `GET /api/status` - Health check

## 📧 Contact

- **Email**: ysezenn@outlook.com
- **GitHub**: [@YigitSezenn](https://github.com/YigitSezenn)
- **LinkedIn**: [/suleymanyigit](https://www.linkedin.com/in/suleymanyigit)

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🙏 Credits

Built with ❤️ using [Emergent AI](https://emergent.sh)

---

**⭐ Star this repo if you like it!**
