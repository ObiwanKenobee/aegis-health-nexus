
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OfflineSyncTray from '@/components/dashboard/OfflineSyncTray';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { RefreshCw, Database, Wifi, WifiOff, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const SyncStatusPage = () => {
  const syncJobs = [
    { id: 1, type: 'Patient Records', status: 'success', items: 342, time: '14:32', size: '2.4 MB' },
    { id: 2, type: 'Vaccine Inventory', status: 'success', items: 56, time: '14:30', size: '0.8 MB' },
    { id: 3, type: 'Staff Schedules', status: 'warning', items: 12, time: '14:28', size: '0.3 MB' },
    { id: 4, type: 'Analytics Data', status: 'error', items: 1042, time: '14:20', size: '5.2 MB' },
    { id: 5, type: 'Configuration', status: 'success', items: 8, time: '13:45', size: '0.1 MB' },
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'success': 
        return <Badge className="bg-health-success/20 text-health-success"><CheckCircle className="h-3 w-3 mr-1" /> Complete</Badge>;
      case 'warning': 
        return <Badge className="bg-health-warning/20 text-health-warning"><AlertCircle className="h-3 w-3 mr-1" /> Partial</Badge>;
      case 'error': 
        return <Badge className="bg-health-alert/20 text-health-alert"><AlertCircle className="h-3 w-3 mr-1" /> Failed</Badge>;
      case 'pending': 
        return <Badge variant="outline"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout 
      title="Offline Sync Status" 
      description="Monitor and manage data synchronization in low-connectivity environments"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="current">
            <TabsList className="mb-4">
              <TabsTrigger value="current">Current Status</TabsTrigger>
              <TabsTrigger value="history">Sync History</TabsTrigger>
              <TabsTrigger value="settings">Sync Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current">
              <OfflineSyncTray />
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-health-primary" />
                    Sync Queue
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Data Type</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Items</TableHead>
                          <TableHead>Time</TableHead>
                          <TableHead>Size</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {syncJobs.map(job => (
                          <TableRow key={job.id}>
                            <TableCell className="font-medium">{job.type}</TableCell>
                            <TableCell>{getStatusBadge(job.status)}</TableCell>
                            <TableCell>{job.items}</TableCell>
                            <TableCell>{job.time}</TableCell>
                            <TableCell>{job.size}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline">View Details</Button>
                  <Button>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Retry Failed
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="history">
              <Card>
                <CardHeader>
                  <CardTitle>Synchronization History</CardTitle>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Detailed sync history and analytics coming soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Synchronization Configuration</CardTitle>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Advanced sync settings panel coming soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Network Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center mb-6 py-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted mb-3">
                    <Wifi className="h-8 w-8 text-health-success" />
                  </div>
                  <h3 className="text-2xl font-semibold">Connected</h3>
                  <p className="text-sm text-muted-foreground">Normal Operation</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Signal Strength</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Bandwidth</span>
                    <span className="font-medium">3.2 Mbps</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Stability</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-health-success h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-sm font-medium mb-2">Connection Events</h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded flex items-center gap-2 bg-muted/20">
                    <WifiOff className="h-3 w-3 text-muted-foreground" />
                    <span>Disconnected at 12:45 (2h ago)</span>
                  </div>
                  <div className="p-2 rounded flex items-center gap-2 bg-muted/20">
                    <Wifi className="h-3 w-3 text-muted-foreground" />
                    <span>Reconnected at 12:52 (2h ago)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Button className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" />
            Force Full Sync
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SyncStatusPage;
