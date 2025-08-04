import { useContext } from 'react';
import { LanguageContext } from '@/contexts/LanguageContext';
import translations from '@/lib/translations';

export function useTranslation() {
  const { language } = useContext(LanguageContext) || { language: 'en' };

  const t = (key: string, variables?: Record<string, string | number>): string => {
    // 获取翻译文本，如果不存在则使用英文作为回退
    const translation = translations[language][key] || translations['en'][key] || key;
    
    // 替换变量
    if (variables) {
      return Object.entries(variables).reduce(
        (acc, [name, value]) => acc.replace(`{{${name}}}`, String(value)),
        translation
      );
    }
    
    return translation;
  };

  return { t, language };
}
