import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import MapContainer from '../components/MapContainer';
import StatCard from '../components/StatCard';
import { motion } from 'framer-motion';

type SectionProps = {
  id?: string;
};

const Route = ({ id }: SectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id={id} className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t.route.title}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t.route.subtitle}
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-12 items-start mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <MapContainer />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* UK Card */}
            <div className="group bg-white rounded-3xl border border-blue-100 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-6 pb-4 flex items-center gap-4 border-b border-blue-50 bg-gradient-to-r from-blue-50 to-transparent">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center shadow-inner">
                  <span className="text-2xl">🇬🇧</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">{t.route.uk.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{t.route.uk.description}</p>
                
                <div className="space-y-4 mb-6">
                  {t.route.uk.cities.map((city, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-500 group-hover/item:scale-125 transition-transform"></div>
                      <span className="font-medium text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Route Popularity</span>
                    <span className="font-bold text-blue-600">78%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-700 ease-out"
                      style={{ width: '78%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Poland Card */}
            <div className="group bg-white rounded-3xl border border-red-100 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="p-6 pb-4 flex items-center gap-4 border-b border-red-50 bg-gradient-to-r from-red-50 to-transparent">
                <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center shadow-inner">
                  <span className="text-2xl">🇵🇱</span>
                </div>
                <h3 className="text-2xl font-bold text-red-900">{t.route.poland.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{t.route.poland.description}</p>
                
                <div className="space-y-4 mb-6">
                  {t.route.poland.cities.map((city, index) => (
                    <div key={index} className="flex items-center gap-3 group/item">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 group-hover/item:scale-125 transition-transform"></div>
                      <span className="font-medium text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-gray-700">Route Popularity</span>
                    <span className="font-bold text-red-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full transition-all duration-700 ease-out"
                      style={{ width: '92%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          <StatCard 
            value="10+" 
            label={t.route.stats.years} 
            color="from-blue-500 to-indigo-500"
          />
          <StatCard 
            value="5000+" 
            label={t.route.stats.deliveries} 
            color="from-green-500 to-teal-500"
          />
          <StatCard 
            value="<24h" 
            label={t.route.stats.avgTime} 
            color="from-amber-500 to-orange-500"
          />
          <StatCard 
            value="99.7%" 
            label={t.route.stats.successRate} 
            color="from-purple-500 to-pink-500"
          />
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xl text-gray-800 mb-8">{t.route.custom}</p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            {t.route.contactUs}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Route;