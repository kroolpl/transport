import { Menu, Phone, Users, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from 'react';

type NavigationProps = {
  onSectionClick: (id: string) => void;
};

const Navigation = ({ onSectionClick }: NavigationProps) => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleSectionClick = (id: string) => {
    setIsOpen(false); // Close sheet when navigating
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetQuoteClick = () => {
    setIsOpen(false); // Close sheet when clicking Get Quote
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <button
          onClick={() => handleSectionClick('services')}
          className="text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2"
        >
          <Wrench size={18} />
          {t.nav.services}
        </button>
        <button
          onClick={() => handleSectionClick('about')}
          className="text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2"
        >
          <Users size={18} />
          {t.nav.about}
        </button>
        <button
          onClick={() => handleSectionClick('contact')}
          className="text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2"
        >
          <Phone size={18} />
          {t.nav.contact}
        </button>
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

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button 
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-left">Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col space-y-4 mt-6">
            <button
              onClick={() => handleSectionClick('services')}
              className="text-left text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Wrench size={18} />
              {t.nav.services}
            </button>
            <button
              onClick={() => handleSectionClick('about')}
              className="text-left text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Users size={18} />
              {t.nav.about}
            </button>
            <button
              onClick={() => handleSectionClick('contact')}
              className="text-left text-gray-700 hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              <Phone size={18} />
              {t.nav.contact}
            </button>
            <div className="flex items-center justify-between pt-2">
              <button 
                onClick={toggleLanguage}
                className="px-3 py-1 bg-gray-100 rounded-md text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {language === 'en' ? 'PL' : 'EN'}
              </button>
              <Link 
                to="/contact" 
                onClick={handleGetQuoteClick}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                {t.nav.getQuote}
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Navigation; 