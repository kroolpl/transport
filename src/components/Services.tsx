import { Package, Home, Hammer, Armchair as Chair, Car, Radio, DoorOpen as Door } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { motion } from 'framer-motion';

type SectionProps = {
  id?: string;
};

const services = [
  { icon: Package, key: 'packages' },
  { icon: Home, key: 'moving' },
  { icon: Hammer, key: 'buildingMaterials' },
  { icon: Chair, key: 'furniture' },
  { icon: Car, key: 'vehicles' },
  { icon: Radio, key: 'machinery' },
  { icon: Door, key: 'doors' }
];

const Services = ({ id }: SectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id={id} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.services.subtitle}
          </p>
        </motion.div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut"
                    }
                  }
                }}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:-translate-y-1"
              >
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4"
                >
                  <Icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">
                  {t.services.items[service.key as keyof typeof t.services.items].title}
                </h3>
                <p className="text-gray-600">
                  {t.services.items[service.key as keyof typeof t.services.items].description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-primary rounded-xl overflow-hidden shadow-lg"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {t.services.specialOffer.title}
              </h3>
              <p className="mb-6 text-white/90">
                {t.services.specialOffer.description}
              </p>
              <motion.a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.services.specialOffer.cta}
              </motion.a>
            </div>
            <div className="hidden md:block">
              <motion.img 
                src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg" 
                alt="Materials pickup service"
                className="w-full h-full object-cover"
                initial={{ scale: 1.2, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;