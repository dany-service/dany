import React from 'react';
import { Sparkles, Shield, Trees } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const servicesData = [
  { icon: Sparkles, key: 'cleaning', available: true, image: 'https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Shield, key: 'security', available: false, image: 'https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=400' },
  { icon: Trees, key: 'gardening', available: false, image: 'https://images.pexels.com/photos/635279/pexels-photo-635279.jpeg?auto=compress&cs=tinysrgb&w=400' }
];

const Services: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('services.title')}</h2>
          <p className="text-xl text-gray-600">{t('services.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s, idx) => {
            const Icon = s.icon;
            const features = t(`services.${s.key}.features`, { returnObjects: true }) as string[];
            return (
              <div key={idx} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group ${!s.available ? 'opacity-80' : ''}`}>
                <div className="h-48 overflow-hidden relative">
                  <img src={s.image} alt={t(`services.${s.key}.title`)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  {!s.available && <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center"><span className="text-white text-xl font-bold">{t('services.coming_soon')}</span></div>}
                </div>

                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg ${s.available ? 'bg-blue-100' : 'bg-gray-200'}`}>
                      <Icon className={s.available ? 'text-blue-700' : 'text-gray-500'} size={24} />
                    </div>
                    <h3 className={`text-xl font-bold ${s.available ? 'text-gray-900' : 'text-gray-500'}`}>{t(`services.${s.key}.title`)}</h3>
                  </div>

                  <p className={`mb-4 leading-relaxed ${s.available ? 'text-gray-600' : 'text-gray-400'}`}>{t(`services.${s.key}.description`)}</p>

                  <ul className="space-y-2 mb-6">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <div className={`w-2 h-2 rounded-full mr-3 ${s.available ? 'bg-blue-600' : 'bg-gray-400'}`}></div>
                        <span className={s.available ? 'text-gray-600' : 'text-gray-400'}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-medium transition-colors ${s.available ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} disabled={!s.available}>
                    {t('services.learn_more')}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
