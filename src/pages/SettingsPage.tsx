
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { User, Shield, Bell, Languages, Database, Wifi, RefreshCw, FileDown, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const SettingsPage = () => {
  return (
    <DashboardLayout 
      title="Settings" 
      description="Configure your workspace preferences and account settings"
    >
      <Tabs defaultValue="profile" className="space-y-4">
        <TabsList>
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security & Privacy</TabsTrigger>
          <TabsTrigger value="language">Language & Region</TabsTrigger>
          <TabsTrigger value="data">Data Management</TabsTrigger>
          <TabsTrigger value="connectivity">Connectivity</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-health-primary" />
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center text-2xl font-semibold">
                      AK
                    </div>
                    <Button size="sm" variant="outline" className="absolute bottom-0 right-0 rounded-full h-8 w-8 p-0">
                      <span className="sr-only">Change avatar</span>
                      <span className="text-xs">Edit</span>
                    </Button>
                  </div>
                  <div className="space-y-1 text-center sm:text-left">
                    <h3 className="font-semibold text-lg">Ahmed Khan</h3>
                    <p className="text-sm text-muted-foreground">Health Officer</p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                      <Badge variant="outline">KPK, Pakistan</Badge>
                      <Badge variant="outline">Field Operations</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" defaultValue="Ahmed" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" defaultValue="Khan" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Your email" defaultValue="ahmed.khan@example.org" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title</Label>
                    <Input id="title" placeholder="Your position" defaultValue="Health Officer" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Your phone number" defaultValue="+92 300 1234567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Brief description about yourself" 
                      defaultValue="Health officer specializing in vaccination programs across KPK region. 5+ years of experience in rural healthcare delivery."
                    />
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Changes</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-health-primary" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Alert Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Cold Chain Alerts</h4>
                        <p className="text-sm text-muted-foreground">Temperature excursions and device failures</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="cold-chain-email" defaultChecked />
                          <Label htmlFor="cold-chain-email" className="text-xs">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="cold-chain-sms" defaultChecked />
                          <Label htmlFor="cold-chain-sms" className="text-xs">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="cold-chain-push" defaultChecked />
                          <Label htmlFor="cold-chain-push" className="text-xs">Push</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Mesh Network Status</h4>
                        <p className="text-sm text-muted-foreground">Connectivity and power issues</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="mesh-email" defaultChecked />
                          <Label htmlFor="mesh-email" className="text-xs">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="mesh-sms" defaultChecked />
                          <Label htmlFor="mesh-sms" className="text-xs">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="mesh-push" />
                          <Label htmlFor="mesh-push" className="text-xs">Push</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Schedule Changes</h4>
                        <p className="text-sm text-muted-foreground">Updates to vaccination schedules</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Switch id="schedule-email" defaultChecked />
                          <Label htmlFor="schedule-email" className="text-xs">Email</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="schedule-sms" />
                          <Label htmlFor="schedule-sms" className="text-xs">SMS</Label>
                        </div>
                        <div className="flex items-center gap-2">
                          <Switch id="schedule-push" defaultChecked />
                          <Label htmlFor="schedule-push" className="text-xs">Push</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Notification Schedule</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Daily Digest</h4>
                        <p className="text-sm text-muted-foreground">Summary of all activities</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="daily-digest" defaultChecked />
                        <Label htmlFor="daily-digest">Enabled</Label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Quiet Hours</h4>
                        <p className="text-sm text-muted-foreground">Disable non-critical alerts</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="quiet-hours" />
                        <Label htmlFor="quiet-hours">Enabled</Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Preferences</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-health-primary" />
                Security & Privacy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Account Security</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Change Password</h4>
                      <div className="grid gap-2">
                        <Input type="password" placeholder="Current password" />
                        <Input type="password" placeholder="New password" />
                        <Input type="password" placeholder="Confirm new password" />
                      </div>
                      <Button size="sm" className="mt-2">Update Password</Button>
                    </div>
                    
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted-foreground">Enhance account security</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="tfa" />
                        <Label htmlFor="tfa">Enable</Label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <h4 className="font-medium">Session Management</h4>
                        <p className="text-sm text-muted-foreground">View and manage active sessions</p>
                      </div>
                      <Button variant="outline" size="sm">Manage Sessions</Button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Privacy Settings</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Data Anonymization</h4>
                        <p className="text-sm text-muted-foreground">Anonymize patient data for reports</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="anonymize" defaultChecked />
                        <Label htmlFor="anonymize">Enable</Label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <h4 className="font-medium">Activity Tracking</h4>
                        <p className="text-sm text-muted-foreground">Track usage for system improvements</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="tracking" defaultChecked />
                        <Label htmlFor="tracking">Allow</Label>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t pt-4">
                      <div>
                        <h4 className="font-medium">Third-party Integrations</h4>
                        <p className="text-sm text-muted-foreground">Control what data is shared with partners</p>
                      </div>
                      <Button variant="outline" size="sm">Manage Integrations</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="language" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-health-primary" />
                Language & Region
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid gap-4">
                  <div>
                    <Label htmlFor="language" className="block mb-2">Language</Label>
                    <select id="language" className="w-full border rounded-md p-2">
                      <option value="en">English</option>
                      <option value="ur">Urdu</option>
                      <option value="ha">Hausa</option>
                      <option value="sw">Swahili</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Interface language affects labels, buttons, and messages.
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="voice-language" className="block mb-2">Voice Assistant Language</Label>
                    <select id="voice-language" className="w-full border rounded-md p-2">
                      <option value="en">English</option>
                      <option value="ur">Urdu</option>
                      <option value="ha">Hausa</option>
                      <option value="sw">Swahili</option>
                      <option value="pa">Pashto</option>
                      <option value="si">Sindhi</option>
                      <option value="ba">Balochi</option>
                      <option value="sa">Saraiki</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Used for voice interactions in the Counselor Tool.
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="region" className="block mb-2">Region</Label>
                    <select id="region" className="w-full border rounded-md p-2">
                      <option value="pk">Pakistan</option>
                      <option value="ng">Nigeria</option>
                      <option value="ke">Kenya</option>
                      <option value="tz">Tanzania</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Affects date formats, units, and regional features.
                    </p>
                  </div>
                  
                  <div>
                    <Label htmlFor="timezone" className="block mb-2">Time Zone</Label>
                    <select id="timezone" className="w-full border rounded-md p-2">
                      <option value="pkt">Pakistan Time (PKT)</option>
                      <option value="wat">West Africa Time (WAT)</option>
                      <option value="eat">East Africa Time (EAT)</option>
                      <option value="utc">Coordinated Universal Time (UTC)</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      Used for scheduling and reports.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Format Preferences</h3>
                  
                  <div className="grid gap-4">
                    <div>
                      <Label htmlFor="date-format" className="block mb-2">Date Format</Label>
                      <select id="date-format" className="w-full border rounded-md p-2">
                        <option value="dmy">DD/MM/YYYY (31/12/2025)</option>
                        <option value="mdy">MM/DD/YYYY (12/31/2025)</option>
                        <option value="ymd">YYYY-MM-DD (2025-12-31)</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="time-format" className="block mb-2">Time Format</Label>
                      <select id="time-format" className="w-full border rounded-md p-2">
                        <option value="24h">24-hour (14:30)</option>
                        <option value="12h">12-hour (2:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Preferences</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="data" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-health-primary" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-4">Storage & Cache</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-medium">Local Storage Usage</h4>
                        <p className="text-sm text-muted-foreground">Data stored on your device</p>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">348 MB / 1 GB</div>
                        <div className="w-32 bg-muted rounded-full h-2 mt-1">
                          <div className="bg-health-primary h-2 rounded-full" style={{ width: '34.8%' }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center border-t pt-4">
                      <div>
                        <h4 className="font-medium">Offline Cache Management</h4>
                        <p className="text-sm text-muted-foreground">Data available when offline</p>
                      </div>
                      <Button variant="outline" size="sm">Manage Cache</Button>
                    </div>
                    
                    <div className="flex justify-between items-center border-t pt-4">
                      <div>
                        <h4 className="font-medium">Data Retention Policy</h4>
                        <p className="text-sm text-muted-foreground">How long data is stored</p>
                      </div>
                      <select className="border rounded-md p-1 text-sm">
                        <option>30 days</option>
                        <option>90 days</option>
                        <option>1 year</option>
                        <option>Forever</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-between items-center border-t pt-4">
                      <div>
                        <h4 className="font-medium">Auto-backup</h4>
                        <p className="text-sm text-muted-foreground">Automatic data backup</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Switch id="auto-backup" defaultChecked />
                        <Label htmlFor="auto-backup">Enabled</Label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Data Actions</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start">
                      <Database className="mr-2 h-4 w-4" />
                      Run Data Integrity Check
                    </Button>
                    
                    <Button variant="outline" className="justify-start">
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Force Full Sync
                    </Button>
                    
                    <Button variant="outline" className="justify-start">
                      <FileDown className="mr-2 h-4 w-4" />
                      Export All Data
                    </Button>
                    
                    <Button variant="outline" className="text-health-alert justify-start border-health-alert/20">
                      <AlertTriangle className="mr-2 h-4 w-4" />
                      Clear Local Data
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="connectivity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-health-primary" />
                Connectivity Settings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Network Configuration</h3>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Low Bandwidth Mode</h4>
                      <p className="text-sm text-muted-foreground">Reduce data consumption</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="low-bandwidth" />
                      <Label htmlFor="low-bandwidth">Enabled</Label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <h4 className="font-medium">Offline First Mode</h4>
                      <p className="text-sm text-muted-foreground">Prioritize offline capabilities</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="offline-first" defaultChecked />
                      <Label htmlFor="offline-first">Enabled</Label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <h4 className="font-medium">Background Sync</h4>
                      <p className="text-sm text-muted-foreground">Sync when app is in background</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="bg-sync" defaultChecked />
                      <Label htmlFor="bg-sync">Enabled</Label>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Sync Configuration</h3>
                  
                  <div>
                    <Label htmlFor="sync-frequency" className="block mb-2">Sync Frequency</Label>
                    <select id="sync-frequency" className="w-full border rounded-md p-2">
                      <option value="realtime">Real-time (when possible)</option>
                      <option value="15min">Every 15 minutes</option>
                      <option value="30min">Every 30 minutes</option>
                      <option value="60min">Every 60 minutes</option>
                      <option value="manual">Manual only</option>
                    </select>
                    <p className="text-xs text-muted-foreground mt-1">
                      How often to attempt synchronization with central servers.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <h4 className="font-medium">Sync on WiFi Only</h4>
                      <p className="text-sm text-muted-foreground">Save mobile data</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="wifi-only" />
                      <Label htmlFor="wifi-only">Enabled</Label>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div>
                      <h4 className="font-medium">Peer-to-Peer Sync</h4>
                      <p className="text-sm text-muted-foreground">Enable direct field worker sync</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="p2p-sync" defaultChecked />
                      <Label htmlFor="p2p-sync">Enabled</Label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <Button>Save Network Settings</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default SettingsPage;
