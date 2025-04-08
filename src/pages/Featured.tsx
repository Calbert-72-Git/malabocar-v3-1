
import React, { useState } from 'react';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  Search, 
  Car, 
  Calendar, 
  Gauge, 
  ArrowRight,
  Star,
  Fuel,
  SortAsc,
  SortDesc
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  
  // Ordenación
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
      // Convertir precio de string a número para comparación
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
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Vehículos Destacados</h1>
          <p className="text-gray-600 mb-8">Nuestra colección premium de vehículos seleccionados por nuestros expertos</p>
          
          {/* Búsqueda y controles */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <Input
                  type="text"
                  placeholder="Buscar por modelo, marca o descripción..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus-visible:ring-primary w-full"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant={sortKey === 'name' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => toggleSort('name')}
                  className="flex items-center"
                >
                  Nombre
                  {sortKey === 'name' && (
                    sortDirection === 'asc' ? 
                    <SortAsc className="ml-1 h-4 w-4" /> : 
                    <SortDesc className="ml-1 h-4 w-4" />
                  )}
                </Button>
                <Button 
                  variant={sortKey === 'year' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => toggleSort('year')}
                  className="flex items-center"
                >
                  Año
                  {sortKey === 'year' && (
                    sortDirection === 'asc' ? 
                    <SortAsc className="ml-1 h-4 w-4" /> : 
                    <SortDesc className="ml-1 h-4 w-4" />
                  )}
                </Button>
                <Button 
                  variant={sortKey === 'price' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => toggleSort('price')}
                  className="flex items-center"
                >
                  Precio
                  {sortKey === 'price' && (
                    sortDirection === 'asc' ? 
                    <SortAsc className="ml-1 h-4 w-4" /> : 
                    <SortDesc className="ml-1 h-4 w-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
          
          {/* Resultados */}
          <p className="text-sm text-gray-500 mb-4">
            {sortedVehicles.length} {sortedVehicles.length === 1 ? 'vehículo destacado' : 'vehículos destacados'}
          </p>
          
          {sortedVehicles.length === 0 ? (
            <div className="bg-white rounded-lg p-12 text-center shadow-md">
              <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron vehículos</h3>
              <p className="text-gray-600 mb-6">No hay vehículos destacados que coincidan con la búsqueda.</p>
              <Button onClick={() => setSearchTerm('')}>Limpiar búsqueda</Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sortedVehicles.map((vehicle, index) => (
                <motion.div 
                  key={vehicle.id} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="relative">
                    <img 
                      src={vehicle.imageUrl} 
                      alt={vehicle.name} 
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
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
                      <div className="flex items-center text-gray-500">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{vehicle.year}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="flex items-center">
                        <Car className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-gray-700">{vehicle.color}</span>
                      </div>
                      <div className="flex items-center">
                        <Gauge className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-gray-700">{vehicle.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel className="w-4 h-4 text-primary mr-2" />
                        <span className="text-sm text-gray-700">{vehicle.fuel}</span>
                      </div>
                    </div>
                    <p className="text-2xl font-bold text-primary mb-4">{vehicle.price}</p>
                    <Link to={`/catalog/${vehicle.id}`}>
                      <Button className="w-full group">
                        Ver detalles
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
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
