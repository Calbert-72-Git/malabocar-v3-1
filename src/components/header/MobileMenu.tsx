
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import CartDrawer from '@/components/cart/CartDrawer';
import { useCart } from '@/context/CartContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white py-4 px-6 shadow-lg">
      <nav className="flex flex-col space-y-4">
        <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2" onClick={onClose}>Inicio</Link>
        <a href="/#vehiculos" className="text-gray-700 hover:text-primary font-medium py-2" onClick={onClose}>Vehículos</a>
        <Link to="/catalog" className="text-gray-700 hover:text-primary font-medium py-2" onClick={onClose}>Catálogo</Link>
        <Link to="/featured" className="text-gray-700 hover:text-primary font-medium py-2" onClick={onClose}>Destacados</Link>
        <Link to="/about" className="text-gray-700 hover:text-primary font-medium py-2" onClick={onClose}>Nosotros</Link>
        <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2" onClick={onClose}>Contacto</Link>
        
        <div className="flex items-center justify-between py-2">
          <div className="relative">
            <CartDrawer />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <Link to="/catalog" className="flex-grow ml-4" onClick={onClose}>
            <Button variant="default" className="bg-primary hover:bg-primary/90 w-full">
              Ver Catálogo
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
