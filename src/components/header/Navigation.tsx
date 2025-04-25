
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartDrawer from '@/components/cart/CartDrawer';
import { useCart } from '@/context/CartContext';

const Navigation = () => {
  const { totalItems } = useCart();

  return (
    <div className="hidden md:flex items-center space-x-8">
      <Link to="/" className="text-gray-700 hover:text-primary font-medium">Inicio</Link>
      <a href="/#vehiculos" className="text-gray-700 hover:text-primary font-medium">Vehículos</a>
      <Link to="/catalog" className="text-gray-700 hover:text-primary font-medium">Catálogo</Link>
      <Link to="/featured" className="text-gray-700 hover:text-primary font-medium">Destacados</Link>
      <Link to="/about" className="text-gray-700 hover:text-primary font-medium">Nosotros</Link>
      <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contacto</Link>
      <div className="flex items-center space-x-4">
        <Search className="h-5 w-5 text-gray-500" />
        <div className="relative">
          <CartDrawer />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
        <Link to="/catalog">
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            Ver Catálogo
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
