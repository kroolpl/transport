import { CheckCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { motion } from 'framer-motion';

type SectionProps = {
  id?: string;
};

const About = ({ id }: SectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg" 
                alt="Transport company staff"
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-xs"
            >
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium text-gray-800">{t.about.locations.title}</span>
              </div>
              <p className="text-sm text-gray-600">{t.about.locations.description}</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              {t.about.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              {t.about.description}
            </motion.p>
            
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
              className="space-y-4"
            >
              {t.about.benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: {
                        duration: 0.5
                      }
                    }
                  }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{t.about.invoice.title}</h3>
              <p className="text-gray-600">{t.about.invoice.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;