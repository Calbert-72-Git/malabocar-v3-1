
import React from 'react';

const Header = () => {
  return (
    <header className="w-full">
      <div className="header-banner w-full h-[400px] flex items-center justify-center">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Calbert 72</h1>
          <p className="text-xl md:text-2xl text-white font-light">
            Vehículos de calidad para clientes exigentes
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
