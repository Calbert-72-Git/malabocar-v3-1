
import React from 'react';
import Header from '@/components/Header';
import VehicleGallery from '@/components/VehicleGallery';
import WhatsAppButton from '@/components/WhatsAppButton';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <VehicleGallery />
        </div>
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;
