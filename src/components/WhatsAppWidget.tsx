import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WhatsAppWidget = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const { language } = useLanguage();

  const translations = {
    en: {
      title: 'Start a Conversation',
      subtitle: 'Hi! Send us a message, we\'ll reply as soon as possible.',
      placeholder: 'Type your message...',
      button: 'Start Chat',
      response: 'Typically replies within an hour'
    },
    pl: {
      title: 'Rozpocznij Rozmowę',
      subtitle: 'Cześć! Wyślij nam wiadomość, odpowiemy jak najszybciej.',
      placeholder: 'Wpisz swoją wiadomość...',
      button: 'Rozpocznij Czat',
      response: 'Zazwyczaj odpowiada w ciągu godziny'
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const phoneNumber = '+447754004767';
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 right-4 z-50 flex flex-col items-end"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="mb-4 w-[320px] rounded-xl bg-white shadow-2xl ring-1 ring-black/5"
              >
                {/* Header */}
                <div className="bg-[#25D366] p-4 rounded-t-xl">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-semibold text-lg">{t.title}</h3>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-lg"
                      aria-label="Close chat"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <p className="text-white/90 text-sm mt-1">{t.subtitle}</p>
                </div>

                {/* Chat Form */}
                <div className="bg-white p-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="bg-gray-50 rounded-xl p-3 ring-1 ring-black/5">
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t.placeholder}
                        className="w-full bg-transparent resize-none outline-none min-h-[100px] text-gray-700 placeholder-gray-500"
                        maxLength={1000}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{t.response}</span>
                      <button
                        type="submit"
                        disabled={!message.trim()}
                        className="bg-[#25D366] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#1ea952] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                      >
                        {t.button}
                        <Send size={16} />
                      </button>
                    </div>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:bg-[#1ea952] transition-colors relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open WhatsApp chat"
          >
            <MessageCircle size={24} className="relative z-10" />
            <div className="absolute inset-0 bg-white/20 rounded-full blur-xl -z-0" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppWidget;