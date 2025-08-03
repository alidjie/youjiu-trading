import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 支持的语言列表
export type Language = 'en' | 'fr' | 'de' | 'it' | 'es' | 'pt' | 'ar' | 'ru' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  supportedLanguages: Record<Language, string>;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// 支持的语言及其名称
export const supportedLanguages: Record<Language, string> = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
  it: 'Italiano',
  es: 'Español',
  pt: 'Português',
  ar: 'العربية',
  ru: 'Русский',
  ja: '日本語'
};

// 模拟IP检测语言 - 实际应用中应替换为真实IP检测
const detectLanguageByIP = (): Language => {
  // 这里使用随机语言模拟IP检测结果
  const languages = Object.keys(supportedLanguages) as Language[];
  return languages[Math.floor(Math.random() * languages.length)];
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // 初始化 - 从localStorage加载或检测语言
  useEffect(() => {
    const savedLang = localStorage.getItem('preferred_language') as Language;
    if (savedLang && supportedLanguages[savedLang]) {
      setLanguage(savedLang);
    } else {
      // 模拟IP检测语言
      const detectedLang = detectLanguageByIP();
      setLanguage(detectedLang);
    }
  }, []);

  // 当语言变化时保存到localStorage
  useEffect(() => {
    localStorage.setItem('preferred_language', language);
    // 更新HTML语言属性
    document.documentElement.lang = language;
    // 对RTL语言添加特殊处理
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, supportedLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
