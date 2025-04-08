
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'sonner';
import { Vehicle } from '@/data/vehicles';

interface CartItem extends Vehicle {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (vehicle: Vehicle) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  updateQuantity: (id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  // Cargar carrito del localStorage
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart));
      } catch (error) {
        console.error('Error al cargar el carrito:', error);
      }
    }
  }, []);

  // Actualizar localStorage y totales cuando cambie el carrito
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
    
    const items = cartItems.reduce((total, item) => total + item.quantity, 0);
    setTotalItems(items);
    
    // Convertir el precio de string a número para el cálculo
    const price = cartItems.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace('$', '').replace(',', ''));
      return isNaN(itemPrice) ? total : total + (itemPrice * item.quantity);
    }, 0);
    
    setTotalPrice(price);
  }, [cartItems]);

  const addToCart = (vehicle: Vehicle) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === vehicle.id);
      
      if (existingItem) {
        toast.success(`${vehicle.name} añadido al carrito (${existingItem.quantity + 1})`);
        return prev.map(item => 
          item.id === vehicle.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        toast.success(`${vehicle.name} añadido al carrito`);
        return [...prev, { ...vehicle, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems(prev => {
      const item = prev.find(item => item.id === id);
      if (item) {
        toast.info(`${item.name} eliminado del carrito`);
      }
      return prev.filter(item => item.id !== id);
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
    toast.info('Carrito vaciado');
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      totalItems,
      totalPrice,
      updateQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
