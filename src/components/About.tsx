import { CheckCircle, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/5025641/pexels-photo-5025641.jpeg" 
                alt="Transport company staff"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-xs">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium text-gray-800">{t.about.locations.title}</span>
              </div>
              <p className="text-sm text-gray-600">{t.about.locations.description}</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t.about.description}
            </p>
            
            <div className="space-y-4">
              {t.about.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-medium text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-2">{t.about.invoice.title}</h3>
              <p className="text-gray-600">{t.about.invoice.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;