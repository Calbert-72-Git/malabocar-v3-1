import React from 'react';
import { 
  Drawer, 
  DrawerClose, 
  DrawerContent, 
  DrawerFooter, 
  DrawerHeader, 
  DrawerTitle, 
  DrawerTrigger 
} from "@/components/ui/drawer";
import { ShoppingCart, X, Plus, Minus, Trash2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { cartItems, removeFromCart, clearCart, totalItems, totalPrice, updateQuantity } = useCart();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    // Para futuras implementaciones de checkout
    navigate('/checkout');
  };

  const handleWhatsAppCheckout = () => {
    // Crear mensaje para WhatsApp con detalles de los vehículos
    let message = "Hola, estoy interesado en comprar los siguientes vehículos:\n\n";
    
    cartItems.forEach(item => {
      message += `*${item.name} - ${item.model} (${item.year})*\n`;
      message += `Precio: ${item.price}\n`;
      message += `Cantidad: ${item.quantity}\n`;
      message += `Detalles: ${item.transmission}, ${item.fuel}, ${item.doors} puertas\n\n`;
    });
    
    message += `*Total: ${totalPrice.toLocaleString()} FCFA*\n\n`;
    message += "Por favor, envíeme más información sobre cómo proceder con el pago.";
    
    // Codificar mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/240555123456?text=${encodedMessage}`, '_blank');
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs min-w-5 flex justify-center">
              {totalItems}
            </Badge>
          )}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh] overflow-y-auto">
        <DrawerHeader className="border-b pb-4">
          <DrawerTitle className="text-xl flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Carrito de Compra
            <span className="text-sm text-muted-foreground ml-auto">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          </DrawerTitle>
        </DrawerHeader>

        {cartItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingCart className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">Su carrito está vacío</p>
            <DrawerClose asChild>
              <Button variant="outline" className="mt-4" onClick={() => navigate('/catalog')}>
                Explorar vehículos
              </Button>
            </DrawerClose>
          </div>
        ) : (
          <>
            <div className="p-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-start gap-4 py-4 border-b last:border-0">
                  <div className="h-16 w-16 rounded overflow-hidden flex-shrink-0">
                    <img 
                      src={item.imageUrl || item.image} 
                      alt={item.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-muted-foreground text-xs">{item.year} · {item.model}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-7 w-7" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="text-center w-6">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-7 w-7" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-7 w-7 ml-auto text-muted-foreground hover:text-destructive" 
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-medium">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <Separator />
            
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{totalPrice.toLocaleString()} FCFA</span>
              </div>
              <div className="flex justify-between font-medium text-lg mt-4">
                <span>Total</span>
                <span>{totalPrice.toLocaleString()} FCFA</span>
              </div>
            </div>
          </>
        )}

        <DrawerFooter className="border-t pt-4">
          {cartItems.length > 0 && (
            <>
              <Button className="w-full mb-2" onClick={handleCheckout}>
                Proceder al pago
              </Button>
              <Button 
                variant="default" 
                className="w-full bg-green-500 hover:bg-green-600 mb-2" 
                onClick={handleWhatsAppCheckout}
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Proceder al pago por WhatsApp
              </Button>
              <Button variant="outline" className="w-full" onClick={clearCart}>
                Vaciar carrito
              </Button>
            </>
          )}
          <DrawerClose asChild>
            <Button variant="ghost">Cerrar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
