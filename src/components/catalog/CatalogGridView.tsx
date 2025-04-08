
import React from 'react';
import { Vehicle } from '@/data/vehicles';
import { ArrowRight, Car, Calendar, Gauge, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CatalogGridViewProps {
  vehicles: Vehicle[];
}

const CatalogGridView: React.FC<CatalogGridViewProps> = ({ vehicles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {vehicles.map((vehicle, index) => (
        <motion.div 
          key={vehicle.id} 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <div className="relative">
            <img 
              src={vehicle.imageUrl} 
              alt={vehicle.name} 
              className="w-full h-56 object-cover transition-transform duration-700 hover:scale-110"
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
              <Button className="w-full group">
                Ver detalles
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CatalogGridView;
