
import React, { useState } from 'react';
import { vehicles } from '@/data/vehicles';
import VehicleCard from './VehicleCard';
import { Search } from 'lucide-react';

const VehicleGallery = () => {
  const [filter, setFilter] = useState('');
  
  const filteredVehicles = vehicles.filter(vehicle => 
    vehicle.name.toLowerCase().includes(filter.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Nuestra Colección Premium</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Descubre nuestra selección de vehículos de alta gama con las mejores prestaciones y precios del mercado.
        </p>
        
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative flex items-center">
            <Search className="absolute left-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por modelo o marca..."
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      
      {filteredVehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
  );
};

export default VehicleGallery;
