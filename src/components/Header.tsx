import  { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logoespaco.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'Sobre', path: '/sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Galeria', path: '/galeria' },
    { name: 'Restaurante', path: '/restaurante' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className="bg-black text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo}   style={{  height: '60px' }}   />
     
            <span className="ml-2 text-3xl font-semibold text-yellow-600" style={{ fontFamily: 'Playfair Display, serif' }}>Espaço Imperial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`hover:text-yellow-500 transition-colors ${
                  location.pathname === item.path ? 'text-yellow-500' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 hover:text-yellow-500 transition-colors ${
                  location.pathname === item.path ? 'text-yellow-500' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;