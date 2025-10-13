import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const services = t("footer.services.list", { returnObjects: true }) as string[];
  const links = t("footer.quick_links.list", { returnObjects: true }) as string[];
 
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-blue-400">Dany</div>
            <p className="text-gray-300 leading-relaxed">{t('footer.description')}</p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-blue-400 transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-blue-400 transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-blue-400 transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((s, i) => (<li key={i} className="hover:text-white transition-colors">{s}</li>))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.quick_links.title')}</h4>
            <ul className="space-y-2 text-gray-300">
              {links.map((l, i) => (<li key={i} className="hover:text-white transition-colors">{l}</li>))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3"><Phone size={18} className="text-blue-400" /><span>(212) 123-4567</span></div>
              <div className="flex items-center space-x-3"><Mail size={18} className="text-blue-400" /><span>info@dany.com</span></div>
              <div className="flex items-start space-x-3"><MapPin size={18} className="text-blue-400 mt-1" /><div><div>123 Service Street</div><div>Your City, ST 12345</div></div></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <div>© 2025 Dany. All rights reserved. Licensed, Bonded & Insured.</div>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Licensing</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
