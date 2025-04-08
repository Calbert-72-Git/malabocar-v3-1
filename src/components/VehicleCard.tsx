
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Fuel, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';

interface VehicleCardProps {
  vehicle: {
    id: number;
    name: string;
    model: string;
    price: number;
    oldPrice?: number;
    year: number;
    image: string;
    featured?: boolean;
    condition?: string;
    transmission: string;
    color: string;
    description: string;
    fuel: string;
  };
  linkTo?: string;
}

const VehicleCard = ({ vehicle, linkTo = `/vehicle/${vehicle.id}` }: VehicleCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(vehicle);
  };

  return (
    <Link to={linkTo}>
      <div className="vehicle-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
        <div className="relative">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-48 object-cover"
          />
          {vehicle.featured && (
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-semibold">
              Destacado
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-1 line-clamp-1">{vehicle.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{vehicle.model}</p>
          
          <div className="flex justify-between items-center mb-3">
            <div>
              <p className="text-lg font-bold text-primary">${vehicle.price.toLocaleString()}</p>
              {vehicle.oldPrice && (
                <p className="text-xs text-gray-400 line-through">
                  ${vehicle.oldPrice.toLocaleString()}
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
