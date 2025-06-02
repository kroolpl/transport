import { useEffect } from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppWidget';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { motion } from 'framer-motion';
import { Phone, Mail, Clock } from 'lucide-react';

function ContactPage() {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-primary to-primary-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-pattern"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {t.contact.title}
              </h1>
              <p className="text-xl md:text-2xl opacity-90">
                {t.contact.subtitle}
              </p>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6 mt-12"
            >
              {/* Phone */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Phone className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">{t.contact.info.phone}</h3>
                </div>
                <p className="text-white/90">+44 7754 004767</p>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">{t.contact.info.email}</h3>
                </div>
                <p className="text-white/90">info@lukastransport.co.uk</p>
              </div>

              {/* Business Hours */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <Clock className="h-6 w-6" />
                  <h3 className="text-lg font-semibold">{t.contact.hours.title}</h3>
                </div>
                <p className="text-white/90">{t.contact.hours.weekdays}: 8:00 - 18:00</p>
                <p className="text-white/90">{t.contact.hours.saturday}: 9:00 - 15:00</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default ContactPage;