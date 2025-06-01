import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Route from './components/Route';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppWidget';
import { LanguageProvider } from './contexts/LanguageContext';
import './styles/globals.css';
import { useLocation } from 'react-router-dom';

type SectionProps = {
  id?: string;
  // ... other props if any ...
};

function App() {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero id="hero" />
          <Services id="services" />
          <About id="about" />
          <Route id="route" />
          <Testimonials id="testimonials" />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App