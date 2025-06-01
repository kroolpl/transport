import { Phone, Mail, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { motion } from 'framer-motion';

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: ''
    });
  };

  // Animation variants for staggered children
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.contact.subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-md p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold mb-6">{t.contact.form.title}</h3>
            <motion.form 
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={containerVariants} className="space-y-4">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-shadow duration-200"
                  />
                </motion.div>
                
                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-shadow duration-200"
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-shadow duration-200"
                    />
                  </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.service}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-shadow duration-200"
                  >
                    <option value="">{t.contact.form.selectService}</option>
                    <option value="packages">{t.services.items.packages.title}</option>
                    <option value="moving">{t.services.items.moving.title}</option>
                    <option value="buildingMaterials">{t.services.items.buildingMaterials.title}</option>
                    <option value="furniture">{t.services.items.furniture.title}</option>
                    <option value="vehicles">{t.services.items.vehicles.title}</option>
                    <option value="machinery">{t.services.items.machinery.title}</option>
                    <option value="doors">{t.services.items.doors.title}</option>
                  </select>
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary transition-shadow duration-200"
                  ></textarea>
                </motion.div>
                
                <motion.button
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-all duration-300"
                >
                  {t.contact.form.submit}
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="bg-primary text-white rounded-xl shadow-md p-6 md:p-8 mb-8"
            >
              <h3 className="text-xl font-semibold mb-6">{t.contact.info.title}</h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-6"
              >
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.info.phone}</p>
                    <p className="mt-1 text-white/80">🇬🇧 07754 004767</p>
                    <p className="text-white/80">🇵🇱 517565260</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.info.whatsapp}</p>
                    <p className="mt-1 text-white/80">🇬🇧 07754 004767</p>
                    <p className="text-white/80">🇵🇱 0048517565260</p>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-start space-x-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-medium">{t.contact.info.email}</p>
                    <p className="mt-1 text-white/80">Lukastranspodlasie@gmail.com</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-gray-100"
            >
              <h3 className="text-xl font-semibold mb-4">{t.contact.hours.title}</h3>
              <p className="text-gray-600 mb-4">{t.contact.hours.description}</p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-2"
              >
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span className="text-gray-600">{t.contact.hours.weekdays}</span>
                  <span className="font-medium">8:00 - 20:00</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span className="text-gray-600">{t.contact.hours.saturday}</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </motion.div>
                <motion.div variants={itemVariants} className="flex justify-between">
                  <span className="text-gray-600">{t.contact.hours.sunday}</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;