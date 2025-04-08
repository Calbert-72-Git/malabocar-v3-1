
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { vehicles } from '@/data/vehicles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VehicleGallery from '@/components/VehicleGallery';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Calendar, Fuel, LayoutGrid, ArrowLeft, Wrench } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const VehicleDetailCatalog = () => {
  const { id } = useParams<{ id: string }>();
  const [vehicle, setVehicle] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulamos una carga de datos
    setTimeout(() => {
      const foundVehicle = vehicles.find(v => v.id.toString() === id);
      setVehicle(foundVehicle);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="h-8 w-8 border-4 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600">Cargando detalles del vehículo...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Vehículo no encontrado</h2>
            <p className="text-gray-600 mb-6">El vehículo que estás buscando no existe o ha sido eliminado.</p>
            <Link to="/catalog">
              <Button>Volver al catálogo</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(vehicle);
  };

  // Crear un array de imágenes para la galería
  const galleryImages = Array(4).fill(vehicle.imageUrl || '/placeholder.svg');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-8 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link to="/catalog" className="inline-flex items-center text-primary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al catálogo
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div>
              <VehicleGallery images={galleryImages} />
            </div>
            
            {/* Información del vehículo */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{vehicle.name}</h1>
              <h2 className="text-xl text-gray-600 mb-6">{vehicle.model}</h2>
              
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-primary">{vehicle.price}</span>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Calendar className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <span className="block text-sm text-gray-600">Año</span>
                  <span className="block font-medium">{vehicle.year}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Fuel className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <span className="block text-sm text-gray-600">Combustible</span>
                  <span className="block font-medium">{vehicle.fuel}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <LayoutGrid className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <span className="block text-sm text-gray-600">Transmisión</span>
                  <span className="block font-medium">{vehicle.transmission}</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <Wrench className="h-6 w-6 mx-auto mb-2 text-primary" />
                  <span className="block text-sm text-gray-600">Estado</span>
                  <span className="block font-medium">{vehicle.condition || "Nuevo"}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Descripción</h3>
                <p className="text-gray-600 leading-relaxed">{vehicle.description}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="flex-1 flex items-center justify-center gap-2" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Añadir al carrito
                </Button>
                <a 
                  href={`https://wa.me/240555123456?text=Hola, estoy interesado en el vehículo ${vehicle.name} (ID: ${vehicle.id}). ¿Podría darme más información?`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="flex-1 sm:w-auto" variant="outline" size="lg">
                    Consultar disponibilidad
                  </Button>
                </a>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Características</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Aire acondicionado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Dirección asistida
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Cierre centralizado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Elevalunas eléctricos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Sistema de navegación
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Bluetooth
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Cámara trasera
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                    Sistema de sonido premium
                  </li>
                </ul>
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
