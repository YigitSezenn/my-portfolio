import React, { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    nav: {
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact'
    },
    hero: {
      role: 'QA Engineer & Jr Mobile Developer',
      viewGithub: 'View GitHub',
      linkedin: 'LinkedIn',
      email: 'Email',
      publicRepos: 'Public Repositories',
      followers: 'GitHub Followers',
      technologies: 'Technologies'
    },
    about: {
      title: 'About Me',
      text: 'As a QA Engineer and Jr Mobile Developer, I am passionately committed to software quality. I have experience in test automation, mobile app development, and writing clean code. In every project, I prioritize user experience and aim to develop bug-free and high-performance applications.'
    },
    projects: {
      title: 'Projects',
      subtitle: 'A collection of my open-source projects and contributions from GitHub.',
      loading: 'Loading projects from GitHub...',
      noRepos: 'No public repositories found.'
    },
    skills: {
      title: 'Skills & Technologies',
      subtitle: 'Technologies and tools I work with to deliver quality software.'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Feel free to reach out for collaborations, opportunities, or just to say hello.'
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with React & FastAPI'
    }
  },
  tr: {
    nav: {
      projects: 'Projeler',
      skills: 'Yetenekler',
      contact: 'İletişim'
    },
    hero: {
      role: 'QA Mühendisi & Jr Mobil Geliştirici',
      viewGithub: 'GitHub Görüntüle',
      linkedin: 'LinkedIn',
      email: 'E-posta',
      publicRepos: 'Public Depo',
      followers: 'GitHub Takipçi',
      technologies: 'Teknoloji'
    },
    about: {
      title: 'Hakkımda',
      text: 'QA Engineer ve Jr Mobile Developer olarak yazılım kalitesine tutkuyla bağlıyım. Test otomasyonu, mobil uygulama geliştirme ve temiz kod yazma konularında deneyimliyim. Her projede kullanıcı deneyimini ön planda tutarak, hatasız ve performanslı uygulamalar geliştirmeyi hedefliyorum.'
    },
    projects: {
      title: 'Projeler',
      subtitle: 'GitHub\'dan açık kaynaklı projelerim ve katkılarımın bir koleksiyonu.',
      loading: 'GitHub\'dan projeler yükleniyor...',
      noRepos: 'Public depo bulunamadı.'
    },
    skills: {
      title: 'Yetenekler & Teknolojiler',
      subtitle: 'Kaliteli yazılım sunmak için kullandığım teknolojiler ve araçlar.'
    },
    contact: {
      title: 'İletişime Geçin',
      subtitle: 'İş birlikleri, fırsatlar veya sadece merhaba demek için bana ulaşabilirsiniz.'
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      builtWith: 'React & FastAPI ile yapıldı'
    }
  }
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'tr' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
