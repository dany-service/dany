// src/Home.tsx
import React from 'react';
import '../i18n'; // IMPORTANT: resolves to src/i18n/index.ts
import Header from '../components/Header';

import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';
import OrderComponent from '../components/order';

const Order: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <OrderComponent />
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default Order;
