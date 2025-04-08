
import React from 'react';
import { Car } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EmptyResultsProps {
  onReset: () => void;
}

const EmptyResults: React.FC<EmptyResultsProps> = ({ onReset }) => {
  return (
    <div className="bg-white rounded-lg p-12 text-center shadow-md">
      <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron vehículos</h3>
      <p className="text-gray-600 mb-6">No hay vehículos que coincidan con los criterios de búsqueda seleccionados.</p>
      <Button onClick={onReset}>Limpiar filtros</Button>
    </div>
  );
};

export default EmptyResults;
