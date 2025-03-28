
import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Calbert 72</h3>
            <p className="mb-4">
              Nos dedicamos a ofrecer los mejores vehículos con un servicio excepcional.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span>info@calbert72.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-5 w-5" />
                <span>Calle Principal 123, Madrid</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock className="mr-2 h-5 w-5" />
                <div>
                  <p>Lunes a Viernes: 9:00 - 20:00</p>
                  <p>Sábado: 10:00 - 14:00</p>
                  <p>Domingo: Cerrado</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700">
          <p className="text-center">
            © {new Date().getFullYear()} Calbert 72. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
