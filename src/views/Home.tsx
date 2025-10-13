// src/Home.tsx
import React from 'react';
import '../i18n'; // IMPORTANT: resolves to src/i18n/index.ts
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      <LanguageSwitcher />
    </div>
  );
};

export default Home;
