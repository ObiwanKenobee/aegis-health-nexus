
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Network, Activity, Sun, Battery, Wifi, AlertTriangle, Zap, RefreshCw } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const MeshStatusPage = () => {
  const nodes = [
    { id: 1, name: 'Solar Node K-01', health: 'healthy', battery: '92%', solar: 'Good', connections: 4, uptime: '24d 12h' },
    { id: 2, name: 'Solar Node K-02', health: 'healthy', battery: '87%', solar: 'Good', connections: 3, uptime: '18d 6h' },
    { id: 3, name: 'Relay Node R-05', health: 'warning', battery: '54%', solar: 'Limited', connections: 5, uptime: '9d 14h' },
    { id: 4, name: 'Edge Node E-12', health: 'healthy', battery: '78%', solar: 'Good', connections: 2, uptime: '12d 8h' },
    { id: 5, name: 'Hub Node H-03', health: 'error', battery: '23%', solar: 'Poor', connections: 6, uptime: '4d 2h' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'healthy': 
        return <Badge className="bg-health-success/20 text-health-success">Healthy</Badge>;
      case 'warning': 
        return <Badge className="bg-health-warning/20 text-health-warning">Warning</Badge>;
      case 'error': 
        return <Badge className="bg-health-alert/20 text-health-alert">Critical</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout 
      title="Mesh Resilience Status" 
      description="Monitor connection & data health across solar kiosks and mesh nodes"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview">
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Network Overview</TabsTrigger>
              <TabsTrigger value="nodes">Node Status</TabsTrigger>
              <TabsTrigger value="topology">Network Topology</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-health-primary" />
                    Mesh Network Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                      <div className="rounded-full h-12 w-12 bg-health-success/20 flex items-center justify-center mb-2">
                        <Network className="h-6 w-6 text-health-success" />
                      </div>
                      <h3 className="text-2xl font-bold">24</h3>
                      <p className="text-sm text-muted-foreground">Active Nodes</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                      <div className="rounded-full h-12 w-12 bg-health-warning/20 flex items-center justify-center mb-2">
                        <AlertTriangle className="h-6 w-6 text-health-warning" />
                      </div>
                      <h3 className="text-2xl font-bold">3</h3>
                      <p className="text-sm text-muted-foreground">Nodes with Warnings</p>
                    </div>
                    
                    <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                      <div className="rounded-full h-12 w-12 bg-health-alert/20 flex items-center justify-center mb-2">
                        <AlertTriangle className="h-6 w-6 text-health-alert" />
                      </div>
                      <h3 className="text-2xl font-bold">1</h3>
                      <p className="text-sm text-muted-foreground">Critical Issues</p>
                    </div>
                  </div>
                  
                  <div className="h-64 border rounded-lg bg-muted/20 flex items-center justify-center mb-6">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-2">
                        Interactive mesh network visualization coming soon
                      </p>
                      <p className="text-sm text-muted-foreground">
                        View real-time connectivity and data flow between nodes
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <Activity className="h-4 w-4 mr-2 text-health-primary" />
                        Network Resilience Score
                      </h3>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold">87%</span>
                        <span className="text-health-success text-xs ml-2">↑ 3%</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Improved since last week</p>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h3 className="text-sm font-medium mb-2 flex items-center">
                        <Zap className="h-4 w-4 mr-2 text-health-primary" />
                        Power Sufficiency
                      </h3>
                      <div className="flex items-center">
                        <span className="text-2xl font-bold">92%</span>
                        <span className="text-health-success text-xs ml-2">↑ 5%</span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">Solar yield exceeds expectations</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end border-t pt-4">
                  <Button>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Refresh Status
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="nodes">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-health-primary" />
                    Node Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Node Name</TableHead>
                          <TableHead>Health</TableHead>
                          <TableHead>Battery</TableHead>
                          <TableHead>Solar</TableHead>
                          <TableHead>Connections</TableHead>
                          <TableHead>Uptime</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {nodes.map(node => (
                          <TableRow key={node.id}>
                            <TableCell className="font-medium">{node.name}</TableCell>
                            <TableCell>{getStatusBadge(node.health)}</TableCell>
                            <TableCell>{node.battery}</TableCell>
                            <TableCell>{node.solar}</TableCell>
                            <TableCell>{node.connections}</TableCell>
                            <TableCell>{node.uptime}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline">Export Data</Button>
                  <Button>View All Nodes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="topology">
              <Card>
                <CardHeader>
                  <CardTitle>Network Topology</CardTitle>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Network topology visualization coming soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Resource Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Battery className="h-4 w-4 mr-2 text-health-primary" />
                      <span className="text-sm">Battery Levels</span>
                    </div>
                    <span className="text-sm font-medium">78% avg</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Sun className="h-4 w-4 mr-2 text-health-primary" />
                      <span className="text-sm">Solar Efficiency</span>
                    </div>
                    <span className="text-sm font-medium">92% avg</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Wifi className="h-4 w-4 mr-2 text-health-primary" />
                      <span className="text-sm">Signal Strength</span>
                    </div>
                    <span className="text-sm font-medium">84% avg</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '84%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 space-y-3">
                <h3 className="text-sm font-medium">Critical Alerts</h3>
                
                <div className="p-3 bg-health-alert/10 border border-health-alert/20 rounded-md">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-health-alert flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Hub Node H-03 Battery Critical</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Battery level at 23% with insufficient solar charging.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-health-warning/10 border border-health-warning/20 rounded-md">
                  <div className="flex gap-2">
                    <AlertTriangle className="h-4 w-4 text-health-warning flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Relay Node R-05 Limited Solar</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Solar panel efficiency reduced, maintenance recommended.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button className="w-full" variant="outline">
            <AlertTriangle className="mr-2 h-4 w-4" />
            View Detailed Diagnostics
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default MeshStatusPage;
