
import React from 'react';
import { SortAsc, SortDesc } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FeaturedSortingProps {
  sortKey: 'name' | 'year' | 'price';
  sortDirection: 'asc' | 'desc';
  onSort: (key: 'name' | 'year' | 'price') => void;
}

const FeaturedSorting = ({ sortKey, sortDirection, onSort }: FeaturedSortingProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Button 
        variant={sortKey === 'name' ? 'default' : 'outline'} 
        size="sm"
        onClick={() => onSort('name')}
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
        onClick={() => onSort('year')}
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
        onClick={() => onSort('price')}
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
  );
};

export default FeaturedSorting;
