
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Reemplaza con tu número de WhatsApp real
    window.open('https://wa.me/240555123456?text=Hola,%20estoy%20interesado%20en%20un%20vehículo', '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className="whatsapp-button rounded-full bg-green-500 hover:bg-green-600 h-16 w-16 flex items-center justify-center shadow-xl"
    >
      <MessageSquare className="h-7 w-7 text-white" />
      <span className="sr-only">Chat por WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;

