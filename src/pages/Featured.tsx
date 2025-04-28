import React, { useState } from 'react';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import VehicleCard from '@/components/VehicleCard';
import FeaturedSearch from '@/components/featured/FeaturedSearch';
import FeaturedSorting from '@/components/featured/FeaturedSorting';
import FeaturedEmpty from '@/components/featured/FeaturedEmpty';

const Featured = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortKey, setSortKey] = useState<'name' | 'year' | 'price'>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  const featuredVehicles = vehicles.filter(vehicle => vehicle.featured);
  
  const filteredVehicles = featuredVehicles.filter(vehicle => 
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedVehicles = [...filteredVehicles].sort((a, b) => {
    if (sortKey === 'name') {
      return sortDirection === 'asc' 
        ? a.name.localeCompare(b.name) 
        : b.name.localeCompare(a.name);
    } else if (sortKey === 'year') {
      return sortDirection === 'asc' 
        ? a.year - b.year 
        : b.year - a.year;
    } else if (sortKey === 'price') {
      const priceA = parseInt(a.price.replace(/[^\d]/g, ''));
      const priceB = parseInt(b.price.replace(/[^\d]/g, ''));
      return sortDirection === 'asc' ? priceA - priceB : priceB - priceA;
    }
    return 0;
  });
  
  const toggleSort = (key: 'name' | 'year' | 'price') => {
    if (sortKey === key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <div 
        className="w-full h-[300px] bg-cover bg-center relative mb-8"
        style={{
              {/* Calbert 72: Imagen del fondo del header */}
          backgroundImage: `url(./public/header-background.jpg)`,
          backgroundPosition: 'center 35%'
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Vehículos Destacados</h1>
            <p className="text-lg font-light">
              Nuestra colección premium de vehículos seleccionados por nuestros expertos
            </p>
          </div>
        </div>
      </div>
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <FeaturedSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <FeaturedSorting 
                sortKey={sortKey} 
                sortDirection={sortDirection} 
                onSort={toggleSort}
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mb-4">
            {sortedVehicles.length} {sortedVehicles.length === 1 ? 'vehículo destacado' : 'vehículos destacados'}
          </p>
          
          {sortedVehicles.length === 0 ? (
            <FeaturedEmpty onClear={() => setSearchTerm('')} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sortedVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} linkTo={`/catalog/${vehicle.id}`} />
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link to="/catalog">
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Ver catálogo completo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Featured;
