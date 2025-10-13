import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

interface OrderFormData {
  name: string;
  phone: string;
  date: string;
  service: string;
  location: string;
  email?: string;
  comment?: string;
}

const OrderComponent: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [orderData, setOrderData] = useState<OrderFormData>({
    name: '',
    phone: '',
    date: '',
    service: '',
    location: '',
    email: '',
    comment: ''
  });

  const [minDate, setMinDate] = useState<string>('');

  useEffect(() => {
    const now = new Date();
    const cutoff = 14; // 2 PM

    const min = new Date();
    if (now.getHours() >= cutoff) {
      min.setDate(min.getDate() + 2);
    } else {
      min.setDate(min.getDate() + 1);
    }

    setMinDate(min.toISOString().split('T')[0]);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    // Clear custom error when typing
    e.target.setCustomValidity('');
    setOrderData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleInvalid = (e: React.InvalidEvent<any>) => {
    const { name } = e.target;
    switch (name) {
      case 'name':
        e.target.setCustomValidity(t('order.form.name_required'));
        break;
      case 'phone':
        e.target.setCustomValidity(t('order.form.phone_required'));
        break;
      case 'date':
        e.target.setCustomValidity(t('order.form.date_required'));
        break;
      case 'service':
        e.target.setCustomValidity(t('order.form.service_required'));
        break;
      case 'location':
        e.target.setCustomValidity(t('order.form.location_required'));
        break;
      default:
        e.target.setCustomValidity('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log('Order submitted:', orderData);
    alert(t('order.form.submit_success'));

    setOrderData({
      name: '',
      phone: '',
      date: '',
      service: '',
      location: '',
      email: '',
      comment: ''
    });
  };

  return (
    <section
      id="order"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.5),transparent)]"></div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 pt-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-[1.3em] break-words text-center font-sans">
            {t('order.title')}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('order.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10"
        >
          <form onSubmit={handleSubmit} className="space-y-6" >
            {/* Name & Phone */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                value={orderData.name}
                onChange={handleChange}
                onInvalid={handleInvalid}
                placeholder={t('order.form.name') || ''}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
              />
              <input
                name="phone"
                value={orderData.phone}
                onChange={handleChange}
                onInvalid={handleInvalid}
                placeholder={t('order.form.phone') || ''}
                required
                className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
                border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
              />
            </div>

            {/* Email (Optional) */}
            <input
              name="email"
              type="email"
              value={orderData.email}
              onChange={handleChange}
              placeholder={t('order.form.email') || ''}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
              border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
            />

            {/* Date */}
            <input
              name="date"
              type="date"
              min={minDate}
              value={orderData.date}
              onChange={handleChange}
              onInvalid={handleInvalid}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white 
              border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
            />

            {/* Service Dropdown */}
            <select
              name="service"
              value={orderData.service}
              onChange={handleChange}
              onInvalid={handleInvalid}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white 
              border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
            >
              <option value="">{t('contact.form.service')}</option>
              <option value="deep">{t('contact.form.service_options.deep')}</option>
              <option value="normal">{t('contact.form.service_options.normal')}</option>
              <option value="other">{t('contact.form.service_options.other')}</option>
            </select>

            {/* Location */}
            <input
              name="location"
              value={orderData.location}
              onChange={handleChange}
              onInvalid={handleInvalid}
              placeholder={t('order.form.location') || ''}
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
              border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
            />

            {/* Comment (Optional) */}
            <textarea
              name="comment"
              value={orderData.comment}
              onChange={handleChange}
              placeholder={t('order.form.comment') || ''}
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 
              border border-gray-600 focus:border-blue-500 focus:outline-none transition-all resize-none"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg 
              font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
            >
              {t('order.form.submit')}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default OrderComponent;
