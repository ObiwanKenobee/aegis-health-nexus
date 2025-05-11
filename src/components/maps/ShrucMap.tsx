
import React, { useRef, useEffect, useState } from 'react';
import { MapControls } from './MapControls';

// This is a placeholder for an actual map library implementation
// In a real app, you would use mapbox-gl or similar

interface ShrucMapProps {
  center?: [number, number];
  zoom?: number;
  overlayType?: 'dropout' | 'coldchain' | 'misinformation' | 'all';
}

const ShrucMap: React.FC<ShrucMapProps> = ({
  center = [0, 0],
  zoom = 5,
  overlayType = 'all'
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Here you would initialize your map library
    // For example with Mapbox:
    // 
    // if (mapRef.current && !map.current) {
    //   map.current = new mapboxgl.Map({
    //     container: mapRef.current,
    //     style: 'mapbox://styles/mapbox/light-v11',
    //     center: center,
    //     zoom: zoom
    //   });
    // }
    
    console.log(`Map would update overlay to: ${overlayType}`);
    
    // Return cleanup function
    return () => {
      // map.current?.remove();
    };
  }, [center, zoom, overlayType]);

  return (
    <div className="relative w-full h-full">
      <div 
        ref={mapRef}
        className="map-container bg-muted/30 flex items-center justify-center"
      >
        {isLoading ? (
          <div className="text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-health-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <p className="mt-2 text-sm text-muted-foreground">Loading map data...</p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">SHRUC Map Visualization</p>
            <p className="text-sm text-muted-foreground mb-4">
              This is a placeholder for the actual interactive map.<br/>
              In a real implementation, we would use Mapbox or Leaflet.
            </p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <div className="health-card bg-red-100">
                <p className="health-label">Immunization Dropout</p>
                <p className="health-stat text-health-alert">12.4%</p>
              </div>
              <div className="health-card bg-amber-100">
                <p className="health-label">Cold Chain Breaches</p>
                <p className="health-stat text-health-warning">6</p>
              </div>
              <div className="health-card bg-blue-100">
                <p className="health-label">Misinformation Reports</p>
                <p className="health-stat text-health-primary">24</p>
              </div>
              <div className="health-card bg-green-100">
                <p className="health-label">Field Teams Active</p>
                <p className="health-stat text-health-success">8</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <MapControls />
    </div>
  );
};

export default ShrucMap;
