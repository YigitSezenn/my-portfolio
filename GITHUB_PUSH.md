# GitHub'a Push Etme Adımları

## 1. GitHub'da Yeni Repo Oluşturun
- GitHub'da yeni bir repository oluşturun (örn: `portfolio-website`)
- **Public** veya **Private** seçebilirsiniz
- README, .gitignore eklemeyin (boş repo olsun)

## 2. Projeyi Zip'ten Çıkarın
```bash
# Zip dosyasını indirip açtıktan sonra
cd portfolio-yigitsezen
```

## 3. Git'i Başlatın
```bash
# Git'i başlat
git init

# .gitignore dosyası oluştur
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
venv/
__pycache__/

# Environment files
.env
!.env.example

# Build files
build/
dist/
*.pyc

# IDE
.vscode/
.idea/
.DS_Store

# Logs
*.log
EOF

# Dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Portfolio website"
```

## 4. GitHub'a Push Edin
```bash
# GitHub repo adresinizi ekleyin (kendi username'inizi kullanın)
git remote add origin https://github.com/YigitSezenn/portfolio-website.git

# Main branch olarak değiştir
git branch -M main

# Push et
git push -u origin main
```

## Alternatif: SSH Kullanarak
```bash
git remote add origin git@github.com:YigitSezenn/portfolio-website.git
git branch -M main
git push -u origin main
```

---

✅ Artık projeniz GitHub'da!
