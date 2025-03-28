
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Replace this with your actual WhatsApp number
    window.open('https://wa.me/34123456789?text=Hola,%20estoy%20interesado%20en%20un%20vehículo', '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className="whatsapp-button rounded-full bg-green-500 hover:bg-green-600 h-14 w-14 flex items-center justify-center shadow-lg"
    >
      <MessageSquare className="h-6 w-6 text-white" />
      <span className="sr-only">Chat por WhatsApp</span>
    </Button>
  );
};

export default WhatsAppButton;
