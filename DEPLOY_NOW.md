# VERCEL DEPLOY - Adım Adım Talimatlar

## 🚀 Şimdi Yapmanız Gerekenler:

### 1️⃣ MongoDB Atlas Kurulumu (5 dakika)

**Neden gerekli?** Backend veritabanı için

1. https://www.mongodb.com/cloud/atlas/register adresine git
2. **Sign Up** ile ücretsiz hesap aç
3. **Create a Cluster** → **FREE** seç (M0 Sandbox)
4. Cluster adı: `portfolio` (veya istediğin isim)
5. Region: Yakın bir bölge seç (Europe - Frankfurt veya Istanbul)
6. **Create Cluster** tıkla

**Database User Oluştur:**
1. Security → Database Access
2. **Add New Database User**
3. Username: `portfoliouser`
4. Password: Güçlü bir şifre (kaydet!)
5. **Add User**

**Network Access:**
1. Security → Network Access
2. **Add IP Address**
3. **Allow Access from Anywhere** (0.0.0.0/0)
4. **Confirm**

**Connection String Al:**
1. Database → Connect
2. **Connect your application**
3. **Copy** connection string
4. Şuna benzer olacak:
   ```
   mongodb+srv://portfoliouser:<password>@cluster0.xxxxx.mongodb.net/
   ```
5. `<password>` yerine gerçek şifrenizi yazın

---

### 2️⃣ Vercel'e Deploy (3 dakika)

**A. Vercel Dashboard'a Git:**
1. https://vercel.com/yigitsezenns-projects adresine git
2. **Add New...** → **Project** tıkla

**B. GitHub Repo Import:**
1. **Import Git Repository**
2. `YigitSezenn/my-portfolio` reposunu bul ve **Import** tıkla

**C. Deploy Ayarları:**

**Framework Preset:** `Other`

**Root Directory:** `./` (boş bırak veya ./)

**Build Command:**
```bash
cd frontend && yarn install && yarn build
```

**Output Directory:**
```
frontend/build
```

**Install Command:**
```bash
yarn install
```

**D. Environment Variables Ekle:**

**Add** butonuna tıkla ve bunları ekle:

```
Name: MONGO_URL
Value: mongodb+srv://portfoliouser:SIFRENIZ@cluster0.xxxxx.mongodb.net/

Name: DB_NAME  
Value: portfolio

Name: REACT_APP_BACKEND_URL
Value: https://my-portfolio-yigitsezenns-projects.vercel.app
(deployment sonrası otomatik Vercel URL'inizi yazın)
```

**E. Deploy Et:**
1. **Deploy** butonuna tıkla
2. 2-3 dakika bekle
3. ✅ Deployment tamamlandı!

---

### 3️⃣ Deployment Sonrası

1. **URL'nizi kontrol edin:**
   - Vercel size otomatik URL verecek: `https://my-portfolio-xxx.vercel.app`

2. **Environment Variable Güncelle:**
   - Settings → Environment Variables
   - `REACT_APP_BACKEND_URL` değerini gerçek Vercel URL'inizle değiştirin
   - **Save**
   - Deployments → **Redeploy**

3. **Test Edin:**
   - Ana sayfa: `https://your-app.vercel.app`
   - API test: `https://your-app.vercel.app/api/github/profile`
   - Profil resminin yüklendiğini kontrol edin
   - GitHub projelerinin göründüğünü kontrol edin

---

## 🎉 Tamamlandı!

Portfolio artık canlı! 

- ✅ Frontend: React app
- ✅ Backend: FastAPI serverless
- ✅ GitHub API: Dinamik projeler
- ✅ Email: ysezenn@outlook.com

---

## 🔄 Sonraki Güncellemeler

Her GitHub push otomatik deploy tetikler:
```bash
git push origin main
# Vercel otomatik deploy eder!
```

---

## ❓ Sorun mu var?

1. **MongoDB bağlantı hatası:** Connection string'i kontrol et
2. **API çalışmıyor:** Environment variables'ları kontrol et
3. **Frontend yüklenmiyor:** Build logs'u Vercel dashboard'dan kontrol et

İhtiyacınız olursa yardım edebilirim! 🚀
