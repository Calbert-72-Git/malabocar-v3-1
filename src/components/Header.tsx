import React, { useState } from 'react';
import { Car, Phone, Search, Menu, X, UserCircle, LogIn, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import CartDrawer from '@/components/cart/CartDrawer';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useCart } from '@/context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { totalItems } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-white">
      {/* Barra superior */}
      <div className="bg-primary py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="hidden md:flex items-center text-white">
            <Phone className="h-4 w-4 mr-2" />
            <span className="text-sm">+240 222 176 082</span>
          </div>
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-primary/80 p-0">
                  <LogIn className="h-4 w-4 mr-1" />
                  Iniciar Sesión
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Iniciar Sesión</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="p-2 border rounded"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="password" className="text-sm">Contraseña</label>
                    <input
                      id="password"
                      type="password"
                      className="p-2 border rounded"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button className="w-full mt-2">Iniciar Sesión</Button>
                </div>
              </DialogContent>
            </Dialog>
            <span className="text-white">|</span>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="text-white hover:bg-primary/80 p-0">
                  <UserCircle className="h-4 w-4 mr-1" />
                  Registrarse
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Crear una cuenta</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="grid gap-2">
                      <label htmlFor="firstName" className="text-sm">Nombre</label>
                      <input
                        id="firstName"
                        type="text"
                        className="p-2 border rounded"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="lastName" className="text-sm">Apellido</label>
                      <input
                        id="lastName"
                        type="text"
                        className="p-2 border rounded"
                        placeholder="Tu apellido"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="registerEmail" className="text-sm">Email</label>
                    <input
                      id="registerEmail"
                      type="email"
                      className="p-2 border rounded"
                      placeholder="tucorreo@ejemplo.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="registerPassword" className="text-sm">Contraseña</label>
                    <input
                      id="registerPassword"
                      type="password"
                      className="p-2 border rounded"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button className="w-full mt-2">Crear Cuenta</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>

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

          {/* Navegación escritorio */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium">Inicio</Link>
            <a href="/#vehiculos" className="text-gray-700 hover:text-primary font-medium">Vehículos</a>
            <Link to="/catalog" className="text-gray-700 hover:text-primary font-medium">Catálogo</Link>
            <Link to="/featured" className="text-gray-700 hover:text-primary font-medium">Destacados</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium">Nosotros</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">Contacto</Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
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
      </div>

      {/* Menú móvil */}
      {isMobile && isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Inicio</Link>
            <a href="/#vehiculos" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Vehículos</a>
            <Link to="/catalog" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Catálogo</Link>
            <Link to="/featured" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Destacados</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Nosotros</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary font-medium py-2" onClick={toggleMenu}>Contacto</Link>
            
            <div className="flex items-center justify-between py-2">
              <div className="relative">
                <CartDrawer />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </div>
              <Link to="/catalog" className="flex-grow ml-4" onClick={toggleMenu}>
                <Button variant="default" className="bg-primary hover:bg-primary/90 w-full">
                  Ver Catálogo
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}

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
