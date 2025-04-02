
import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Calbert 72</h3>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Nos dedicamos a ofrecer los mejores vehículos con un servicio excepcional. 
              Nuestra prioridad es la satisfacción de nuestros clientes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Phone className="mr-3 h-5 w-5 text-yellow-400" />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="mr-3 h-5 w-5 text-yellow-400" />
                <span>info@calbert72.com</span>
              </li>
              <li className="flex items-center text-gray-300">
                <MapPin className="mr-3 h-5 w-5 text-yellow-400" />
                <span>Calle Principal 123, Madrid</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-400">Horario</h3>
            <ul className="space-y-4">
              <li className="flex text-gray-300">
                <Clock className="mr-3 h-5 w-5 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="mb-1">Lunes a Viernes: 9:00 - 20:00</p>
                  <p className="mb-1">Sábado: 10:00 - 14:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Calbert 72. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
