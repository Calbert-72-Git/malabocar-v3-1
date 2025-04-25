
import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import TopBar from './header/TopBar';
import Navigation from './header/Navigation';
import MobileMenu from './header/MobileMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white">
      <TopBar />

      {/* Logo y navegación - Hacemos esta sección fija */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-primary mr-2" />
              <h1 className="text-2xl font-bold text-gray-800">Malabo Car</h1>
            </Link>
          </div>
          
          {/* Botón de menú móvil */}
          {isMobile && (
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          )}

          <Navigation />
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      {/* Banner principal - Solo mostramos en la página de inicio */}
      {window.location.pathname === '/' && (
        <div 
          className="header-banner w-full h-[600px] flex items-center justify-center"
          style={{
            backgroundImage: 'url(/header-background.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Malabo Car
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-8">
              Su socio de confianza para la compra de vehículos de calidad en Guinea Ecuatorial
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/catalog">
                <Button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full text-lg">
                  Ver catálogo
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="bg-white/10 backdrop-blur text-white border-white hover:bg-white/20 py-3 px-8 rounded-full text-lg">
                  Contactar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
