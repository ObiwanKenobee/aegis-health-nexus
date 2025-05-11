
import React from 'react';
import { Button } from '@/components/ui/button';
import { ZoomIn, ZoomOut, Layers, Map, Home } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const MapControls: React.FC = () => {
  return (
    <div className="absolute bottom-4 right-4 flex flex-col gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full shadow-md">
            <Layers className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Map Layers</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span className="h-2 w-2 rounded-full bg-health-alert mr-2" />
              <span>Immunization Dropout</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-2 w-2 rounded-full bg-health-warning mr-2" />
              <span>Cold Chain Breaches</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span className="h-2 w-2 rounded-full bg-health-primary mr-2" />
              <span>Misinformation Reports</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Base Map</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <Map className="h-4 w-4 mr-2" />
              <span>Street</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Map className="h-4 w-4 mr-2" />
              <span>Satellite</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Map className="h-4 w-4 mr-2" />
              <span>Terrain</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button variant="secondary" size="icon" className="rounded-full shadow-md">
        <ZoomIn className="h-5 w-5" />
      </Button>
      <Button variant="secondary" size="icon" className="rounded-full shadow-md">
        <ZoomOut className="h-5 w-5" />
      </Button>
      <Button variant="secondary" size="icon" className="rounded-full shadow-md">
        <Home className="h-5 w-5" />
      </Button>
    </div>
  );
};
