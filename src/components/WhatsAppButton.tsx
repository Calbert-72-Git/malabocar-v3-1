
import React from 'react';
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WhatsAppButtonProps {
  message?: string;
  phone?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

const WhatsAppButton = ({
  message = "Hola, estoy interesado en un vehículo",
  phone = "240222176082",
  className = "whatsapp-button rounded-full bg-green-500 hover:bg-green-600 h-16 w-16 flex items-center justify-center shadow-xl",
  children,
  variant = "default"
}: WhatsAppButtonProps) => {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <Button 
      onClick={handleWhatsAppClick}
      className={className}
      variant={variant}
    >
      {children || (
        <>
          <MessageSquare className="h-7 w-7 text-white" />
          <span className="sr-only">Chat por WhatsApp</span>
        </>
      )}
    </Button>
  );
};

export default WhatsAppButton;
