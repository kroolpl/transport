import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary to-primary-dark overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 bg-pattern"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                {t.hero.exploreServices}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-accent text-white font-medium rounded-md hover:bg-accent-dark transition-colors"
              >
                {t.hero.getQuote}
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl transform rotate-1 transition-transform hover:rotate-0">
                <img 
                  src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg" 
                  alt="Transport truck"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 rounded-lg overflow-hidden shadow-2xl transform -rotate-2 transition-transform hover:rotate-0">
                <img 
                  src="https://images.pexels.com/photos/2800121/pexels-photo-2800121.jpeg" 
                  alt="Packages being delivered"
                  className="w-64 h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 py-6 px-6 md:px-8 bg-white/10 backdrop-blur-sm rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="text-white">
              <p className="text-3xl md:text-4xl font-bold">10+</p>
              <p className="text-sm mt-1 opacity-80">{t.hero.stats.years}</p>
            </div>
            <div className="text-white">
              <p className="text-3xl md:text-4xl font-bold">5000+</p>
              <p className="text-sm mt-1 opacity-80">{t.hero.stats.deliveries}</p>
            </div>
            <div className="text-white">
              <p className="text-3xl md:text-4xl font-bold">2</p>
              <p className="text-sm mt-1 opacity-80">{t.hero.stats.countries}</p>
            </div>
            <div className="text-white">
              <p className="text-3xl md:text-4xl font-bold">24/7</p>
              <p className="text-sm mt-1 opacity-80">{t.hero.stats.support}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;