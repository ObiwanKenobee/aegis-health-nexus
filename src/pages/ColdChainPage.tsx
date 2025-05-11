
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Thermometer, Map, AlertCircle, Check, BarChart3 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const ColdChainPage = () => {
  const locations = [
    { id: 1, name: 'Karachi Central Hub', status: 'normal', temp: '2.4°C', lastUpdate: '2 min ago', battery: '92%' },
    { id: 2, name: 'Lahore Distribution', status: 'normal', temp: '3.1°C', lastUpdate: '5 min ago', battery: '87%' },
    { id: 3, name: 'Peshawar Mobile Unit 3', status: 'warning', temp: '6.8°C', lastUpdate: '1 min ago', battery: '54%' },
    { id: 4, name: 'Quetta Outpost', status: 'normal', temp: '2.9°C', lastUpdate: '12 min ago', battery: '76%' },
    { id: 5, name: 'Islamabad Storage A', status: 'alert', temp: '8.3°C', lastUpdate: 'Just now', battery: '95%' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'normal': 
        return <Badge className="bg-health-success/20 text-health-success"><Check className="h-3 w-3 mr-1" /> Normal</Badge>;
      case 'warning': 
        return <Badge className="bg-health-warning/20 text-health-warning"><AlertCircle className="h-3 w-3 mr-1" /> Warning</Badge>;
      case 'alert': 
        return <Badge className="bg-health-alert/20 text-health-alert"><AlertCircle className="h-3 w-3 mr-1" /> Alert</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout 
      title="Cold Chain Monitoring" 
      description="Ensure vaccines are stored and delivered under safe temperature conditions"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="dashboard">
            <TabsList className="mb-4">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="map">Map View</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Thermometer className="h-5 w-5 text-health-primary" />
                    Cold Chain Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Location</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Temperature</TableHead>
                          <TableHead>Last Update</TableHead>
                          <TableHead>Battery</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {locations.map(location => (
                          <TableRow key={location.id}>
                            <TableCell className="font-medium">{location.name}</TableCell>
                            <TableCell>{getStatusBadge(location.status)}</TableCell>
                            <TableCell>{location.temp}</TableCell>
                            <TableCell>{location.lastUpdate}</TableCell>
                            <TableCell>{location.battery}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline">Export Data</Button>
                  <Button>View All Devices</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="map">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5 text-health-primary" />
                    Geographic Distribution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 border rounded-md bg-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">
                        Interactive map visualization coming soon
                      </p>
                      <p className="text-sm text-muted-foreground">
                        View all cold chain assets across regions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reports">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-health-primary" />
                    Temperature Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 border rounded-md bg-muted/20 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">
                        Advanced analytics dashboard coming soon
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Track temperature trends and anomalies over time
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">System Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Units in Range</span>
                    <span className="font-medium">23/25</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Network Connectivity</span>
                    <span className="font-medium">96%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '96%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Battery Status</span>
                    <span className="font-medium">78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-warning h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Recent Alerts</h4>
                <div className="space-y-2">
                  <div className="text-xs p-2 bg-health-alert/10 text-health-alert rounded border border-health-alert/20">
                    Temperature exceeds safe range at Islamabad Storage A
                  </div>
                  <div className="text-xs p-2 bg-health-warning/10 text-health-warning rounded border border-health-warning/20">
                    Low battery alert for Peshawar Mobile Unit 3
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button className="w-full" variant="outline">
            <AlertCircle className="mr-2 h-4 w-4" />
            Configure Alert Thresholds
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ColdChainPage;
