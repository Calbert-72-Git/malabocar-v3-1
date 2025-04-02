
import React from 'react';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-blue-800 to-blue-900">
      <div className="header-banner w-full h-[500px] flex items-center justify-center">
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Calbert <span className="text-yellow-400">72</span>
          </h1>
          <p className="text-xl md:text-2xl text-white font-light max-w-2xl mx-auto">
            Vehículos de calidad para clientes exigentes - Elegancia y potencia en cada modelo
          </p>
          <div className="mt-8">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Ver catálogo
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
