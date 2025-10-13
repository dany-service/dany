import React from 'react';
import { Phone, Clock, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">{t('hero.subtitle')}</p>
            </div>

            <div className="flex flex-wrap gap-6">
              <div className="flex items-center space-x-2 text-green-600">
                <Shield size={20} />
                <span className="font-medium"> {t('hero.cta_Insured')}</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-600">
                <Clock size={20} />
                <span className="font-medium"> {t('hero.cta_available')}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                {t('hero.cta_quote')}
              </button>
              <button className="flex items-center justify-center space-x-2 border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors">
                <Phone size={20} />
                <span>{t('hero.cta_call')}</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <img src="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg" alt="Professional technician working" className="rounded-2xl shadow-2xl" />

            <div className="absolute -bottom-6 -left-6 rtl:-right-6 bg-white p-4 rounded-xl shadow-lg border text-center w-max max-w-xs">
              <div className="text-2xl font-bold text-blue-700">1+</div>
              <div className="text-sm text-gray-600"> {t('hero.cta_experience')}</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
