
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

// Convertimos los datos para que sean compatibles con ambos formatos de componentes
const createVehicles = () => {
  const vehiclesData = [
    {
      id: '1',
      name: 'Mercedes-Benz GLA',
      price: '78.500.000 FCFA',
      model: 'GLA 200',
      year: 2023,
      color: 'Gris Plata',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
      description: 'Elegante SUV con motor turbo de alto rendimiento. Incluye sistema de navegación avanzado y asientos de cuero premium.',
      featured: true,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5,
      gallery: [
        'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=2025&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1550855909-af303d2ecd31?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2074&auto=format&fit=crop'
      ]
    },
    {
      id: '2',
      name: 'Audi Q5',
      price: '82.300.000 FCFA',
      model: 'Q5 Sportback',
      year: 2023,
      color: 'Negro',
      imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
      description: 'SUV deportivo con tracción Quattro. Equipado con tecnología de asistencia al conductor y sistema de sonido Bang & Olufsen.',
      featured: true,
      transmission: 'Automático',
      fuel: 'Diésel',
      doors: 5,
      gallery: [
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1606664922098-b55a47b21f47?q=80&w=1964&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1633507107662-8d8798ebdb94?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1614887130225-bbcaa09b3e1e?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: '3',
      name: 'BMW X3',
      price: '75.900.000 FCFA',
      model: 'X3 xDrive30i',
      year: 2023,
      color: 'Azul Marino',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
      description: 'Combinación perfecta de lujo y rendimiento con motor TwinPower Turbo. Incluye techo panorámico y pantalla táctil de 12.3".',
      featured: true,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5,
      gallery: [
        'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2034&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1604055938039-12816f0fb634?q=80&w=1935&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1555353540-64580b51c258?q=80&w=2126&auto=format&fit=crop'
      ]
    },
    {
      id: '4',
      name: 'Volkswagen Tiguan',
      price: '45.700.000 FCFA',
      model: 'Tiguan Highline',
      year: 2023,
      color: 'Blanco',
      imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
      description: 'SUV familiar espacioso con excelente economía de combustible. Cuenta con asistente de estacionamiento y sistema de infoentretenimiento moderno.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5,
      gallery: [
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1609708577191-b93924c15323?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1613835842937-22b48d0ed39f?q=80&w=1974&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1514867644123-6385d58d3cd4?q=80&w=2010&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1625378667030-c5df9a8fbafa?q=80&w=1964&auto=format&fit=crop'
      ]
    },
    {
      id: '5',
      name: 'Toyota Corolla',
      price: '32.900.000 FCFA',
      model: 'Corolla Hybrid',
      year: 2023,
      color: 'Rojo',
      imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
      description: 'Sedán híbrido eficiente con avanzadas características de seguridad. Incluye Toyota Safety Sense 2.0 y pantalla multimedia de 8".',
      featured: false,
      transmission: 'Automático',
      fuel: 'Híbrido',
      doors: 4,
      gallery: [
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1590347394450-2599826c75b5?q=80&w=1973&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1580128636675-ebefd0d9e5fa?q=80&w=2072&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600705809404-8043826ebd45?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1621693142084-95ca2807a8f3?q=80&w=2070&auto=format&fit=crop'
      ]
    },
    {
      id: '6',
      name: 'Honda CR-V',
      price: '49.800.000 FCFA',
      model: 'CR-V Touring',
      year: 2023,
      color: 'Gris Oscuro',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
      description: 'SUV versátil con amplio espacio de carga. Equipado con sistema de tracción integral y tecnología Honda Sensing.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5,
      gallery: [
        'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1597007066905-a420efe1795c?q=80&w=2070&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=2134&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1618744994308-4856c71a51d7?q=80&w=2072&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533590453576-d199de5f5782?q=80&w=2070&auto=format&fit=crop'
      ]
    },
  ];

  // Añadimos compatibilidad con el campo image para los componentes existentes
  return vehiclesData.map(vehicle => ({
    ...vehicle,
    image: vehicle.imageUrl
  }));
};

export const vehicles = createVehicles();
