
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
        <VehicleGallery />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
};

export default Index;

