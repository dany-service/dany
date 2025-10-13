import { Globe } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'ar' : 'fr';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 left-6 bg-blue-600 text-white px-3 py-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50 flex items-center gap-2"
      title="Change language / تغيير اللغة"
      style={{ direction: 'ltr' }}
    >
      <Globe size={18} />
      <span className="font-medium text-sm">
        {i18n.language === 'fr' ? 'AR' : 'FR'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;
