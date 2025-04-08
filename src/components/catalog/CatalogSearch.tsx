
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface CatalogSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  viewMode: 'grid' | 'table';
  setViewMode: (mode: 'grid' | 'table') => void;
}

const CatalogSearch: React.FC<CatalogSearchProps> = ({
  searchTerm,
  setSearchTerm,
  viewMode,
  setViewMode
}) => {
  return (
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
  );
};

export default CatalogSearch;
