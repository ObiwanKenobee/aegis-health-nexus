
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Info, HeartPulse, Code, Users, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const AboutPage = () => {
  return (
    <DashboardLayout 
      title="About AEGIS Health Platform" 
      description="Learn more about our mission, technology, team, and support resources"
    >
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="mission">Our Mission</TabsTrigger>
          <TabsTrigger value="technology">Technology</TabsTrigger>
          <TabsTrigger value="team">Our Team</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-health-primary" />
                Platform Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-2/3 space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold">AEGIS Health Platform</h2>
                    <p className="text-muted-foreground mt-2">
                      A resilient digital health platform designed for challenging environments
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <Badge variant="outline">Version 2.1.4</Badge>
                      <Badge variant="outline">Released May 2025</Badge>
                      <Badge variant="outline" className="bg-health-primary/10 text-health-primary">
                        Enterprise Edition
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold">Key Features</h3>
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-health-primary text-xs">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">AI-Powered Scheduling</span>
                          <p className="text-sm text-muted-foreground">Optimize vaccination campaigns with intelligent routing</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-health-primary text-xs">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Offline-First Architecture</span>
                          <p className="text-sm text-muted-foreground">Work seamlessly in low-connectivity environments</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-health-primary text-xs">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Mesh Network Resilience</span>
                          <p className="text-sm text-muted-foreground">Solar-powered connectivity between rural health kiosks</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-health-primary text-xs">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Advanced Cold Chain Monitoring</span>
                          <p className="text-sm text-muted-foreground">Real-time temperature tracking for vaccine viability</p>
                        </div>
                      </li>
                      <li className="flex gap-2">
                        <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-health-primary text-xs">✓</span>
                        </div>
                        <div>
                          <span className="font-medium">Multilingual Counselor Tool</span>
                          <p className="text-sm text-muted-foreground">Voice-first education in 8 local languages</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <Button variant="outline">
                      Release Notes
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
                
                <div className="md:w-1/3 border rounded-lg p-6 bg-muted/10">
                  <div className="text-center">
                    <div className="flex justify-center mb-4">
                      <HeartPulse className="h-12 w-12 text-health-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Proudly supported by</h3>
                    <div className="space-y-4 mt-4">
                      <div>
                        <p className="font-medium">World Health Organization</p>
                        <p className="text-xs text-muted-foreground">Global Health Partner</p>
                      </div>
                      <div>
                        <p className="font-medium">Gates Foundation</p>
                        <p className="text-xs text-muted-foreground">Innovation Partner</p>
                      </div>
                      <div>
                        <p className="font-medium">GAVI Alliance</p>
                        <p className="text-xs text-muted-foreground">Vaccination Partner</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <p className="text-xs text-muted-foreground">
                        Serving 24+ countries with limited healthcare infrastructure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mission">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-health-primary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="prose max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Democratizing Healthcare Access</h2>
                  <p className="text-lg leading-relaxed">
                    At AEGIS, we're committed to breaking down the technical barriers that prevent 
                    equitable healthcare delivery in the world's most challenging environments.
                  </p>
                  
                  <blockquote className="border-l-4 border-health-primary pl-4 italic my-6">
                    Every child deserves access to life-saving vaccines, regardless of where they were born.
                    Our technology bridges the gap between global health goals and local realities.
                  </blockquote>
                  
                  <p>
                    The AEGIS Health Platform was built specifically for regions with limited
                    infrastructure, inconsistent power, poor connectivity, and diverse languages. 
                    We combine cutting-edge technology with deeply contextualized design to ensure
                    healthcare workers can deliver services effectively in any environment.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-6 bg-muted/10">
                    <h3 className="text-lg font-semibold mb-2">Connectivity Solutions</h3>
                    <p className="text-sm">
                      Our solar mesh networks ensure that even the most remote clinics can
                      share vital health data, coordinate vaccination campaigns, and access
                      essential resources.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 bg-muted/10">
                    <h3 className="text-lg font-semibold mb-2">Cultural Adaptation</h3>
                    <p className="text-sm">
                      We recognize that healthcare is deeply personal. Our platform adapts
                      to local languages, customs, and practices to ensure appropriateness
                      and effectiveness.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 bg-muted/10">
                    <h3 className="text-lg font-semibold mb-2">AI for Social Good</h3>
                    <p className="text-sm">
                      Our AI systems are designed with equity, transparency and ethics at the core,
                      ensuring that technology amplifies human abilities rather than replacing them.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Impact Metrics</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-health-primary">24M+</div>
                      <p className="text-sm text-muted-foreground">Children Vaccinated</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-health-primary">87%</div>
                      <p className="text-sm text-muted-foreground">Coverage Increase</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-health-primary">14,000+</div>
                      <p className="text-sm text-muted-foreground">Health Workers</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-health-primary">32</div>
                      <p className="text-sm text-muted-foreground">Countries Served</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="technology">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-health-primary" />
                Technology Stack
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Built for Resilience</h2>
                  <p className="text-lg">
                    Our technology stack is designed from the ground up to function in the most challenging environments,
                    with offline-first architecture and minimal resource requirements.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Core Technologies</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Offline-First Data Sync</h4>
                          <Badge variant="outline">Proprietary</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Intelligent conflict resolution and prioritized sync for critical health data
                        </p>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Solar Mesh Network Protocol</h4>
                          <Badge variant="outline">Open Source</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Low-power, resilient connectivity between health outposts
                        </p>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">AI Scheduling Engine</h4>
                          <Badge variant="outline">Proprietary</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Optimized route planning incorporating cultural and geographical factors
                        </p>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Cold Chain Monitoring System</h4>
                          <Badge variant="outline">Open Source</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Ultra-low power temperature sensors with ML-based anomaly detection
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Advanced Features</h3>
                    <div className="space-y-4">
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Multilingual Voice Assistant</h4>
                          <Badge variant="outline" className="bg-health-primary/10 text-health-primary">New</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          8 languages with dialect variations for accurate health counseling
                        </p>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Ethical AI Framework</h4>
                          <Badge variant="outline">WHO Compliant</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Transparent AI decisions with built-in ethical analysis and accountability
                        </p>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Progressive Web Architecture</h4>
                          <Badge variant="outline">Standard</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Works on any device with minimal bandwidth requirements
                        </p>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">Data Anonymization Engine</h4>
                          <Badge variant="outline">GDPR Compliant</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          Privacy-preserving analytics while maintaining data utility
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Open Source Contributions</h3>
                  <p className="mb-4">
                    We believe in giving back to the community. These components of our platform are available as open source:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="justify-start text-health-primary">
                      <Code className="mr-2 h-4 w-4" />
                      HealthMesh Network Protocol
                    </Button>
                    <Button variant="outline" className="justify-start text-health-primary">
                      <Code className="mr-2 h-4 w-4" />
                      TempTrack Monitoring System
                    </Button>
                    <Button variant="outline" className="justify-start text-health-primary">
                      <Code className="mr-2 h-4 w-4" />
                      AEGIS Common Data Format
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-health-primary" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">The People Behind AEGIS</h2>
                  <p className="text-lg">
                    Our diverse team combines expertise in global health, technology, and regional contexts
                    to build solutions that truly work where they're needed most.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="border rounded-lg p-6 text-center">
                    <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-4"></div>
                    <h3 className="font-bold text-lg">Dr. Amina Khan</h3>
                    <p className="text-sm text-muted-foreground mb-2">Founder & CEO</p>
                    <p className="text-sm">
                      Former WHO immunization lead with 20+ years experience in global health initiatives
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 text-center">
                    <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-4"></div>
                    <h3 className="font-bold text-lg">Kwame Osei</h3>
                    <p className="text-sm text-muted-foreground mb-2">Chief Technology Officer</p>
                    <p className="text-sm">
                      Expert in resilient systems and appropriate technology for rural environments
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-6 text-center">
                    <div className="h-24 w-24 rounded-full bg-muted mx-auto mb-4"></div>
                    <h3 className="font-bold text-lg">Dr. Sarah Chen</h3>
                    <p className="text-sm text-muted-foreground mb-2">AI Ethics Director</p>
                    <p className="text-sm">
                      Leading expert on ethical applications of AI in healthcare and global development
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Global Team</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-2"></div>
                      <p className="font-medium">Field Operations</p>
                      <p className="text-xs text-muted-foreground">18 team members</p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-2"></div>
                      <p className="font-medium">Engineering</p>
                      <p className="text-xs text-muted-foreground">24 team members</p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-2"></div>
                      <p className="font-medium">Health Advisors</p>
                      <p className="text-xs text-muted-foreground">12 team members</p>
                    </div>
                    <div className="text-center">
                      <div className="h-16 w-16 rounded-full bg-muted mx-auto mb-2"></div>
                      <p className="font-medium">Regional Support</p>
                      <p className="text-xs text-muted-foreground">35 team members</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-3">Advisors & Partners</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="border rounded-md p-4 text-center bg-muted/10">
                      <p className="font-medium">World Health Organization</p>
                      <p className="text-xs text-muted-foreground">Technical Advisor</p>
                    </div>
                    <div className="border rounded-md p-4 text-center bg-muted/10">
                      <p className="font-medium">UNICEF</p>
                      <p className="text-xs text-muted-foreground">Field Partner</p>
                    </div>
                    <div className="border rounded-md p-4 text-center bg-muted/10">
                      <p className="font-medium">Gates Foundation</p>
                      <p className="text-xs text-muted-foreground">Strategic Funding</p>
                    </div>
                    <div className="border rounded-md p-4 text-center bg-muted/10">
                      <p className="font-medium">Local Health Ministries</p>
                      <p className="text-xs text-muted-foreground">Implementation Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-health-primary" />
                Contact & Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="h-5 w-5 text-health-primary" />
                        <div>
                          <p className="font-medium">Email Support</p>
                          <p className="text-sm text-muted-foreground">support@aegis.org</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Phone className="h-5 w-5 text-health-primary" />
                        <div>
                          <p className="font-medium">Phone Support</p>
                          <p className="text-sm text-muted-foreground">+1 (234) 567-8900</p>
                          <p className="text-xs text-muted-foreground">Available 24/7 for emergency issues</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-health-primary" />
                        <div>
                          <p className="font-medium">Headquarters</p>
                          <p className="text-sm text-muted-foreground">
                            123 Global Health Avenue<br />
                            Geneva, Switzerland
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Regional Offices</h3>
                    <div className="space-y-2">
                      <div className="border rounded-md p-3">
                        <p className="font-medium">Islamabad, Pakistan</p>
                        <p className="text-sm text-muted-foreground">South Asia Operations</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <p className="font-medium">Nairobi, Kenya</p>
                        <p className="text-sm text-muted-foreground">East Africa Operations</p>
                      </div>
                      <div className="border rounded-md p-3">
                        <p className="font-medium">Lagos, Nigeria</p>
                        <p className="text-sm text-muted-foreground">West Africa Operations</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Support Resources</h3>
                  <div className="space-y-4">
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Documentation & Training</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Access comprehensive guides and training materials
                      </p>
                      <Button variant="outline" className="w-full">Open Learning Portal</Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Field Support Network</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect with local support representatives
                      </p>
                      <Button variant="outline" className="w-full">View Support Map</Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Technical Support Ticket</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Submit a detailed support request
                      </p>
                      <Button variant="outline" className="w-full">Create Support Ticket</Button>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <h4 className="font-medium mb-2">Community Forums</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Connect with other AEGIS platform users
                      </p>
                      <Button variant="outline" className="w-full">Visit Community</Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 border-t pt-6">
                <h3 className="text-xl font-semibold mb-3">Join Our Mission</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button className="justify-start">
                    <Users className="mr-2 h-4 w-4" />
                    Career Opportunities
                  </Button>
                  <Button className="justify-start">
                    <HeartPulse className="mr-2 h-4 w-4" />
                    Partner With Us
                  </Button>
                  <Button className="justify-start">
                    <Code className="mr-2 h-4 w-4" />
                    Contribute to Open Source
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default AboutPage;
