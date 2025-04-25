
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface FeaturedSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const FeaturedSearch = ({ searchTerm, setSearchTerm }: FeaturedSearchProps) => {
  return (
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
  );
};

export default FeaturedSearch;
