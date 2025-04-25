
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
      imageUrl: '/vehicle1.jpg',
      description: 'Sedán familiar confiable con excelente consumo de combustible. Incluye aire acondicionado y sistema de audio.',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        '/vehicle1.jpg',
        '/vehicle2.jpg',
        '/vehicle3.jpg',
        '/vehicle4.jpg',
        '/vehicle5.jpg'
      ]
    },
    {
      id: '2',
      name: 'Toyota Carina',
      price: '2.800.000 FCFA',
      model: 'Carina E',
      year: 2008,
      color: 'Verde',
      imageUrl: '/vehicle2.jpg',
      description: 'Vehículo económico y duradero. Perfecto para uso diario con buen espacio interior.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        '/vehicle2.jpg',
        '/vehicle3.jpg',
        '/vehicle4.jpg',
        '/vehicle5.jpg',
        '/vehicle6.jpg'
      ]
    },
    {
      id: '3',
      name: 'Hyundai Accent',
      price: '3.200.000 FCFA',
      model: 'Accent GL',
      year: 2012,
      color: 'Azul',
      imageUrl: '/vehicle3.jpg',
      description: 'Sedán compacto con bajo consumo de combustible. Equipado con aire acondicionado y dirección asistida.',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        '/vehicle3.jpg',
        '/vehicle4.jpg',
        '/vehicle5.jpg',
        '/vehicle6.jpg',
        '/vehicle1.jpg'
      ]
    },
    {
      id: '4',
      name: 'Hyundai Elantra',
      price: '4.100.000 FCFA',
      model: 'Elantra GLS',
      year: 2013,
      color: 'Blanco',
      imageUrl: '/vehicle4.jpg',
      description: 'Sedán mediano con amplio espacio interior. Incluye reproductor CD y aire acondicionado.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        '/vehicle4.jpg',
        '/vehicle5.jpg',
        '/vehicle6.jpg',
        '/vehicle1.jpg',
        '/vehicle2.jpg'
      ]
    },
    {
      id: '5',
      name: 'Toyota Corolla',
      price: '3.900.000 FCFA',
      model: 'Corolla LE',
      year: 2011,
      color: 'Rojo',
      imageUrl: '/vehicle5.jpg',
      description: 'Sedán confiable y económico. Equipado con sistema de frenos ABS y airbags.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        '/vehicle5.jpg',
        '/vehicle6.jpg',
        '/vehicle1.jpg',
        '/vehicle2.jpg',
        '/vehicle3.jpg'
      ]
    },
    {
      id: '6',
      name: 'Hyundai i10',
      price: '2.500.000 FCFA',
      model: 'i10 GL',
      year: 2014,
      color: 'Gris',
      imageUrl: '/vehicle6.jpg',
      description: 'Compacto ideal para ciudad. Bajo consumo de combustible y fácil de estacionar.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 5,
      gallery: [
        '/vehicle6.jpg',
        '/vehicle1.jpg',
        '/vehicle2.jpg',
        '/vehicle3.jpg',
        '/vehicle4.jpg'
      ]
    },
  ];

  return vehiclesData.map(vehicle => ({
    ...vehicle,
    image: vehicle.imageUrl
  }));
};

export const vehicles = createVehicles();
