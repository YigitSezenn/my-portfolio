# 🚀 Portfolio Website - Süleyman Yiğit

GitHub projelerinizi listeleyen, dark & white monochrome temalı portfolio web siteniz.

## 📋 İçindekiler
- [Gereksinimler](#gereksinimler)
- [Kurulum](#kurulum)
- [Çalıştırma](#çalıştırma)
- [Yapılandırma](#yapılandırma)

---

## 🛠️ Gereksinimler

Projeyi çalıştırmak için aşağıdaki yazılımların yüklü olması gerekir:

- **Node.js** (v16+) ve **Yarn** - [nodejs.org](https://nodejs.org/)
- **Python** (3.8+) - [python.org](https://www.python.org/)
- **MongoDB** - [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)
  - Alternatif: MongoDB Atlas (ücretsiz cloud) - [mongodb.com/atlas](https://www.mongodb.com/atlas)

---

## 📦 Kurulum

### 1. Projeyi Açın
Zip dosyasını indirip açtıktan sonra proje klasörüne gidin:
```bash
cd portfolio-yigitsezen
```

### 2. Frontend Kurulumu
```bash
cd frontend
yarn install
```

**Frontend .env dosyası oluşturun:**
`frontend/.env` dosyası içinde:
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### 3. Backend Kurulumu
```bash
cd ../backend

# Virtual environment oluşturun (önerilen)
python -m venv venv

# Virtual environment'ı aktifleştirin
# Mac/Linux:
source venv/bin/activate
# Windows:
venv\Scripts\activate

# Bağımlılıkları yükleyin
pip install -r requirements.txt
```

**Backend .env dosyası oluşturun:**
`backend/.env` dosyası içinde:
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
```

**MongoDB Atlas kullanıyorsanız:**
```
MONGO_URL=mongodb+srv://kullanici:sifre@cluster.mongodb.net/
DB_NAME=portfolio
```

### 4. MongoDB Kurulumu
- **Yerel MongoDB**: İndirip yükleyin ve çalıştırın
- **MongoDB Atlas**: Hesap oluşturun, cluster oluşturun ve connection string'i kopyalayın

---

## 🚀 Çalıştırma

### Terminal 1 - Backend
```bash
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```
✅ Backend: http://localhost:8001

### Terminal 2 - Frontend
```bash
cd frontend
yarn start
```
✅ Frontend: http://localhost:3000

---

## ⚙️ Yapılandırma

### GitHub API Entegrasyonu
Şu anda proje **mock data** kullanıyor. Gerçek GitHub projelerinizi göstermek için:

1. Backend'de GitHub API entegrasyonu yapılacak
2. `YigitSezenn` kullanıcı adıyla GitHub API'den projeler çekilecek
3. Frontend otomatik olarak gerçek verileri gösterecek

### Özelleştirme
- **İsim/Bilgiler**: `frontend/src/components/Hero.jsx`
- **Mock Projeler**: `frontend/src/mock.js`
- **Renkler**: `frontend/src/index.css` (monochrome tema)
- **Sosyal Medya Linkleri**: `frontend/src/components/Contact.jsx`

---

## 📁 Proje Yapısı

```
portfolio-yigitsezen/
├── frontend/              # React uygulaması
│   ├── src/
│   │   ├── components/    # React componentleri
│   │   ├── mock.js        # Mock data (geçici)
│   │   └── App.js         # Ana uygulama
│   ├── package.json
│   └── .env               # Frontend environment variables
├── backend/               # FastAPI uygulaması
│   ├── server.py          # Ana backend dosyası
│   ├── requirements.txt   # Python bağımlılıkları
│   └── .env               # Backend environment variables
└── README_TR.md           # Bu dosya
```

---

## 🐛 Sorun Giderme

### Port zaten kullanımda
```bash
# 3000 portu kullanımdaysa (Frontend)
PORT=3001 yarn start

# 8001 portu kullanımdaysa (Backend)
uvicorn server:app --host 0.0.0.0 --port 8002 --reload
```

### MongoDB bağlantı hatası
- MongoDB'nin çalıştığından emin olun
- `.env` dosyasındaki `MONGO_URL`'in doğru olduğunu kontrol edin

### Yarn bulunamadı
```bash
npm install -g yarn
```

---

## 🎨 Özellikler

✅ Dark & White monochrome tema
✅ Responsive tasarım
✅ Smooth scroll navigation
✅ GitHub proje kartları
✅ Skills kategorileri
✅ Sosyal medya linkleri
✅ Modern ve clean tasarım

---

## 📧 İletişim

- **GitHub**: [@YigitSezenn](https://github.com/YigitSezenn)
- **LinkedIn**: [/suleymanyigit](https://www.linkedin.com/in/suleymanyigit)

---

**Made with ❤️ by Emergent AI**
