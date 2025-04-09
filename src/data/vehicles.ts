
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
}

// Convertimos los datos para que sean compatibles con ambos formatos de componentes
const createVehicles = () => {
  const vehiclesData = [
    {
      id: '1',
      name: 'Mercedes-Benz GLA',
      price: '$78,500',
      model: 'GLA 200',
      year: 2023,
      color: 'Gris Plata',
      imageUrl: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
      description: 'Elegante SUV con motor turbo de alto rendimiento. Incluye sistema de navegación avanzado y asientos de cuero premium.',
      featured: true,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5
    },
    {
      id: '2',
      name: 'Audi Q5',
      price: '$82,300',
      model: 'Q5 Sportback',
      year: 2023,
      color: 'Negro',
      imageUrl: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop',
      description: 'SUV deportivo con tracción Quattro. Equipado con tecnología de asistencia al conductor y sistema de sonido Bang & Olufsen.',
      featured: true,
      transmission: 'Automático',
      fuel: 'Diésel',
      doors: 5
    },
    {
      id: '3',
      name: 'BMW X3',
      price: '$75,900',
      model: 'X3 xDrive30i',
      year: 2023,
      color: 'Azul Marino',
      imageUrl: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop',
      description: 'Combinación perfecta de lujo y rendimiento con motor TwinPower Turbo. Incluye techo panorámico y pantalla táctil de 12.3".',
      featured: true,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5
    },
    {
      id: '4',
      name: 'Volkswagen Tiguan',
      price: '$45,700',
      model: 'Tiguan Highline',
      year: 2023,
      color: 'Blanco',
      imageUrl: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop',
      description: 'SUV familiar espacioso con excelente economía de combustible. Cuenta con asistente de estacionamiento y sistema de infoentretenimiento moderno.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5
    },
    {
      id: '5',
      name: 'Toyota Corolla',
      price: '$32,900',
      model: 'Corolla Hybrid',
      year: 2023,
      color: 'Rojo',
      imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop',
      description: 'Sedán híbrido eficiente con avanzadas características de seguridad. Incluye Toyota Safety Sense 2.0 y pantalla multimedia de 8".',
      featured: false,
      transmission: 'Automático',
      fuel: 'Híbrido',
      doors: 4
    },
    {
      id: '6',
      name: 'Honda CR-V',
      price: '$49,800',
      model: 'CR-V Touring',
      year: 2023,
      color: 'Gris Oscuro',
      imageUrl: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
      description: 'SUV versátil con amplio espacio de carga. Equipado con sistema de tracción integral y tecnología Honda Sensing.',
      featured: false,
      transmission: 'Automático',
      fuel: 'Gasolina',
      doors: 5
    },
  ];

  // Añadimos compatibilidad con el campo image para los componentes existentes
  return vehiclesData.map(vehicle => ({
    ...vehicle,
    image: vehicle.imageUrl
  }));
};

export const vehicles = createVehicles();
