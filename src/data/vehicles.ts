//CAlbert 72: Origen y listado de los vehículos y lugar de edición
export interface Vehicle {
  id: string;
  name: string;
  price: string;
  model: string;
  year: number;
  color: string;
  imageUrl: string;
  image?: string; // Para compatibilidad con componentes existentes, imágenes en estye caso
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
      //Calbert 72: Coche 1
      id: '1', 
      name: 'Toyota Avensis 1',
      price: '3.500.000 FCFA',
      model: 'Avensis 2.0',
      year: 2010,
      color: 'Gris Plata',
      imageUrl: './public/coches/Toyota Avensis 1.A1jpeg.jpeg',
      description: 'Sedán familiar confiable con excelente consumo de combustible. Incluye aire acondicionado y sistema de audio.',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        './public/coches/Toyota Avensis 1.A1jpeg.jpeg',
        './public/coches/Toyota Avensis 1.A2jpeg.jpeg',
        './public/coches/Toyota Avensis 1.A3jpeg.jpeg',
        './public/coches/Toyota Avensis 1.A1jpeg.jpeg',
        './public/coches/Toyota Avensis 1.A1jpeg.jpeg'
      ]
    },
    {
      //Calbert 72: Coche 2
      id: '2',
      name: 'Toyota Avensis 2',
      price: '3.800.000 FCFA',
      model: 'Carina E',
      year: 2008,
      color: 'Verde',
      imageUrl: './public/coches/Avensis 2A.jpeg',
      description: 'Vehículo económico y duradero. Perfecto para uso diario con buen espacio interior.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        './public/coches/Avensis 2A.jpeg',
        './public/coches/Avensis 2B.jpeg',
        './public/coches/Avensis 2C.jpeg',
        './public/coches/Avensis 2D.jpeg'
      ]
    },
    {
      //Calbert 72: Coche 3
      id: '3',
      name: 'Toyota Hilux',
      price: '9.200.000 FCFA',
      model: 'Cbt GL',
      year: 2012,
      color: 'Blanco',
      imageUrl: './public/coches/hilux A.jpg',
      description: 'Hilux compacto con bajo consumo de combustible. Equipado con aire acondicionado, dirección asistida',
      featured: true,
      transmission: 'Manual',
      fuel: 'Gasuel',
      doors: 4,
      gallery: [
        './public/coches/hilux A.jpg',
        './public/coches/hilux B.jpg',
        './public/coches/hilux C.jpg',
        './public/coches/hilux A.jpg'
      ]
    },
    {
      //Calbert 72: Coche 4
      id: '4',
      name: 'Lexus RX 350',
      price: '7.500.000 FCFA',
      model: 'RX 350',
      year: 2019,
      color: 'Blanco',
      imageUrl: './public/coches/LEXUS RX 350 de 2015_A.jpg',
      description: 'Lexus RX largo con amplio espacio interior. Incluye reproductor CD y aire acondicionado.',
      featured: false,
      transmission: 'Manual',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        './public/coches/LEXUS RX 350 de 2015_A.jpg',
        './public/coches/LEXUS RX 350 de 2015_B.jpg',
        './public/coches/LEXUS RX 350 de 2015_C.jpg'
      ]
    },
    {
      //Calbert 72: Coche 5
      id: '5',
      name: 'Toyota Starlet',
      price: '3.900.000 FCFA',
      model: 'starlet 2021',
      year: 2021,
      color: 'Rojo',
      imageUrl: './public/coches/STARLET 2021.jpg',
      description: 'Sedán confiable y económico. Equipado con sistema de frenos ABS y airbags.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 4,
      gallery: [
        './public/coches/STARLET 2021.jpg',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1000',
        './public/coches/STARLET 2021.jpg'
      ]
    },
    {
      //Calbert 72: Coche 6
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
    {
      //Calbert 72: Coche 7
      id: '7',
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
