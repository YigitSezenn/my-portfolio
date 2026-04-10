# 🔐 MongoDB Connection Details

## MongoDB Credentials
- **Username:** ysezenn07_db_user
- **Password:** 7LQWRRjTOtF1BOcZ
- **Database:** portfolio

## Connection String

Aşağıdaki connection string'i Vercel environment variables'a ekleyeceksiniz:

```
mongodb+srv://ysezenn07_db_user:7LQWRRjTOtF1BOcZ@cluster0.xxxxx.mongodb.net/
```

**ÖNEMLİ:** Yukarıdaki connection string'de `cluster0.xxxxx` kısmını kendi MongoDB Atlas cluster URL'inizle değiştirmeniz gerekiyor.

## MongoDB Atlas'ta Cluster URL'ini Bulmak:

1. MongoDB Atlas Dashboard'a git
2. **Database** → **Connect** tıkla
3. **Connect your application** seç
4. Connection string'i kopyala
5. `<username>` ve `<password>` yerine yukarıdaki değerleri kullan

Tam connection string örneği:
```
mongodb+srv://ysezenn07_db_user:7LQWRRjTOtF1BOcZ@cluster0.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## Vercel Environment Variables

Vercel Dashboard → Settings → Environment Variables kısmına şunları ekle:

### Variable 1:
```
Name: MONGO_URL
Value: mongodb+srv://ysezenn07_db_user:7LQWRRjTOtF1BOcZ@cluster0.xxxxx.mongodb.net/
```

### Variable 2:
```
Name: DB_NAME
Value: portfolio
```

### Variable 3:
```
Name: REACT_APP_BACKEND_URL
Value: (Vercel deployment sonrası otomatik URL'inizi buraya yazın)
```

---

## Güvenlik Notu 🔒

Bu dosya hassas bilgiler içeriyor. Kesinlikle:
- ❌ GitHub'a push etmeyin
- ❌ Kimseyle paylaşmayın
- ✅ Sadece Vercel environment variables'da kullanın
