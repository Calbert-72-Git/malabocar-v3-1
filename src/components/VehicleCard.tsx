
import React from 'react';
import { Share2, Info } from 'lucide-react';
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
    // In a real implementation, this would use the Web Share API
    // or copy a link to the clipboard
    navigator.clipboard.writeText(
      `¡Mira este vehículo en Calbert 72! ${vehicle.name} (${vehicle.model}) - ${vehicle.price}`
    );
    
    toast({
      title: "¡Enlace copiado!",
      description: "Ahora puedes compartir este vehículo",
    });
  };

  const handleViewDetails = () => {
    // In a real implementation, this would navigate to a details page
    toast({
      title: "Información del vehículo",
      description: vehicle.description,
    });
  };

  return (
    <Card className="vehicle-card overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img 
          src={vehicle.imageUrl} 
          alt={vehicle.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{vehicle.name}</CardTitle>
        <CardDescription>{vehicle.model} - {vehicle.year}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">{vehicle.price}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          className="flex items-center" 
          onClick={handleShare}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Compartir
        </Button>
        <Button 
          variant="default" 
          size="sm" 
          className="flex items-center" 
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
