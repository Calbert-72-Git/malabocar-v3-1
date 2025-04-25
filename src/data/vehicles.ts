export interface Vehicle {
  id: string;
  name: string;
  price: string;
  model: string;
  year: number;
  color: string;
  imageUrl: string;
  image?: string; // Para compatibilidad con componentes existentes
  description: string;
  featured: boolean;
  transmission: string;
  fuel: string;
  doors: number;
  oldPrice?: string;
  condition?: string;
  gallery?: string[]; // Array de imágenes adicionales para la galería
}

const createVehicles = () => {
  const vehiclesData = [
    {
      id: '1',
      name: 'Toyota Avensis',
      price: '3.500.000 FCFA',
      model: 'Avensis 2.0',
      year: 2010,
      color: 'Gris Plata',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
      description: 'Sedán familiar confiable con excelente consumo de combustible. Incluye aire acondicionado y sistema de audio.',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1604052366191-c2ba1568187c?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: '2',
      name: 'Toyota Carina',
      price: '2.800.000 FCFA',
      model: 'Carina E',
      year: 2008,
      color: 'Verde',
      imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
      description: 'Vehículo económico y duradero. Perfecto para uso diario con buen espacio interior.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590347394450-2599826c75b5?q=80&w=1973&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: '3',
      name: 'Hyundai Accent',
      price: '3.200.000 FCFA',
      model: 'Accent GL',
      year: 2012,
      color: 'Azul',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
      description: 'Sedán compacto con bajo consumo de combustible. Equipado con aire acondicionado y dirección asistida.',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2064&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1496147195884-6ab7f7c0a027?q=80&w=2071&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: '4',
      name: 'Hyundai Elantra',
      price: '4.100.000 FCFA',
      model: 'Elantra GLS',
      year: 2013,
      color: 'Blanco',
      imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
      description: 'Sedán mediano con amplio espacio interior. Incluye reproductor CD y aire acondicionado.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=2059&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1601829534265-c4cab49f90cb?q=80&w=1972&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507833423370-a126b89d394b?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=2071&auto=format&fit=crop'
      ]
    },
    {
      id: '5',
      name: 'Toyota Corolla',
      price: '3.900.000 FCFA',
      model: 'Corolla LE',
      year: 2011,
      color: 'Rojo',
      imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
      description: 'Sedán confiable y económico. Equipado con sistema de frenos ABS y airbags.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1543465077-db45d34b88a5?q=80&w=2065&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=2074&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2083&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: '6',
      name: 'Hyundai i10',
      price: '2.500.000 FCFA',
      model: 'i10 GL',
      year: 2014,
      color: 'Gris',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
      description: 'Compacto ideal para ciudad. Bajo consumo de combustible y fácil de estacionar.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 5,
      gallery: [
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=2072&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=2071&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=2070&auto=format&fit=crop'
      ]
    },
  ];

  return vehiclesData.map(vehicle => ({
    ...vehicle,
    image: vehicle.imageUrl
  }));
};

export const vehicles = createVehicles();
