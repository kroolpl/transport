import { useEffect, useState } from 'react';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

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

  const messages = {
    en: {
      title: "Lukas Transport",
      subtitle: "Typically replies within an hour",
      placeholder: "Type a message..."
    },
    pl: {
      title: "Lukas Transport",
      subtitle: "Zazwyczaj odpowiada w ciągu godziny",
      placeholder: "Napisz wiadomość..."
    }
  };

  // Subtle wiggle animation that runs every 30 seconds
  const wiggleAnimation = {
    rotate: [0, -5, 5, -5, 5, -3, 3, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatDelay: 30,
      ease: "easeInOut"
    }
  };

  // Smooth spring animation for entry/exit
  const springConfig = {
    type: "spring",
    stiffness: 300,
    damping: 25
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-4 right-4 z-50"
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            ...wiggleAnimation
          }}
          exit={{ 
            opacity: 0, 
            y: 20, 
            scale: 0.9,
            transition: { duration: 0.2 }
          }}
          transition={springConfig}
        >
          <WhatsAppWidget
            phoneNumber="+447754004767"
            message="Hello! 👋 How can we help you today?"
            companyName={messages[language].title}
            replyTimeText={messages[language].subtitle}
            inputPlaceHolder={messages[language].placeholder}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;