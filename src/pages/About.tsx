{/* Calbert 72: Página de nosotros */}
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Car, Shield, Users, Award, Star, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nosotros</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                En Malabo Car, nos dedicamos a proporcionar vehículos de calidad y un servicio excepcional a nuestros clientes en Guinea Ecuatorial desde 2010.
              </p>
            </div>
          </div>
        </section>
        
        {/* Nuestra historia */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestra Historia</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Fundada en 2010, Malabo Car nació con la visión de transformar la experiencia de compra de vehículos en Guinea Ecuatorial. Comenzamos como un pequeño concesionario con solo 5 vehículos y un equipo de 3 personas.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Con el paso de los años, hemos crecido hasta convertirnos en uno de los concesionarios más respetados del país, con una amplia selección de vehículos de calidad y un equipo de profesionales dedicados a ofrecer un servicio excepcional.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hoy, nos enorgullece haber ayudado a miles de clientes a encontrar el vehículo perfecto para sus necesidades y seguimos comprometidos con nuestra misión de proporcionar calidad, confianza y excelencia en todo lo que hacemos.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/about-history.jpg" 
                  alt="Historia de Malabo Car" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Nuestros valores */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Valores</h2>
              <p className="text-gray-600 leading-relaxed">
                Estos son los principios que guían nuestro trabajo diario y nuestro compromiso con cada cliente.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Confianza</h3>
                <p className="text-gray-600">
                  Construimos relaciones duraderas basadas en la transparencia y la honestidad con cada cliente.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Excelencia</h3>
                <p className="text-gray-600">
                  Nos esforzamos por superar las expectativas en cada aspecto de nuestro servicio.
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ThumbsUp className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Compromiso</h3>
                <p className="text-gray-600">
                  Estamos dedicados a proporcionar el mejor servicio y soporte a largo plazo a nuestros clientes.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Nuestro equipo */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestro Equipo</h2>
              <p className="text-gray-600 leading-relaxed">
                El corazón de Malabo Car es nuestro equipo de profesionales dedicados, comprometidos con proporcionar un servicio excepcional.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/team-member1.jpg" 
                    alt="Director General" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Sergio "Nombre de prueba"</h3>
                  <p className="text-primary font-medium mb-3">Director General</p>
                  <p className="text-gray-600">
                    Con más de 15 años de experiencia en el sector automotriz, Miguel lidera nuestra empresa con visión y dedicación.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/team-member2.jpg" 
                    alt="Jefa de Ventas" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Dorcas Ana</h3>
                  <p className="text-primary font-medium mb-3">Jefa de Ventas</p>
                  <p className="text-gray-600">
                    Elena se asegura de que cada cliente reciba una atención personalizada y encuentre el vehículo perfecto.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="/team-member3.jpg" 
                    alt="Jefe de Servicio Técnico" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.svg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">Carlos Ondo</h3>
                  <p className="text-primary font-medium mb-3">Jefe de Servicio Técnico</p>
                  <p className="text-gray-600">
                    Con su experiencia y conocimiento técnico, Carlos garantiza que todos nuestros vehículos cumplan con los más altos estándares de calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default About;
