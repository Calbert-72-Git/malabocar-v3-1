
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { 
  ArrowLeft, 
  Calendar, 
  Car, 
  Fuel, 
  Gauge, 
  Share2, 
  DoorOpen, 
  Star,
  MessageSquare 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

const VehicleDetailCatalog = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const vehicle = vehicles.find(v => v.id === id);
  
  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="bg-white rounded-lg p-12 text-center shadow-md">
            <Car className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-4">Vehículo no encontrado</h1>
            <p className="text-gray-600 mb-6">Lo sentimos, no pudimos encontrar el vehículo que estás buscando.</p>
            <Button onClick={() => navigate('/catalog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al catálogo
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    navigator.clipboard.writeText(
      `¡Mira este vehículo en Malabo Car! ${vehicle.name} (${vehicle.model}) - ${vehicle.price}`
    );
    
    toast({
      title: "¡Enlace copiado!",
      description: "Ahora puedes compartir este vehículo",
    });
  };

  const handleContact = () => {
    window.open(`https://wa.me/240555123456?text=Hola,%20estoy%20interesado%20en%20el%20${vehicle.name}%20${vehicle.model}`, '_blank');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <Button variant="outline" onClick={() => navigate('/catalog')} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al catálogo
          </Button>
          
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={vehicle.imageUrl} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover"
                />
                {vehicle.featured && (
                  <Badge className="absolute top-4 right-4 bg-primary hover:bg-primary/90 text-white px-3 py-1">
                    <Star className="w-4 h-4 mr-1" fill="currentColor" strokeWidth={0} />
                    Destacado
                  </Badge>
                )}
              </div>
              
              <div className="p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{vehicle.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{vehicle.model}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">Año: <strong>{vehicle.year}</strong></span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">Color: <strong>{vehicle.color}</strong></span>
                  </div>
                  <div className="flex items-center">
                    <Gauge className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">Transmisión: <strong>{vehicle.transmission}</strong></span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">Combustible: <strong>{vehicle.fuel}</strong></span>
                  </div>
                  <div className="flex items-center">
                    <DoorOpen className="w-5 h-5 text-primary mr-2" />
                    <span className="text-gray-700">Puertas: <strong>{vehicle.doors}</strong></span>
                  </div>
                </div>
                
                <div className="border-t border-b border-gray-200 py-6 my-6">
                  <p className="text-3xl font-bold text-primary mb-1">{vehicle.price}</p>
                  <p className="text-sm text-gray-500">Precio negociable</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h2 className="text-xl font-semibold mb-2">Descripción</h2>
                  <p className="text-gray-700">{vehicle.description}</p>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Button 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={handleContact}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={handleShare}
                  >
                    <Share2 className="mr-2 h-5 w-5" />
                    Compartir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default VehicleDetailCatalog;
