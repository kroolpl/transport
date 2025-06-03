import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  const translations = {
    en: {
      openChat: 'Open WhatsApp chat',
      defaultMessage: "Hello! I'm interested in your services."
    },
    pl: {
      openChat: 'Otwórz czat WhatsApp',
      defaultMessage: "Dzień dobry! Jestem zainteresowany/a Państwa usługami."
    }
  };

  const t = translations[language];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleOpenWhatsApp = () => {
    const phoneNumber = '+447754004767';
    const encodedMessage = encodeURIComponent(t.defaultMessage);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {/* Floating Button */}
          <motion.button
            onClick={handleOpenWhatsApp}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ea952] transition-colors relative"
            
            // Default pulse animation
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 4,
            }}
            
            whileHover={{ 
              scale: 1.15,
              transition: { type: 'spring', stiffness: 300, damping: 10 }
            }}
            whileTap={{ 
              scale: 0.9,
              transition: { type: 'spring', stiffness: 400, damping: 15 }
            }}
            
            aria-label={t.openChat}
          >
            <PhoneCall size={24} className="relative z-10" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppWidget;