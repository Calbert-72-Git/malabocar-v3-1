
import React from 'react';
import { useParams } from 'react-router-dom';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const vehicle = vehicles.find(v => v.id === id);
  
  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl mb-4">Vehículo no encontrado</h1>
        <Button onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a la galería
        </Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12 px-4">
        <div className="container mx-auto">
          <Button variant="outline" onClick={() => navigate('/')} className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la galería
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img 
                src={vehicle.imageUrl} 
                alt={vehicle.name} 
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-2">{vehicle.name}</h1>
              <p className="text-lg text-gray-600 mb-4">{vehicle.model} - {vehicle.year}</p>
              <p className="text-3xl font-bold text-primary mb-6">{vehicle.price}</p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <h2 className="text-xl font-semibold mb-2">Descripción</h2>
                <p>{vehicle.description}</p>
              </div>
              
              <Button className="w-full">Contactar sobre este vehículo</Button>
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default VehicleDetail;
