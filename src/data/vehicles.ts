
export interface Vehicle {
  id: string;
  name: string;
  price: string;
  model: string;
  year: number;
  imageUrl: string;
  description: string;
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    name: 'Mercedes-Benz GLA',
    price: '$78,500',
    model: 'GLA 200',
    year: 2023,
    imageUrl: '/vehicle1.jpg',
    description: 'Elegante SUV con motor turbo de alto rendimiento. Incluye sistema de navegación avanzado y asientos de cuero premium.'
  },
  {
    id: '2',
    name: 'Audi Q5',
    price: '$82,300',
    model: 'Q5 Sportback',
    year: 2023,
    imageUrl: '/vehicle2.jpg',
    description: 'SUV deportivo con tracción Quattro. Equipado con tecnología de asistencia al conductor y sistema de sonido Bang & Olufsen.'
  },
  {
    id: '3',
    name: 'BMW X3',
    price: '$75,900',
    model: 'X3 xDrive30i',
    year: 2023,
    imageUrl: '/vehicle3.jpg',
    description: 'Combinación perfecta de lujo y rendimiento con motor TwinPower Turbo. Incluye techo panorámico y pantalla táctil de 12.3".'
  },
  {
    id: '4',
    name: 'Volkswagen Tiguan',
    price: '$45,700',
    model: 'Tiguan Highline',
    year: 2023,
    imageUrl: '/vehicle4.jpg',
    description: 'SUV familiar espacioso con excelente economía de combustible. Cuenta con asistente de estacionamiento y sistema de infoentretenimiento moderno.'
  },
  {
    id: '5',
    name: 'Toyota Corolla',
    price: '$32,900',
    model: 'Corolla Hybrid',
    year: 2023,
    imageUrl: '/vehicle5.jpg',
    description: 'Sedán híbrido eficiente con avanzadas características de seguridad. Incluye Toyota Safety Sense 2.0 y pantalla multimedia de 8".'
  },
  {
    id: '6',
    name: 'Honda CR-V',
    price: '$49,800',
    model: 'CR-V Touring',
    year: 2023,
    imageUrl: '/vehicle6.jpg',
    description: 'SUV versátil con amplio espacio de carga. Equipado con sistema de tracción integral y tecnología Honda Sensing.'
  },
];
