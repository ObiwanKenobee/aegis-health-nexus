
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { CalendarIcon, Filter, AlertTriangle } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

export interface RiskFiltersProps {
  onFilterChange?: (filters: any) => void;
}

const RiskFilters: React.FC<RiskFiltersProps> = ({
  onFilterChange = () => {},
}) => {
  const [date, setDate] = React.useState<Date>(new Date());
  const [riskTypes, setRiskTypes] = React.useState({
    dropout: true,
    coldChain: true,
    misinformation: true,
    accessibility: false,
    aiPrediction: true
  });
  
  const [regionLevel, setRegionLevel] = React.useState('district');

  const handleRiskTypeChange = (type: keyof typeof riskTypes) => {
    setRiskTypes(prev => {
      const newValues = { ...prev, [type]: !prev[type] };
      onFilterChange({ date, riskTypes: newValues, regionLevel });
      return newValues;
    });
  };

  const handleRegionLevelChange = (value: string) => {
    setRegionLevel(value);
    onFilterChange({ date, riskTypes, regionLevel: value });
  };

  const handleDateChange = (newDate: Date | undefined) => {
    if (newDate) {
      setDate(newDate);
      onFilterChange({ date: newDate, riskTypes, regionLevel });
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-md flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Risk Filters
          </CardTitle>
          <Button variant="outline" size="sm">Reset</Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-3">Date Range</h4>
            <div className="grid gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {format(date, "PPP")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <Separator />
          
          <div>
            <h4 className="text-sm font-medium mb-3">Geography Level</h4>
            <Select 
              value={regionLevel} 
              onValueChange={handleRegionLevelChange}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="district">District</SelectItem>
                <SelectItem value="ward">Ward</SelectItem>
                <SelectItem value="union_council">Union Council</SelectItem>
                <SelectItem value="household">Household Cluster</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          <div>
            <h4 className="text-sm font-medium mb-3">Risk Types</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="dropout" className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-health-alert" />
                  Immunization Dropout
                </Label>
                <Switch 
                  id="dropout"
                  checked={riskTypes.dropout}
                  onCheckedChange={() => handleRiskTypeChange('dropout')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="coldChain" className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-health-warning" />
                  Cold Chain Breach
                </Label>
                <Switch 
                  id="coldChain"
                  checked={riskTypes.coldChain}
                  onCheckedChange={() => handleRiskTypeChange('coldChain')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="misinformation" className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-health-primary" />
                  Health Misinformation
                </Label>
                <Switch 
                  id="misinformation"
                  checked={riskTypes.misinformation}
                  onCheckedChange={() => handleRiskTypeChange('misinformation')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="accessibility" className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-health-dark" />
                  Accessibility Issues
                </Label>
                <Switch 
                  id="accessibility"
                  checked={riskTypes.accessibility}
                  onCheckedChange={() => handleRiskTypeChange('accessibility')}
                />
              </div>
              <Separator className="my-2" />
              <div className="flex items-center justify-between">
                <Label htmlFor="aiPrediction" className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-health-primary" />
                  AI Early Risk Prediction
                </Label>
                <Switch 
                  id="aiPrediction"
                  checked={riskTypes.aiPrediction}
                  onCheckedChange={() => handleRiskTypeChange('aiPrediction')}
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskFilters;
