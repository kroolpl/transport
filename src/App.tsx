import { useEffect, Suspense, lazy } from 'react';
// import Header from './components/Header'; // Keep Header eagerly loaded
import Header from './components/Header';
// import Hero from './components/Hero';
// import Services from './components/Services';
// import About from './components/About';
// import Route from './components/Route';
// import Testimonials from './components/Testimonials';
// import Footer from './components/Footer'; // Keep Footer eagerly loaded
import Footer from './components/Footer';
// import WhatsAppButton from './components/WhatsAppWidget'; // Keep WhatsAppButton eagerly loaded
import WhatsAppButton from './components/WhatsAppWidget';
import './styles/globals.css';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LazyHero = lazy(() => import('./components/Hero'));
const LazyServices = lazy(() => import('./components/Services'));
const LazyAbout = lazy(() => import('./components/About'));
const LazyRoute = lazy(() => import('./components/Route'));
const LazyTestimonials = lazy(() => import('./components/Testimonials'));

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
          <Suspense fallback={null}>
            <motion.div variants={sectionVariants}>
              <LazyHero id="hero" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <LazyServices id="services" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <LazyAbout id="about" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <LazyRoute id="route" />
            </motion.div>
            <motion.div variants={sectionVariants}>
              <LazyTestimonials id="testimonials" />
            </motion.div>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;