
import React from 'react';
import GlobalHeader from '@/components/header/GlobalHeader';
import DashboardSidebar from '@/components/sidebar/DashboardSidebar';
import { useHealthStore } from '@/store/healthStore';
import { useOfflineSync } from '@/hooks/useOfflineSync';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Globe, Code, Users, Heart, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
  const { user, notifications, markNotificationAsRead, markAllNotificationsAsRead } = useHealthStore();
  const { syncStatus, lastSync, pendingChanges, syncNow } = useOfflineSync();

  return (
    <div className="min-h-screen flex flex-col">
      <GlobalHeader 
        user={user}
        syncStatus={{
          status: syncStatus,
          lastSync,
          pendingChanges,
        }}
        notifications={notifications}
        onNotificationRead={markNotificationAsRead}
        onAllNotificationsRead={markAllNotificationsAsRead}
        onSyncNow={syncNow}
      />
      
      <div className="flex-1 flex">
        <DashboardSidebar />
        
        <main className="flex-1 container max-w-screen-2xl py-6 px-4">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">About AEGIS Health</h1>
            <p className="text-muted-foreground">
              Our mission, technology, and the team behind AEGIS Health
            </p>
          </div>
          
          <Tabs defaultValue="mission" className="space-y-6">
            <TabsList className="grid grid-cols-4 w-full max-w-2xl mb-2">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="mission" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-health-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="bg-muted/30 rounded-xl p-8 flex items-center justify-center min-w-[240px] h-[240px]">
                      <Shield className="h-24 w-24 text-health-primary opacity-80" />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Empowering Health Equity Through Technology</h3>
                      <p>
                        AEGIS Health is dedicated to ensuring every child, regardless of location or resources, has access to life-saving immunizations. We combine advanced technology with cultural sensitivity to overcome barriers to healthcare delivery in the most challenging environments.
                      </p>
                      <p>
                        Our platform addresses critical challenges in the immunization ecosystem, from supply chain management to community trust building, with solutions that work both online and offline.
                      </p>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-health-primary" />
                        <h4 className="font-semibold">Global Reach</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Operating in 42 countries across 5 continents, with specialized focus on regions with limited connectivity.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-health-primary" />
                        <h4 className="font-semibold">Communities Served</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Supporting over 8,500 healthcare workers and reaching more than 3 million children annually.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Heart className="h-5 w-5 text-health-primary" />
                        <h4 className="font-semibold">Lives Impacted</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Helped increase immunization rates by an average of 31% in partner districts since 2020.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technology" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-health-primary" />
                    Technology Stack
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="mb-4">
                    AEGIS Health is built on a resilient technology stack designed to work in both connected and disconnected environments, with a focus on data privacy, security, and ethical AI.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="border rounded-md p-4 hover:bg-muted/30 transition-colors">
                      <h4 className="font-semibold mb-2">Offline-First Architecture</h4>
                      <p className="text-sm text-muted-foreground">
                        Our mesh networking technology allows nodes to communicate and synchronize data without consistent internet connectivity.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:bg-muted/30 transition-colors">
                      <h4 className="font-semibold mb-2">Ethical AI Systems</h4>
                      <p className="text-sm text-muted-foreground">
                        Transparent, explainable algorithms with cultural sensitivity built in, ensuring AI decisions respect local contexts.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:bg-muted/30 transition-colors">
                      <h4 className="font-semibold mb-2">Cold Chain Monitoring</h4>
                      <p className="text-sm text-muted-foreground">
                        IoT sensors track vaccine temperature and storage conditions in real-time, with alerts for potential breaches.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:bg-muted/30 transition-colors">
                      <h4 className="font-semibold mb-2">Smart Scheduling</h4>
                      <p className="text-sm text-muted-foreground">
                        AI-powered route optimization that considers geographical, cultural, and resource constraints.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:bg-muted/30 transition-colors">
                      <h4 className="font-semibold mb-2">Counselor Tool</h4>
                      <p className="text-sm text-muted-foreground">
                        Multilingual voice and text interfaces for health workers to combat misinformation with culturally adapted messaging.
                      </p>
                    </div>
                    
                    <div className="border rounded-md p-4 hover:bg-muted/30 transition-colors">
                      <h4 className="font-semibold mb-2">Data Trust Framework</h4>
                      <p className="text-sm text-muted-foreground">
                        End-to-end encryption with granular consent management, giving communities control over their health data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="team" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-health-primary" />
                    Our Team
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>
                      The AEGIS Health team brings together expertise from public health, technology, data science, and community engagement. Our diverse team works across borders to create solutions that respect local contexts while leveraging global best practices.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                      {/* Team member cards would go here - showing placeholder structure */}
                      {[1, 2, 3, 4, 5, 6].map((index) => (
                        <div key={index} className="border rounded-lg p-4 text-center space-y-2">
                          <div className="w-24 h-24 bg-muted rounded-full mx-auto"></div>
                          <h4 className="font-semibold">Team Member {index}</h4>
                          <p className="text-sm text-health-primary">Role Title</p>
                          <p className="text-xs text-muted-foreground">
                            Brief bio would appear here describing expertise and background.
                          </p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-center mt-6">
                      <Button variant="outline">
                        View Full Team
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ExternalLink className="h-5 w-5 text-health-primary" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold">Get in Touch</h3>
                      <p className="text-muted-foreground">
                        Have questions about AEGIS Health? Our team is here to help you with implementation, partnerships, or technical support.
                      </p>
                      
                      <div className="space-y-2 mt-6">
                        <div>
                          <p className="font-medium">General Inquiries:</p>
                          <p className="text-muted-foreground">contact@aegis.org</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Technical Support:</p>
                          <p className="text-muted-foreground">support@aegis.org</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Partnerships:</p>
                          <p className="text-muted-foreground">partnerships@aegis.org</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Media:</p>
                          <p className="text-muted-foreground">media@aegis.org</p>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button className="mr-2">
                          Contact Us
                        </Button>
                        <Button variant="outline">
                          Documentation
                        </Button>
                      </div>
                    </div>
                    
                    <div className="bg-muted/30 rounded-xl p-6 flex items-center justify-center">
                      <div className="text-center">
                        <h4 className="text-lg font-semibold mb-2">Global Headquarters</h4>
                        <p className="text-muted-foreground">
                          123 Health Innovation Way<br />
                          Geneva, Switzerland 1202<br /><br />
                          Regional offices in Nairobi, New Delhi,<br />
                          Jakarta, and San Francisco
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default AboutPage;
