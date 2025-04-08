
import React from 'react';
import { Share2, Info, Star, Calendar, ArrowRight } from 'lucide-react';
import { Vehicle } from '@/data/vehicles';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent,  
  CardFooter, 
} from '@/components/ui/card';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(
      `¡Mira este vehículo en Malabo Car! ${vehicle.name} (${vehicle.model}) - ${vehicle.price}`
    );
    
    toast({
      title: "¡Enlace copiado!",
      description: "Ahora puedes compartir este vehículo",
    });
  };

  const handleViewDetails = () => {
    toast({
      title: "Información del vehículo",
      description: vehicle.description,
    });
  };

  return (
    <Card className="vehicle-card overflow-hidden border-0 shadow-lg">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-primary hover:bg-primary/90 text-white px-3 py-1">
          <Star className="w-4 h-4 mr-1" fill="currentColor" strokeWidth={0} />
          Destacado
        </Badge>
      </div>
      <CardContent className="bg-white p-5">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-800">{vehicle.name}</h3>
          <div className="flex items-center text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="text-sm">{vehicle.year}</span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-3">{vehicle.model}</p>
        <p className="text-2xl font-bold text-primary mb-3">{vehicle.price}</p>
        <div className="flex items-center mb-3 text-sm text-gray-500">
          <span>Automático</span>
          <span className="mx-2">•</span>
          <span>Gasolina</span>
          <span className="mx-2">•</span>
          <span>5 puertas</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{vehicle.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-50 p-4 border-t border-gray-100">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center border-gray-300 hover:border-primary hover:text-primary" 
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Compartir
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="flex items-center bg-primary hover:bg-primary/90" 
          onClick={handleViewDetails}
        >
          Ver detalles
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;

