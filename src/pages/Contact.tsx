
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');
    // Aquí iría la lógica para enviar el formulario
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contacto</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros para cualquier consulta o para programar una visita.
              </p>
            </div>
          </div>
        </section>
        
        {/* Información de contacto + formulario */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Información de contacto */}
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Información de Contacto</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Teléfono</h3>
                      <p className="text-gray-600 mb-1">Ventas: +240 222 176 082</p>
                      <p className="text-gray-600">Soporte: +240 555 789 012</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Correo Electrónico</h3>
                      <p className="text-gray-600 mb-1">info@malabocar.com</p>
                      <p className="text-gray-600">ventas@malabocar.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Dirección</h3>
                      <p className="text-gray-600">
                        Avenida de la Independencia 123<br />
                        Malabo<br />
                        Guinea Ecuatorial
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Horario</h3>
                      <p className="text-gray-600 mb-1">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-gray-600 mb-1">Sábado: 9:00 - 14:00</p>
                      <p className="text-gray-600">Domingo: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Formulario de contacto */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Envíanos un Mensaje</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                        Nombre
                      </label>
                      <Input 
                        id="nombre" 
                        name="nombre" 
                        required 
                        placeholder="Tu nombre" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Correo Electrónico
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        required 
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <Input 
                      id="telefono" 
                      name="telefono" 
                      placeholder="+240 XXX XXX XXX" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                      Asunto
                    </label>
                    <Input 
                      id="asunto" 
                      name="asunto" 
                      required 
                      placeholder="Asunto de tu mensaje" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                      Mensaje
                    </label>
                    <Textarea 
                      id="mensaje" 
                      name="mensaje" 
                      required 
                      placeholder="Escribe tu mensaje aquí..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full flex items-center justify-center gap-2">
                    <Send className="h-4 w-4" />
                    Enviar Mensaje
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mapa */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127356.07222473012!2d8.675394564148898!3d3.7499933862430566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1068a023b54f0d99%3A0xde3a21a56f11684!2sMalabo%2C%20Guinea%20Ecuatorial!5e0!3m2!1ses!2ses!4v1681230784571!5m2!1ses!2ses" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Contact;

