
import React from 'react';
import { Share2, Info, Star } from 'lucide-react';
import { Vehicle } from '@/data/vehicles';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const handleShare = () => {
    navigator.clipboard.writeText(
      `¡Mira este vehículo en Calbert 72! ${vehicle.name} (${vehicle.model}) - ${vehicle.price}`
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
        <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-2 py-1 rounded-md font-medium text-sm flex items-center">
          <Star className="w-4 h-4 mr-1" fill="currentColor" strokeWidth={0} />
          Destacado
        </div>
      </div>
      <CardHeader className="bg-white pb-0">
        <CardTitle className="text-xl text-gray-800">{vehicle.name}</CardTitle>
        <CardDescription className="text-gray-600">{vehicle.model} - {vehicle.year}</CardDescription>
      </CardHeader>
      <CardContent className="pt-4 bg-white">
        <p className="text-2xl font-bold text-blue-700">{vehicle.price}</p>
        <div className="flex items-center mt-2 text-sm text-gray-500">
          <span>Automático</span>
          <span className="mx-2">•</span>
          <span>Gasolina</span>
          <span className="mx-2">•</span>
          <span>5 puertas</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between bg-white pt-0">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center border-gray-300 hover:bg-gray-100 hover:border-gray-400" 
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Compartir
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="flex items-center bg-blue-600 hover:bg-blue-700" 
          onClick={handleViewDetails}
        >
          <Info className="mr-2 h-4 w-4" />
          Ver detalles
        </Button>
      </CardFooter>
    </Card>
  );
};

export default VehicleCard;
