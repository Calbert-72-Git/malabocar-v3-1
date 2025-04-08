
import React from 'react';
import { vehicles } from '@/data/vehicles';
import { ArrowRight, Car, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const FeaturedVehicles = () => {
  const featuredVehicles = vehicles.filter(vehicle => vehicle.featured);

  return (
    <section id="vehiculos-destacados" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Vehículos Destacados</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Nuestras mejores opciones seleccionadas con cuidado para nuestros clientes más exigentes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredVehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-2">
              <div className="relative">
                <img 
                  src={vehicle.imageUrl} 
                  alt={vehicle.name} 
                  className="w-full h-56 object-cover"
                />
                <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary/90 text-white px-3 py-1">
                  <Star className="w-4 h-4 mr-1" fill="currentColor" strokeWidth={0} />
                  Destacado
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{vehicle.name}</h3>
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600 text-sm">{vehicle.model}</p>
                  <p className="text-sm text-gray-500">{vehicle.year}</p>
                </div>
                <div className="flex items-center mb-4">
                  <Car className="w-4 h-4 text-primary mr-2" />
                  <span className="text-gray-700">{vehicle.color}</span>
                </div>
                <p className="text-2xl font-bold text-primary mb-4">{vehicle.price}</p>
                <Link to={`/catalog/${vehicle.id}`}>
                  <Button className="w-full mt-2">
                    Ver detalles
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/catalog">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Ver todos los vehículos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
