
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
  Filter, 
  ArrowRight,
  X,
  Star
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
  
  const handleFilterChange = (type: keyof typeof filters, value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }));
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
                  variant={viewMode === 'grid' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="flex items-center"
                >
                  <span className="sr-only">Ver en cuadrícula</span>
                  Cuadrícula
                </Button>
                <Button 
                  variant={viewMode === 'table' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setViewMode('table')}
                  className="flex items-center"
                >
                  <span className="sr-only">Ver en tabla</span>
                  Tabla
                </Button>
              </div>
            </div>
            
            {/* Filtros */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <Select 
                value={filters.brand} 
                onValueChange={(value) => handleFilterChange('brand', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Marca" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas las marcas</SelectItem>
                  {brands.map(brand => (
                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={filters.year} 
                onValueChange={(value) => handleFilterChange('year', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Año" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos los años</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={filters.color} 
                onValueChange={(value) => handleFilterChange('color', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos los colores</SelectItem>
                  {colors.map(color => (
                    <SelectItem key={color} value={color}>{color}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={filters.transmission} 
                onValueChange={(value) => handleFilterChange('transmission', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Transmisión" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas las transmisiones</SelectItem>
                  {transmissions.map(transmission => (
                    <SelectItem key={transmission} value={transmission}>{transmission}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select 
                value={filters.fuel} 
                onValueChange={(value) => handleFilterChange('fuel', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Combustible" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos los combustibles</SelectItem>
                  {fuels.map(fuel => (
                    <SelectItem key={fuel} value={fuel}>{fuel}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Resumen de filtros activos */}
            {Object.values(filters).some(Boolean) && (
              <div className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100">
                <span className="flex items-center text-sm text-gray-500">
                  <Filter className="w-4 h-4 mr-1" />
                  Filtros activos:
                </span>
                {Object.entries(filters).map(([key, value]) => value && (
                  <Badge key={key} variant="outline" className="flex items-center gap-1">
                    {value}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer" 
                      onClick={() => handleFilterChange(key as keyof typeof filters, '')}
                    />
                  </Badge>
                ))}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={resetFilters}
                  className="text-sm ml-2"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
          </div>
          
          {/* Resultados */}
          <div>
            <p className="text-sm text-gray-500 mb-4">
              {filteredVehicles.length} {filteredVehicles.length === 1 ? 'vehículo encontrado' : 'vehículos encontrados'}
            </p>
            
            {filteredVehicles.length === 0 ? (
              <div className="bg-white rounded-lg p-12 text-center shadow-md">
                <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron vehículos</h3>
                <p className="text-gray-600 mb-6">No hay vehículos que coincidan con los criterios de búsqueda seleccionados.</p>
                <Button onClick={resetFilters}>Limpiar filtros</Button>
              </div>
            ) : viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredVehicles.map((vehicle) => (
                  <div key={vehicle.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                      <img 
                        src={vehicle.imageUrl} 
                        alt={vehicle.name} 
                        className="w-full h-56 object-cover"
                      />
                      {vehicle.featured && (
                        <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary/90 text-white px-3 py-1">
                          <Star className="w-4 h-4 mr-1" fill="currentColor" strokeWidth={0} />
                          Destacado
                        </Badge>
                      )}
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
                      </div>
                      <p className="text-2xl font-bold text-primary mb-4">{vehicle.price}</p>
                      <Link to={`/catalog/${vehicle.id}`}>
                        <Button className="w-full">
                          Ver detalles
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Vehículo</TableHead>
                      <TableHead>Modelo</TableHead>
                      <TableHead>Año</TableHead>
                      <TableHead>Color</TableHead>
                      <TableHead>Transmisión</TableHead>
                      <TableHead>Combustible</TableHead>
                      <TableHead>Precio</TableHead>
                      <TableHead></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredVehicles.map((vehicle) => (
                      <TableRow key={vehicle.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center">
                            <img 
                              src={vehicle.imageUrl} 
                              alt={vehicle.name} 
                              className="w-12 h-12 object-cover rounded mr-3"
                            />
                            {vehicle.name}
                            {vehicle.featured && (
                              <Badge className="ml-2 bg-primary text-white">Destacado</Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>{vehicle.model}</TableCell>
                        <TableCell>{vehicle.year}</TableCell>
                        <TableCell>{vehicle.color}</TableCell>
                        <TableCell>{vehicle.transmission}</TableCell>
                        <TableCell>{vehicle.fuel}</TableCell>
                        <TableCell className="font-bold text-primary">{vehicle.price}</TableCell>
                        <TableCell>
                          <Link to={`/catalog/${vehicle.id}`}>
                            <Button size="sm">
                              Ver
                              <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
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
