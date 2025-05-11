
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { FileDown, Database, Clock, Calendar, Filter, Download, Shield, RefreshCw, Users, MapPin, AlertTriangle, Activity } from 'lucide-react';
import Thermometer from '@/components/icons/Thermometer';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const DataExportPage = () => {
  const exportHistory = [
    { id: 1, name: 'Vaccination Records - May 2025', format: 'CSV', size: '14.2 MB', date: '2025-05-10', status: 'completed' },
    { id: 2, name: 'Cold Chain Monitoring Data', format: 'JSON', size: '8.7 MB', date: '2025-05-09', status: 'completed' },
    { id: 3, name: 'Staff Performance Metrics', format: 'Excel', size: '3.2 MB', date: '2025-05-08', status: 'completed' },
    { id: 4, name: 'AI Ethics Compliance Report', format: 'PDF', size: '2.1 MB', date: '2025-05-06', status: 'completed' },
    { id: 5, name: 'Mesh Network Diagnostics', format: 'JSON', size: '9.4 MB', date: '2025-05-01', status: 'failed' },
  ];

  const getExportStatus = (status: string) => {
    switch(status) {
      case 'completed': 
        return <Badge className="bg-health-success/20 text-health-success">Completed</Badge>;
      case 'pending': 
        return <Badge className="bg-muted">Processing</Badge>;
      case 'failed': 
        return <Badge className="bg-health-alert/20 text-health-alert">Failed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  return (
    <DashboardLayout 
      title="Data Export" 
      description="Export and share data with partners and stakeholders"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="exports">
            <TabsList className="mb-4">
              <TabsTrigger value="exports">Recent Exports</TabsTrigger>
              <TabsTrigger value="templates">Export Templates</TabsTrigger>
              <TabsTrigger value="sharing">Data Sharing</TabsTrigger>
            </TabsList>
            
            <TabsContent value="exports">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileDown className="h-5 w-5 text-health-primary" />
                    Export History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Format</TableHead>
                          <TableHead>Size</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Action</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {exportHistory.map(item => (
                          <TableRow key={item.id}>
                            <TableCell className="font-medium">{item.name}</TableCell>
                            <TableCell>{item.format}</TableCell>
                            <TableCell>{item.size}</TableCell>
                            <TableCell>{item.date}</TableCell>
                            <TableCell>{getExportStatus(item.status)}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm" disabled={item.status !== 'completed'}>
                                <Download className="h-4 w-4" />
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Retry Failed
                  </Button>
                  <Button>View All Exports</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="templates">
              <Card>
                <CardHeader>
                  <CardTitle>Export Templates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "WHO Vaccination Report", desc: "Standard WHO format for vaccination statistics", format: "Excel" },
                      { name: "UNICEF Data Exchange", desc: "Compatible with UNICEF data sharing protocol", format: "CSV" },
                      { name: "Health Ministry Summary", desc: "Required format for district health authorities", format: "PDF" },
                      { name: "Research Collaboration", desc: "Anonymized data for research partners", format: "JSON" }
                    ].map((template, idx) => (
                      <div key={idx} className="border rounded-md p-4 flex flex-col">
                        <div className="flex items-start justify-between">
                          <h3 className="font-medium">{template.name}</h3>
                          <Badge variant="outline">{template.format}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1 mb-4">{template.desc}</p>
                        <Button size="sm" className="self-start mt-auto">Use Template</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sharing">
              <Card>
                <CardHeader>
                  <CardTitle>Data Sharing Settings</CardTitle>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Data sharing configurations coming soon
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg">Create New Export</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-3">Select Data Type</h3>
                <div className="space-y-2">
                  {[
                    { icon: <Database className="h-4 w-4 mr-2" />, name: "Vaccination Records" },
                    { icon: <Thermometer className="h-4 w-4 mr-2" />, name: "Cold Chain Data" },
                    { icon: <Users className="h-4 w-4 mr-2" />, name: "Population Statistics" },
                    { icon: <Activity className="h-4 w-4 mr-2" />, name: "Performance Metrics" }
                  ].map((type, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Button variant="outline" className="w-full justify-start text-sm">
                        {type.icon}
                        {type.name}
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Quick Filters</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" className="flex gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="text-xs">Date Range</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    <span className="text-xs">Locations</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-1">
                    <Filter className="h-3.5 w-3.5" />
                    <span className="text-xs">Data Fields</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-1">
                    <Shield className="h-3.5 w-3.5" />
                    <span className="text-xs">Privacy</span>
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Export Format</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">CSV</Button>
                  <Button variant="outline" size="sm">JSON</Button>
                  <Button variant="outline" size="sm">Excel</Button>
                  <Button variant="outline" size="sm">PDF</Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium mb-3">Schedule</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <Clock className="h-4 w-4 mr-2" />
                    One-time Export
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end border-t pt-4">
              <Button>
                <FileDown className="mr-2 h-4 w-4" />
                Generate Export
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DataExportPage;
