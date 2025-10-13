import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-700"> <a href="/" >Dany</a></div>

          <nav className="hidden md:flex items-center gap-x-8">
            <a href="/#services" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.services')}</a>
            <a href="/#about" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.about')}</a>
            <a href="/#testimonials" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.reviews')}</a>
            <a href="/#contact" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.contact')}</a>
            <a href="/order" className="text-gray-600 hover:text-blue-700 transition-colors">
              {t('header.order')}
            </a>
          </nav>


          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-blue-600">
              <Phone size={18} />
              <span className="font-semibold">(212) 123-4567</span>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t('header.emergency')}
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.services')}</a>
              <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.about')}</a>
              <a href="#testimonials" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.reviews')}</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">{t('header.contact')}</a>
              <a href="/order" className="text-gray-600 hover:text-blue-700 transition-colors">
                {t('header.order')}
              </a>
              <div className="flex items-center space-x-2 text-blue-600 pt-4 border-t">
                <Phone size={18} />
                <span className="font-semibold">(212) 123-4567</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
