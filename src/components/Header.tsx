import { useState } from 'react';
import { Menu, X, Truck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Lukas Transport</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {t.nav.about}
            </button>
            <Link 
              to="/contact" 
              onClick={() => {
                window.scrollTo(0, 0);
                if (isMenuOpen) setIsMenuOpen(false);
              }}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </Link>
            <button 
              onClick={toggleLanguage}
              className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {language === 'en' ? 'PL' : 'EN'}
            </button>
            <Link 
              to="/contact" 
              className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              {t.nav.getQuote}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 border-t border-gray-100">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {t.nav.about}
            </button>
            <Link 
              to="/contact" 
              onClick={() => {
                window.scrollTo(0, 0);
                if (isMenuOpen) setIsMenuOpen(false);
              }}
              className="text-gray-700 hover:text-primary transition-colors"
            >
              {t.nav.contact}
            </Link>
            <div className="flex items-center justify-between pt-2">
              <button 
                onClick={() => {
                  toggleLanguage();
                  toggleMenu();
                }}
                className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {language === 'en' ? 'PL' : 'EN'}
              </button>
              <Link 
                to="/contact" 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
                onClick={toggleMenu}
              >
                {t.nav.getQuote}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;