
import React, { useState } from 'react';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CatalogSearch from '@/components/catalog/CatalogSearch';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import CatalogGridView from '@/components/catalog/CatalogGridView';
import CatalogTableView from '@/components/catalog/CatalogTableView';
import EmptyResults from '@/components/catalog/EmptyResults';

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [filters, setFilters] = useState({
    brand: '',
    year: '',
    color: '',
    transmission: '',
    fuel: '',
  });
  
  // Extraer valores únicos para los filtros
  const brands = [...new Set(vehicles.map(v => v.name.split(' ')[0]))];
  const years = [...new Set(vehicles.map(v => v.year.toString()))];
  const colors = [...new Set(vehicles.map(v => v.color))];
  const transmissions = [...new Set(vehicles.map(v => v.transmission))];
  const fuels = [...new Set(vehicles.map(v => v.fuel))];
  
  const handleFilterChange = (type: string, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value === 'all' ? '' : value }));
  };
  
  const resetFilters = () => {
    setFilters({
      brand: '',
      year: '',
      color: '',
      transmission: '',
      fuel: '',
    });
  };
  
  const filteredVehicles = vehicles.filter(vehicle => {
    const matchesSearch = 
      vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vehicle.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesBrand = !filters.brand || vehicle.name.startsWith(filters.brand);
    const matchesYear = !filters.year || vehicle.year.toString() === filters.year;
    const matchesColor = !filters.color || vehicle.color === filters.color;
    const matchesTransmission = !filters.transmission || vehicle.transmission === filters.transmission;
    const matchesFuel = !filters.fuel || vehicle.fuel === filters.fuel;
    
    return matchesSearch && matchesBrand && matchesYear && matchesColor && 
           matchesTransmission && matchesFuel;
  });
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Catálogo de Vehículos</h1>
          <p className="text-gray-600 mb-8">Explore nuestra colección completa de vehículos disponibles</p>
          
          {/* Búsqueda y controles */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <CatalogSearch 
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              viewMode={viewMode}
              setViewMode={setViewMode}
            />
            
            {/* Filtros */}
            <CatalogFilters 
              filters={filters}
              handleFilterChange={handleFilterChange}
              resetFilters={resetFilters}
              brands={brands}
              years={years}
              colors={colors}
              transmissions={transmissions}
              fuels={fuels}
            />
          </div>
          
          {/* Resultados */}
          <div>
            <p className="text-sm text-gray-500 mb-4">
              {filteredVehicles.length} {filteredVehicles.length === 1 ? 'vehículo encontrado' : 'vehículos encontrados'}
            </p>
            
            {filteredVehicles.length === 0 ? (
              <EmptyResults onReset={resetFilters} />
            ) : viewMode === 'grid' ? (
              <CatalogGridView vehicles={filteredVehicles} />
            ) : (
              <CatalogTableView vehicles={filteredVehicles} />
            )}
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Catalog;
