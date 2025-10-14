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

  const [errors, setErrors] = useState<Partial<OrderFormData>>({});
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
    const { name, value } = e.target;
    setOrderData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: '' })); // clear error when typing
  };

  // Helper to encode form data for Netlify
  const encode = (data: Record<string, string>) =>
    Object.keys(data)
      .map(
        key =>
          encodeURIComponent(key) + '=' + encodeURIComponent(data[key] ?? '')
      )
      .join('&');

  const validateForm = () => {
    const newErrors: Partial<OrderFormData> = {};
    if (!orderData.name) newErrors.name = t('order.form.error.name');
    if (!orderData.phone) newErrors.phone = t('order.form.error.phone');
    if (!orderData.date) newErrors.date = t('order.form.error.date');
    if (!orderData.service) newErrors.service = t('order.form.error.service');
    if (!orderData.location) newErrors.location = t('order.form.error.location');
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    const form = e.currentTarget;
    const data = {
      'form-name': form.getAttribute('name')!,
      ...orderData
    };

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data)
      });

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
    } catch (error) {
      alert(t('order.form.submit_error'));
    }
  };

  return (
    <section
      id="order"
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.5),transparent)]"></div>

      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-4 pt-2 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 leading-[1.1em] break-words text-center font-sans">
            {t('order.title')}
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('order.subtitle')}
          </p>
        </motion.div>

        <motion.form
          name="order"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10 space-y-6"
        >
          {/* Hidden Netlify inputs */}
          <input type="hidden" name="form-name" value="order" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          {/* Name & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                name="name"
                value={orderData.name}
                onChange={handleChange}
                placeholder={t('order.form.name') || ''}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                name="phone"
                value={orderData.phone}
                onChange={handleChange}
                placeholder={t('order.form.phone') || ''}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
              />
              {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Email */}
          <input
            name="email"
            type="email"
            value={orderData.email}
            onChange={handleChange}
            placeholder={t('order.form.email') || ''}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
          />

          {/* Date */}
          <div>
            <input
              name="date"
              type="date"
              min={minDate}
              value={orderData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
            />
            {errors.date && <p className="text-red-400 text-sm mt-1">{errors.date}</p>}
          </div>

          {/* Service Dropdown */}
          <div>
            <select
              name="service"
              value={orderData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
            >
              <option value="">{t('contact.form.service')}</option>
              <option value="deep">{t('contact.form.service_options.deep')}</option>
              <option value="normal">{t('contact.form.service_options.normal')}</option>
              <option value="other">{t('contact.form.service_options.other')}</option>
            </select>
            {errors.service && <p className="text-red-400 text-sm mt-1">{errors.service}</p>}
          </div>

          {/* Location */}
          <div>
            <input
              name="location"
              value={orderData.location}
              onChange={handleChange}
              placeholder={t('order.form.location') || ''}
              className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all"
            />
            {errors.location && <p className="text-red-400 text-sm mt-1">{errors.location}</p>}
          </div>

          {/* Comment */}
          <textarea
            name="comment"
            value={orderData.comment}
            onChange={handleChange}
            placeholder={t('order.form.comment') || ''}
            rows={4}
            className="w-full px-4 py-3 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 border border-gray-600 focus:border-blue-500 focus:outline-none transition-all resize-none"
          />

          {/* Submit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
          >
            {t('order.form.submit')}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default OrderComponent;
