{/* Calbert 72: filtro por caracter */}
import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface CatalogFiltersProps {
  filters: {
    brand: string;
    year: string;
    color: string;
    transmission: string;
    fuel: string;
  };
  handleFilterChange: (type: string, value: string) => void;
  resetFilters: () => void;
  brands: string[];
  years: string[];
  colors: string[];
  transmissions: string[];
  fuels: string[];
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({
  filters,
  handleFilterChange,
  resetFilters,
  brands,
  years,
  colors,
  transmissions,
  fuels
}) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Select 
          value={filters.brand} 
          onValueChange={(value) => handleFilterChange('brand', value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Marca" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las marcas</SelectItem>
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
            <SelectItem value="all">Todos los años</SelectItem>
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
            <SelectItem value="all">Todos los colores</SelectItem>
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
            <SelectItem value="all">Todas las transmisiones</SelectItem>
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
            <SelectItem value="all">Todos los combustibles</SelectItem>
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
                onClick={() => handleFilterChange(key, '')}
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
    </>
  );
};

export default CatalogFilters;
