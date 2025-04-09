
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Fuel, ShoppingCart, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Vehicle } from '@/data/vehicles';
import { Badge } from '@/components/ui/badge';

interface VehicleCardProps {
  vehicle: Vehicle;
  linkTo?: string;
}

const VehicleCard = ({ vehicle, linkTo = `/vehicle/${vehicle.id}` }: VehicleCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(vehicle);
  };

  const hasGallery = vehicle.gallery && vehicle.gallery.length > 1;

  return (
    <Link to={linkTo}>
      <div className="vehicle-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <img
            src={vehicle.imageUrl}
            alt={vehicle.name}
            className="w-full h-48 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder.svg";
            }}
          />
          {vehicle.featured && (
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-semibold">
              Destacado
            </div>
          )}
          {hasGallery && (
            <Badge 
              variant="outline" 
              className="absolute bottom-2 right-2 bg-black/60 text-white border-none" 
              title="Ver más imágenes"
            >
              <Image className="h-3 w-3 mr-1" />
              {vehicle.gallery.length}
            </Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{vehicle.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{vehicle.model}</p>
          
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-lg font-bold text-primary">{vehicle.price}</p>
              {vehicle.oldPrice && (
                <p className="text-xs text-gray-400 line-through">
                  {vehicle.oldPrice}
                </p>
              )}
            </div>
            <Button 
              size="sm" 
              variant="ghost" 
              className="text-primary hover:bg-primary/10 p-1 h-auto"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{vehicle.year}</span>
            </div>
            <div className="flex items-center">
              <Fuel className="h-4 w-4 mr-1" />
              <span>{vehicle.fuel}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VehicleCard;
