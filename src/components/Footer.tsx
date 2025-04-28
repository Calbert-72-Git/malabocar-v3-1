{/* Calbert 72: Pie de página */}
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Car } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contacto" className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <Car className="h-8 w-8 text-primary mr-2" />
              <h3 className="text-2xl font-bold text-white">Malabo Car</h3>
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Somos su socio de confianza para la compra de vehículos de calidad en Guinea Ecuatorial, ofreciendo un servicio excepcional y los mejores precios.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-primary hover:bg-primary/80 p-2 rounded-full transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-primary hover:bg-primary/80 p-2 rounded-full transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-primary hover:bg-primary/80 p-2 rounded-full transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-300 hover:text-primary transition-colors">Inicio</a></li>
              <li><a href="#vehiculos" className="text-gray-300 hover:text-primary transition-colors">Vehículos</a></li>
              <li><a href="#servicios" className="text-gray-300 hover:text-primary transition-colors">Servicios</a></li>
              <li><a href="#contacto" className="text-gray-300 hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Sobre Nosotros</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Phone className="mr-3 h-5 w-5 text-primary" />
                <span>+240 222 176 082</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="mr-3 h-5 w-5 text-primary" />
                <span>info@malabocar.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="mr-3 h-5 w-5 text-primary" />
                <span>Malabo, Guinea Ecuatorial</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Horario</h3>
            <ul className="space-y-4">
              <li className="flex text-gray-300">
                <Clock className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-1">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="mb-1">Sábado: 9:00 - 16:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-950 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Malabo Car. Todos los derechos reservados.
          </p>
          <a className="text-center text-gray-400" href="http://calbert72.com">Calbert 72</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
