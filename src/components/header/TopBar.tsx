
import React from 'react';
import { Phone, LogIn, UserCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useIsMobile } from '@/hooks/use-mobile';

const TopBar = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-primary py-2">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className={`${isMobile ? 'hidden' : 'flex'} items-center text-white`}>
          <Phone className="h-4 w-4 mr-2" />
          <span className="text-sm">+240 222 176 082</span>
        </div>
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-primary/80 p-0">
                <LogIn className="h-4 w-4 mr-1" />
                Iniciar Sesión
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Iniciar Sesión</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm">Email</label>
                  <input
                    id="email"
                    type="email"
                    className="p-2 border rounded"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password" className="text-sm">Contraseña</label>
                  <input
                    id="password"
                    type="password"
                    className="p-2 border rounded"
                    placeholder="••••••••"
                  />
                </div>
                <Button className="w-full mt-2">Iniciar Sesión</Button>
              </div>
            </DialogContent>
          </Dialog>
          <span className="text-white">|</span>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-white hover:bg-primary/80 p-0">
                <UserCircle className="h-4 w-4 mr-1" />
                Registrarse
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Crear una cuenta</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="grid gap-2">
                    <label htmlFor="firstName" className="text-sm">Nombre</label>
                    <input
                      id="firstName"
                      type="text"
                      className="p-2 border rounded"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="lastName" className="text-sm">Apellido</label>
                    <input
                      id="lastName"
                      type="text"
                      className="p-2 border rounded"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="registerEmail" className="text-sm">Email</label>
                  <input
                    id="registerEmail"
                    type="email"
                    className="p-2 border rounded"
                    placeholder="tucorreo@ejemplo.com"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="registerPassword" className="text-sm">Contraseña</label>
                  <input
                    id="registerPassword"
                    type="password"
                    className="p-2 border rounded"
                    placeholder="••••••••"
                  />
                </div>
                <Button className="w-full mt-2">Crear Cuenta</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
