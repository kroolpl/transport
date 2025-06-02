import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import lukas1 from '../images/lukas1.webp';
import lukas2 from '../images/lukas2.webp';

type SectionProps = {
  id?: string;
};

const Hero = ({ id }: SectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const handleScrollToServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section id={id} className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary to-primary-dark overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
              >
                {t.hero.title}
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl md:text-2xl opacity-90 mb-8"
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleScrollToServices}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  {t.hero.exploreServices}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.button>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
                  >
                    {t.hero.getQuote}
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block"
            >
              <div className="relative">
                <motion.div 
                  initial={{ rotate: 1 }}
                  whileHover={{ rotate: 0 }}
                  className="rounded-lg overflow-hidden shadow-2xl transition-transform"
                >
                  <img 
                    src={lukas1}
                    alt="Transport truck"
                    className="w-full h-auto object-cover"
                    loading="eager"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </motion.div>
                <motion.div 
                  initial={{ rotate: -2 }}
                  whileHover={{ rotate: 0 }}
                  className="absolute -bottom-4 -left-4 rounded-lg overflow-hidden shadow-2xl transition-transform"
                >
                  <img 
                    src={lukas2}
                    alt="Packages being delivered"
                    className="w-64 h-auto object-cover"
                    loading="eager"
                    sizes="(min-width: 768px) 256px, 100vw"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 md:mt-24 py-6 px-6 md:px-8 bg-white/10 backdrop-blur-sm rounded-xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10+", label: t.hero.stats.years },
              { value: "5000+", label: t.hero.stats.deliveries },
              { value: "2", label: t.hero.stats.countries },
              { value: "24/7", label: t.hero.stats.support }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-white"
              >
                <motion.p 
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  {stat.value}
                </motion.p>
                <p className="text-sm mt-1 opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;