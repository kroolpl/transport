import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import MapContainer from '../components/MapContainer';
import { motion } from 'framer-motion';

type SectionProps = {
  id?: string;
};

const Route = ({ id }: SectionProps) => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id={id} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.route.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.route.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[600px] bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <MapContainer />
          </motion.div>

          {/* Routes Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* UK Route */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl">🇬🇧</span>
                <h3 className="text-xl font-semibold text-gray-900">{t.route.uk.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{t.route.uk.description}</p>
              
              <div className="space-y-3 mb-6">
                {t.route.uk.cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600">Route Popularity</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '78%' }}></div>
                </div>
                <span className="text-sm font-medium text-blue-600">78%</span>
              </div>
            </div>

            {/* Poland Route */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl">🇵🇱</span>
                <h3 className="text-xl font-semibold text-gray-900">{t.route.poland.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{t.route.poland.description}</p>
              
              <div className="space-y-3 mb-6">
                {t.route.poland.cities.map((city, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                    <span className="text-gray-700">{city}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600">Route Popularity</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full">
                  <div className="h-2 bg-blue-600 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="text-sm font-medium text-blue-600">92%</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">10+</p>
            <p className="text-sm text-gray-600">{t.route.stats.years}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">5000+</p>
            <p className="text-sm text-gray-600">{t.route.stats.deliveries}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">&lt;24h</p>
            <p className="text-sm text-gray-600">{t.route.stats.avgTime}</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 mb-2">99.7%</p>
            <p className="text-sm text-gray-600">{t.route.stats.successRate}</p>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-800 mb-8">{t.route.custom}</p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {t.route.contactUs}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Route;