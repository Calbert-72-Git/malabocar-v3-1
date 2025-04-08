
import React from 'react';
import { Vehicle } from '@/data/vehicles';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CatalogTableViewProps {
  vehicles: Vehicle[];
}

const CatalogTableView: React.FC<CatalogTableViewProps> = ({ vehicles }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Vehículo</TableHead>
            <TableHead>Modelo</TableHead>
            <TableHead>Año</TableHead>
            <TableHead>Color</TableHead>
            <TableHead>Transmisión</TableHead>
            <TableHead>Combustible</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <img 
                    src={vehicle.imageUrl} 
                    alt={vehicle.name} 
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                  {vehicle.name}
                  {vehicle.featured && (
                    <Badge className="ml-2 bg-primary text-white">Destacado</Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.year}</TableCell>
              <TableCell>{vehicle.color}</TableCell>
              <TableCell>{vehicle.transmission}</TableCell>
              <TableCell>{vehicle.fuel}</TableCell>
              <TableCell className="font-bold text-primary">{vehicle.price}</TableCell>
              <TableCell>
                <Link to={`/catalog/${vehicle.id}`}>
                  <Button size="sm" className="group">
                    Ver
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CatalogTableView;
