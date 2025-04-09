
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Fuel, Car, DoorOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const VehicleDetailCatalog = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const foundVehicle = vehicles.find(v => v.id === id);
    if (foundVehicle) {
      setVehicle(foundVehicle);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (vehicle) {
      addToCart(vehicle);
      toast.success(`${vehicle.name} añadido al carrito`);
    }
  };

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-10">
            <h2 className="text-2xl font-bold mb-4">Vehículo no encontrado</h2>
            <Link to="/catalog">
              <Button>Volver al catálogo</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/catalog" className="inline-flex items-center text-primary hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al catálogo
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">{vehicle.name}</h1>
          <p className="text-lg text-gray-600">{vehicle.model}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              <img 
                src={vehicle.imageUrl} 
                alt={vehicle.name} 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/placeholder.svg";
                }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-primary">{vehicle.price}</h2>
                {vehicle.oldPrice && (
                  <p className="text-sm text-gray-400 line-through">{vehicle.oldPrice}</p>
                )}
              </div>
              <Button onClick={handleAddToCart} className="px-6">
                Añadir al carrito
              </Button>
            </div>

            <Separator />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium block">{vehicle.year}</span>
                <span className="text-xs text-gray-500">Año</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <Fuel className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium block">{vehicle.fuel}</span>
                <span className="text-xs text-gray-500">Combustible</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <Car className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium block">{vehicle.transmission}</span>
                <span className="text-xs text-gray-500">Transmisión</span>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg text-center">
                <DoorOpen className="h-6 w-6 mx-auto mb-2 text-primary" />
                <span className="text-sm font-medium block">{vehicle.doors}</span>
                <span className="text-xs text-gray-500">Puertas</span>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Descripción</h3>
              <p className="text-gray-700">{vehicle.description}</p>
            </div>

            {vehicle.featured && (
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Vehículo destacado
              </Badge>
            )}

            <div className="pt-4">
              <Button className="w-full" size="lg" onClick={handleAddToCart}>
                Añadir al carrito
              </Button>
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
