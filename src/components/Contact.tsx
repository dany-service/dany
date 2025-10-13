import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    alert(t('contact.form.submit') + ' — ' + (t('contact.title') || ''));
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold mb-6">{t('contact.info.heading')}</h3>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Phone size={24} />
              </div>
              <div>
                <div className="font-semibold">{t('contact.info.hotline_label')}</div>
                <div className="text-2xl font-bold text-blue-400">
                  {t('contact.info.hotline_number')}
                </div>
                <div className="text-gray-400">
                  {t('contact.info.hotline_available')}
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                <Mail size={24} />
              </div>
              <div>
                <div className="font-semibold">{t('contact.info.email_label')}</div>
                <div className="text-lg">{t('contact.info.email_address')}</div>
                <div className="text-gray-400">{t('contact.info.email_response')}</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-600 p-3 rounded-lg">
                <MapPin size={24} />
              </div>
              <div>
                <div className="font-semibold">{t('contact.info.service_area_label')}</div>
                <div className="text-lg">{t('contact.info.service_area_text')}</div>
                <div className="text-gray-400">{t('contact.info.service_area_range')}</div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-600 p-3 rounded-lg">
                <Clock size={24} />
              </div>
              <div>
                <div className="font-semibold">{t('contact.info.hours_label')}</div>
                <div className="text-lg">{t('contact.info.hours_week')}</div>
                <div className="text-lg">{t('contact.info.hours_weekend')}</div>
                <div className="text-gray-400">{t('contact.info.hours_emergency')}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">
              {t('contact.form.heading')}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  name="first_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.fname') || ''}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
                                <input
                  name="last_name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.lname') || ''}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email') || ''}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phone') || ''}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </div>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message') || ''}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
              >
                {t('contact.form.submit')}
              </button>
            </form>

            <div className="mt-6 p-4 bg-blue-900 rounded-lg">
              <p className="text-center text-blue-200 text-sm">
                {t('contact.privacy_notice')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
