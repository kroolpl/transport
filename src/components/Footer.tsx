import { Truck, Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const location = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Truck className="h-6 w-6 text-primary-light" />
              <span className="text-xl font-bold">Lukas Transport</span>
            </div>
            <p className="text-gray-400 mb-6">
              {t.footer.tagline}
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleScrollToSection('services')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.services}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleScrollToSection('about')} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.about}
                </button>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-lg mb-4">{t.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-white">🇬🇧 +44 7754 004767</p>
                  <p className="text-white">🇵🇱 +48 517 565 260</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-400 mt-0.5" />
                <a 
                  href="mailto:info@lukastransport.co.uk" 
                  className="text-white hover:text-primary-light transition-colors break-all"
                >
                  info@lukastransport.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lukas Transport. {t.footer.rights}
          </p>
          <div className="flex space-x-6">
            <Link 
              to="/privacy" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.footer.privacy}
            </Link>
            <Link 
              to="/terms" 
              className="text-gray-400 hover:text-white text-sm transition-colors"
            >
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;