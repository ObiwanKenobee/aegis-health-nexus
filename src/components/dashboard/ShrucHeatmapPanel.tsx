
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Brain, Shield, Thermometer, Bell } from 'lucide-react';
import ShrucMap from '@/components/maps/ShrucMap';

const ShrucHeatmapPanel: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<'dropout' | 'coldchain' | 'misinformation' | 'all'>('all');
  const [showAIPredictions, setShowAIPredictions] = useState(true);
  const [showConsentLayer, setShowConsentLayer] = useState(false);

  const handleLayerChange = (value: string) => {
    setActiveLayer(value as 'dropout' | 'coldchain' | 'misinformation' | 'all');
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Shield className="h-5 w-5 text-health-primary" />
            SHRUC Heatmap
          </CardTitle>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <Switch 
                id="show-ai"
                checked={showAIPredictions}
                onCheckedChange={setShowAIPredictions}
                className="data-[state=checked]:bg-health-primary"
              />
              <Label htmlFor="show-ai" className="text-xs flex items-center gap-1">
                <Brain className="h-3 w-3" /> AI Predictions
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch 
                id="show-consent"
                checked={showConsentLayer}
                onCheckedChange={setShowConsentLayer}
                className="data-[state=checked]:bg-health-success"
              />
              <Label htmlFor="show-consent" className="text-xs flex items-center gap-1">
                <Shield className="h-3 w-3" /> Consent Layer
              </Label>
            </div>
          </div>
        </div>
        <Tabs defaultValue="all" onValueChange={handleLayerChange} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Risks</TabsTrigger>
            <TabsTrigger value="dropout" className="flex items-center gap-1">
              <Bell className="h-3 w-3" /> Dropout
            </TabsTrigger>
            <TabsTrigger value="coldchain" className="flex items-center gap-1">
              <Thermometer className="h-3 w-3" /> Cold Chain
            </TabsTrigger>
            <TabsTrigger value="misinformation" className="flex items-center gap-1">
              <Bell className="h-3 w-3" /> Misinformation
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="relative rounded-md overflow-hidden">
          <ShrucMap overlayType={activeLayer} />
          
          {/* Risk Indicators */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
              High Risk Areas: 4
            </Badge>
            <Badge variant="outline" className="bg-background/80 backdrop-blur-sm flex items-center gap-1">
              <Brain className="h-3 w-3 text-health-primary" /> AI Predictions Active
            </Badge>
            {showConsentLayer && (
              <Badge variant="outline" className="bg-health-success/20 text-health-success">
                93% Community Verified
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShrucHeatmapPanel;
