# Backend & Frontend Integration Contracts

## 🎯 Amaç
Mock data yerine gerçek GitHub API'den veri çekerek portfolio'yu dinamik hale getirmek.

---

## 📋 Yapılacaklar

### Backend (FastAPI)
1. **GitHub API Entegrasyonu**
   - GitHub REST API kullanarak kullanıcı bilgilerini çek
   - Kullanıcı repositories'lerini çek
   - Rate limiting için caching implementasyonu

2. **API Endpoints**
   - `GET /api/github/profile` - Kullanıcı profil bilgileri
   - `GET /api/github/repos` - Tüm public repositories

3. **Veri Yapısı**
   ```python
   # Profile Response
   {
     "name": "Süleyman Yiğit",
     "login": "YigitSezenn",
     "bio": "...",
     "avatar_url": "https://...",
     "public_repos": 12,
     "followers": 25,
     "html_url": "https://github.com/YigitSezenn",
     "email": "ysezenn@outlook.com"
   }
   
   # Repos Response
   [
     {
       "id": 123,
       "name": "repo-name",
       "description": "...",
       "html_url": "https://...",
       "language": "JavaScript",
       "stargazers_count": 10,
       "forks_count": 2,
       "topics": ["tag1", "tag2"]
     }
   ]
   ```

---

### Frontend (React)
1. **API Integration**
   - `mock.js` dosyasını SİL
   - API çağrıları için `axios` kullan
   - Loading states ekle
   - Error handling

2. **Değiştirilecek Componentler**
   - `Hero.jsx` - Profile API'den veri çek (avatar, name, stats, email)
   - `Projects.jsx` - Repos API'den veri çek

3. **Yeni State Management**
   ```javascript
   const [profile, setProfile] = useState(null);
   const [repos, setRepos] = useState([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   ```

---

## 🔄 Integration Flow

1. **App.js başlatılınca:**
   - `/api/github/profile` endpoint'ini çağır
   - `/api/github/repos` endpoint'ini çağır
   - Data'yı state'e kaydet
   - Child componentlere props ile aktar

2. **Hero.jsx:**
   - `profile.avatar_url` → GitHub profil resmi (dinamik)
   - `profile.name` → İsim
   - `profile.public_repos` → Repo sayısı
   - `profile.followers` → Takipçi sayısı
   - Email: `ysezenn@outlook.com` (hardcoded veya profile'dan)

3. **Projects.jsx:**
   - `repos` array'ini map et
   - Her repo için card oluştur
   - Mock data tamamen kaldırılacak

---

## 🔧 Backend Implementation Details

### Dependencies
- `requests` - GitHub API çağrıları için
- Zaten yüklü: requirements.txt'de var

### GitHub API Endpoints
- Profile: `https://api.github.com/users/YigitSezenn`
- Repos: `https://api.github.com/users/YigitSezenn/repos?sort=updated&per_page=100`

### Caching Strategy
- Simple in-memory cache (5 dakika)
- Rate limit: 60 request/hour (unauthenticated)
- Future: Redis cache eklenebilir

---

## ✅ Success Criteria

- [ ] Backend GitHub API'den veri çekiyor
- [ ] Frontend mock.js kullanmıyor
- [ ] Profil resmi dinamik olarak güncellensin
- [ ] Email: ysezenn@outlook.com gösteriliyor
- [ ] Gerçek GitHub projeleri listeleniyor
- [ ] Loading states çalışıyor
- [ ] Error handling var
- [ ] GitHub'a push edildi

---

## 📝 Notes

- GitHub API unauthenticated kullanımda rate limit: 60 req/hour
- Token kullanılırsa: 5000 req/hour (future enhancement)
- Cache kullanarak rate limit'i azaltıyoruz
