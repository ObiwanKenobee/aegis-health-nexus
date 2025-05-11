
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar as CalendarIcon, MapPin, Users, Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const SmartScheduleFlow: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [culturalSensitivity, setCulturalSensitivity] = useState(true);

  const scheduleItems = [
    {
      id: 1,
      location: 'Union Council 5',
      team: 'Team Alpha',
      time: '09:00 - 11:30',
      status: 'confirmed',
      predictedAttendance: 85,
      notes: 'School vaccination program'
    },
    {
      id: 2,
      location: 'Union Council 9',
      team: 'Team Beta',
      time: '10:00 - 14:00',
      status: 'warning',
      predictedAttendance: 65,
      notes: 'Community center outreach'
    },
    {
      id: 3,
      location: 'Union Council 3',
      team: 'Team Gamma',
      time: '13:00 - 16:00',
      status: 'confirmed',
      predictedAttendance: 90,
      notes: 'Mobile clinic deployment'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-health-success/20 text-health-success';
      case 'warning': return 'bg-health-warning/20 text-health-warning';
      case 'danger': return 'bg-health-alert/20 text-health-alert';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl flex items-center gap-2">
            <Calendar className="h-5 w-5 text-health-primary" />
            Smart Schedule
          </CardTitle>
          <div className="flex items-center space-x-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                >
                  <CalendarIcon className="h-3.5 w-3.5" />
                  {date ? format(date, 'PPP') : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  className={cn("p-3 pointer-events-auto")}
                />
              </PopoverContent>
            </Popover>
            
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-1"
            >
              <Filter className="h-3.5 w-3.5" />
              Filter
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch 
            id="cultural"
            checked={culturalSensitivity}
            onCheckedChange={setCulturalSensitivity}
          />
          <Label htmlFor="cultural">Cultural Sensitivity Mode</Label>
          {culturalSensitivity && (
            <Badge variant="outline" className="bg-health-success/10 text-health-success text-xs">
              Friday prayer times avoided
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {scheduleItems.map((item) => (
            <div key={item.id} className="p-3 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-muted/30 transition-colors group">
              <div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-health-primary" />
                  <h4 className="font-medium">{item.location}</h4>
                  <Badge className={getStatusColor(item.status)}>
                    {item.status === 'confirmed' ? 'Confirmed' : 'Attendance Risk'}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <Users className="h-3 w-3" />
                  <span>{item.team} • {item.time}</span>
                </div>
                <p className="text-xs mt-1">{item.notes}</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Predicted Attendance</div>
                  <div className={`text-lg font-semibold ${item.predictedAttendance < 70 ? 'text-health-warning' : 'text-health-success'}`}>
                    {item.predictedAttendance}%
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100">
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-4 pt-2 border-t">
          <Button>
            Print Schedule
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SmartScheduleFlow;
