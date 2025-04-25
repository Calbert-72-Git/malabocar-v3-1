
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
      imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
      description: 'Sedán familiar confiable con excelente consumo de combustible. Incluye aire acondicionado y sistema de audio.',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    {
      id: '2',
      name: 'Toyota Carina',
      price: '2.800.000 FCFA',
      model: 'Carina E',
      year: 2008,
      color: 'Verde',
      imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000',
      description: 'Vehículo económico y duradero. Perfecto para uso diario con buen espacio interior.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    {
      id: '3',
      name: 'Hyundai Accent',
      price: '3.200.000 FCFA',
      model: 'Accent GL',
      year: 2012,
      color: 'Azul',
      imageUrl: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000',
      description: 'Sedán compacto con bajo consumo de combustible. Equipado con aire acondicionado y dirección asistida.',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    {
      id: '4',
      name: 'Hyundai Elantra',
      price: '4.100.000 FCFA',
      model: 'Elantra GLS',
      year: 2013,
      color: 'Blanco',
      imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
      description: 'Sedán mediano con amplio espacio interior. Incluye reproductor CD y aire acondicionado.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    {
      id: '5',
      name: 'Toyota Corolla',
      price: '3.900.000 FCFA',
      model: 'Corolla LE',
      year: 2011,
      color: 'Rojo',
      imageUrl: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1000',
      description: 'Sedán confiable y económico. Equipado con sistema de frenos ABS y airbags.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000'
      ]
    },
    {
      id: '6',
      name: 'Hyundai i10',
      price: '2.500.000 FCFA',
      model: 'i10 GL',
      year: 2014,
      color: 'Gris',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000',
      description: 'Compacto ideal para ciudad. Bajo consumo de combustible y fácil de estacionar.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 5,
      gallery: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&q=80&w=1000',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000'
      ]
    },
  ];

  return vehiclesData.map(vehicle => ({
    ...vehicle,
    image: vehicle.imageUrl
  }));
};

export const vehicles = createVehicles();
