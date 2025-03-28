
import React from 'react';
import { vehicles } from '@/data/vehicles';
import VehicleCard from './VehicleCard';

const VehicleGallery = () => {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestros Vehículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGallery;
