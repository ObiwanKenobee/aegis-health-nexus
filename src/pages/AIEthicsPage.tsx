
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import EthicalImpactReport from '@/components/dashboard/EthicalImpactReport';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { HeartPulse, Shield, Users, AlertTriangle } from 'lucide-react';

const AIEthicsPage = () => {
  const ethicalFactors = [
    { name: "Privacy Protection", score: 92, trend: "improving" },
    { name: "Algorithm Bias", score: 87, trend: "stable" },
    { name: "Cultural Sensitivity", score: 95, trend: "improving" },
    { name: "Data Security", score: 90, trend: "stable" },
    { name: "Consent Management", score: 85, trend: "needs attention" },
  ];

  return (
    <DashboardLayout 
      title="Ethical Impact Analysis" 
      description="Transparent reasoning behind AI-generated health decisions"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="report">
            <TabsList className="mb-4">
              <TabsTrigger value="report">Impact Report</TabsTrigger>
              <TabsTrigger value="compliance">Compliance</TabsTrigger>
              <TabsTrigger value="governance">AI Governance</TabsTrigger>
            </TabsList>
            
            <TabsContent value="report">
              <EthicalImpactReport />
            </TabsContent>
            
            <TabsContent value="compliance">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-health-primary" />
                    Compliance Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-2">WHO AI Ethics Guidelines</h3>
                      <div className="p-4 rounded-md border bg-muted/10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h4 className="font-medium">Human Autonomy</h4>
                            <p className="text-sm text-muted-foreground">Ensuring human oversight in all AI decisions</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="px-2 py-1 text-xs rounded-full bg-health-success/20 text-health-success">
                              Compliant
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h4 className="font-medium">Transparency</h4>
                            <p className="text-sm text-muted-foreground">Explainable AI decision making processes</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="px-2 py-1 text-xs rounded-full bg-health-success/20 text-health-success">
                              Compliant
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div>
                            <h4 className="font-medium">Data Privacy</h4>
                            <p className="text-sm text-muted-foreground">Protection of sensitive health information</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="px-2 py-1 text-xs rounded-full bg-health-warning/20 text-health-warning">
                              Review Needed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-2">Regional Compliance</h3>
                      <div className="p-4 rounded-md border bg-muted/10">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                          <div>
                            <h4 className="font-medium">Local Data Protection</h4>
                            <p className="text-sm text-muted-foreground">Adherence to regional data sovereignty laws</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="px-2 py-1 text-xs rounded-full bg-health-success/20 text-health-success">
                              Compliant
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                          <div>
                            <h4 className="font-medium">Cultural Adaptation</h4>
                            <p className="text-sm text-muted-foreground">AI systems adapted for local contexts</p>
                          </div>
                          <div className="mt-2 sm:mt-0">
                            <span className="px-2 py-1 text-xs rounded-full bg-health-success/20 text-health-success">
                              Compliant
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="governance">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-health-primary" />
                    Governance Framework
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-96 flex items-center justify-center">
                    <p className="text-muted-foreground">
                      AI Governance framework documentation coming soon
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <HeartPulse className="h-5 w-5 text-health-primary" />
                Ethical Scorecard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {ethicalFactors.map((factor, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{factor.name}</span>
                      <span className="font-medium">{factor.score}/100</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          factor.score >= 90 ? 'bg-health-success' : 
                          factor.score >= 80 ? 'bg-health-warning' : 'bg-health-alert'
                        }`} 
                        style={{ width: `${factor.score}%` }}
                      ></div>
                    </div>
                    <div className="text-xs mt-1 text-right">
                      <span className={`
                        ${factor.trend === 'improving' ? 'text-health-success' : 
                          factor.trend === 'stable' ? 'text-muted-foreground' : 'text-health-warning'}
                      `}>
                        {factor.trend === 'improving' && '↑ '}
                        {factor.trend === 'needs attention' && '↓ '}
                        {factor.trend.charAt(0).toUpperCase() + factor.trend.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-3 border rounded-md bg-muted/10">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-health-warning" />
                  <h4 className="font-medium text-sm">Attention Required</h4>
                </div>
                <p className="text-xs mt-1 text-muted-foreground">
                  Consent management protocols need review to maintain compliance with updated WHO guidelines.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AIEthicsPage;
