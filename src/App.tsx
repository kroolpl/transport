import { useEffect } from 'react';
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
import { motion, AnimatePresence } from 'framer-motion';


// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
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
        <AnimatePresence mode="wait">
          <motion.main
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.1
                }
              }
            }}
          >
            <motion.div variants={sectionVariants}>
              <Hero id="hero" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Services id="services" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <About id="about" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Route id="route" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <Testimonials id="testimonials" />
            </motion.div>
          </motion.main>
        </AnimatePresence>
        <Footer />
        <WhatsAppButton />
      </div>
    </LanguageProvider>
  );
}

export default App