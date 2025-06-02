import { Truck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

const Header = () => {
  const navigate = useNavigate();

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
  };

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Truck className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-primary">Lukas Transport</span>
          </Link>

          <Navigation onSectionClick={scrollToSection} />
        </div>
      </div>
    </header>
  );
};

export default Header;