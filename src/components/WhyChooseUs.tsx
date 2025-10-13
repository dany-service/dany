import React from 'react';
import { Shield, Clock, Award, Users, Wrench, PhoneCall } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: Shield, titleKey: 'why.licensed.title', descKey: 'why.licensed.desc' },
    { icon: Clock, titleKey: 'why.emergency.title', descKey: 'why.emergency.desc' },
    { icon: Award, titleKey: 'why.quality.title', descKey: 'why.quality.desc' },
    { icon: Users, titleKey: 'why.team.title', descKey: 'why.team.desc' },
    { icon: Wrench, titleKey: 'why.equipment.title', descKey: 'why.equipment.desc' },
    { icon: PhoneCall, titleKey: 'why.free_estimate.title', descKey: 'why.free_estimate.desc' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('why.title')}</h2>
          <p className="text-xl text-gray-600">{t('why.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-blue-700" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t(f.titleKey)}</h3>
                <p className="text-gray-600 leading-relaxed">{t(f.descKey)}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-700 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold mb-2">1,500+</div><div className="text-blue-200">{t('why.satisfaction')}</div></div>
            <div><div className="text-4xl font-bold mb-2">15+</div><div className="text-blue-200">{t('why.cta_experience')}</div></div>
            <div><div className="text-4xl font-bold mb-2">24/7</div><div className="text-blue-200">{t('why.urgence')}</div></div>
            <div><div className="text-4xl font-bold mb-2">100%</div><div className="text-blue-200">{t('why.taux')}</div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
