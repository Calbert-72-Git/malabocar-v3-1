
import React, { useState } from 'react';
import { vehicles } from '@/data/vehicles';
import VehicleCard from './VehicleCard';
import { Search, Car, Gauge, MapPin } from 'lucide-react';
import { Input } from '@/components/ui/input';

const VehicleGallery = () => {
  const [filter, setFilter] = useState('');
  
  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.name.toLowerCase().includes(filter.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="py-16">
      {/* Servicios destacados */}
      <section id="servicios" className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Nuestros Servicios</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
            <p className="text-gray-600 max-w-xl mx-auto">
              Ofrecemos una amplia gama de servicios para satisfacer todas sus necesidades automotrices
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Venta de Vehículos</h3>
              <p className="text-gray-600">
                Gran variedad de vehículos nuevos y usados de las mejores marcas internacionales.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gauge className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Mantenimiento</h3>
              <p className="text-gray-600">
                Servicio técnico especializado para el mantenimiento y reparación de su vehículo.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:-translate-y-2">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Entrega a Domicilio</h3>
              <p className="text-gray-600">
                Entregamos su vehículo donde usted lo necesite, con total comodidad y seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Catálogo de vehículos */}
      <section id="vehiculos" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Vehículos Disponibles</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            Descubra nuestra selección de vehículos de alta calidad disponibles para entrega inmediata
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative flex items-center">
              <Search className="absolute left-3 text-gray-400" size={20} />
              <Input
                type="text"
                placeholder="Buscar por modelo o marca..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="pl-10 pr-4 py-6 w-full rounded-lg border border-gray-300 focus-visible:ring-primary"
              />
            </div>
          </div>
        </div>
        
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl text-gray-500">No se encontraron vehículos con esos criterios</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default VehicleGallery;

