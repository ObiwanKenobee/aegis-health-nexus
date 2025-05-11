
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import SmartScheduleFlow from '@/components/dashboard/SmartScheduleFlow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarClock, Clock, Users, MapPin } from 'lucide-react';

const SmartSchedulePage = () => {
  const upcomingEvents = [
    { id: 1, date: '2025-05-12', location: 'Karachi Central', teams: 3, households: 145 },
    { id: 2, date: '2025-05-14', location: 'Lahore East', teams: 5, households: 230 },
    { id: 3, date: '2025-05-16', location: 'Islamabad North', teams: 2, households: 98 },
  ];

  return (
    <DashboardLayout 
      title="Smart Scheduling Console" 
      description="Plan and optimize vaccine routes with AI-powered scheduling"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="schedule">
            <TabsList className="mb-4">
              <TabsTrigger value="schedule">Active Schedule</TabsTrigger>
              <TabsTrigger value="planning">Planning</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="schedule">
              <SmartScheduleFlow />
            </TabsContent>
            
            <TabsContent value="planning">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CalendarClock className="h-5 w-5 text-health-primary" />
                    Upcoming Deployment Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Date</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Teams</TableHead>
                        <TableHead>Households</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {upcomingEvents.map(event => (
                        <TableRow key={event.id}>
                          <TableCell>{event.date}</TableCell>
                          <TableCell>{event.location}</TableCell>
                          <TableCell>{event.teams}</TableCell>
                          <TableCell>{event.households}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Deployment Performance</CardTitle>
                </CardHeader>
                <CardContent className="h-80 flex items-center justify-center">
                  <p className="text-muted-foreground">Analytics dashboard coming soon</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Schedule Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Today's Sessions</span>
                </div>
                <span className="font-medium">3</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Teams Deployed</span>
                </div>
                <span className="font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Coverage Area</span>
                </div>
                <span className="font-medium">3 Districts</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SmartSchedulePage;
