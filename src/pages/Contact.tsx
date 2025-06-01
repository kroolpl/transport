import React from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppWidget';
import { LanguageProvider } from '../contexts/LanguageContext';

function ContactPage() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-20">
          <Contact />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default ContactPage;