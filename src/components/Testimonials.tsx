import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials.list", { returnObjects: true }) as Array<any>;
  console.log(testimonials);


  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('testimonials.title')}</h2>
          <p className="text-xl text-gray-600">{t('testimonials.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-xl relative hover:shadow-lg transition-shadow duration-300">
              <div className="absolute -top-4 left-8 bg-blue-700 p-3 rounded-full"><Quote className="text-white" size={20} /></div>
              <div className="flex items-center space-x-1 mb-4 pt-4">
                {[...Array(item.rating)].map((_, i) => (<Star key={i} className="text-yellow-400 fill-current" size={20} />))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">"{item.text}"</p>
              <div className="border-t pt-4">
                <div className="font-bold text-gray-900">{item.name}</div>
                <div className="text-sm text-gray-600">{item.location}</div>
                <div className="text-sm text-blue-600 font-medium mt-1">{item.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
