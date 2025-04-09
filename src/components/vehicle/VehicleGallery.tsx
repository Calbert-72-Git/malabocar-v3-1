
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";

type VehicleGalleryProps = {
  images: string[];
  alt: string;
};

const VehicleGallery: React.FC<VehicleGalleryProps> = ({ images, alt }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="overflow-hidden">
              <AspectRatio ratio={16/9} className="bg-muted">
                <img 
                  src={image} 
                  alt={`${alt} - Imagen ${index + 1}`} 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>

      {/* Miniaturas */}
      <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div 
            key={index} 
            className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden border-2 border-transparent hover:border-primary transition-all cursor-pointer"
          >
            <img 
              src={image} 
              alt={`${alt} - Miniatura ${index + 1}`} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleGallery;
