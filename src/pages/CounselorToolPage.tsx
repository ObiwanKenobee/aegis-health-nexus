
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Languages, BookOpen, Share2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CounselorToolPage = () => {
  return (
    <DashboardLayout 
      title="Caregiver Counseling Tool" 
      description="Combat misinformation with culturally adapted, linguistically inclusive tools"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Tabs defaultValue="assistant">
            <TabsList className="mb-4">
              <TabsTrigger value="assistant">Voice Assistant</TabsTrigger>
              <TabsTrigger value="resources">Educational Resources</TabsTrigger>
              <TabsTrigger value="myths">Myth Database</TabsTrigger>
            </TabsList>
            
            <TabsContent value="assistant">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-health-primary" />
                    Counselor Voice Bot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="p-6 border rounded-md mb-6 h-64 bg-muted/20 overflow-y-auto">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="bg-primary rounded-full p-2 h-8 w-8 flex-shrink-0 flex items-center justify-center text-white">AI</div>
                        <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                          <p className="text-sm">How can I help explain vaccines to parents today?</p>
                        </div>
                      </div>
                      
                      <div className="flex gap-3 justify-end">
                        <div className="bg-primary/10 p-3 rounded-lg max-w-[80%]">
                          <p className="text-sm">I'm having trouble with parents who heard vaccines cause fever.</p>
                        </div>
                        <div className="bg-muted rounded-full p-2 h-8 w-8 flex-shrink-0 flex items-center justify-center">
                          <Users className="h-4 w-4" />
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <div className="bg-primary rounded-full p-2 h-8 w-8 flex-shrink-0 flex items-center justify-center text-white">AI</div>
                        <div className="bg-muted p-3 rounded-lg max-w-[80%]">
                          <p className="text-sm">A mild fever can be normal after vaccination and usually goes away in 1-2 days. It's actually a sign that the body is building protection. You can explain this is much safer than the diseases vaccines prevent.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <Textarea 
                        placeholder="Type your question or scenario here..." 
                        className="min-h-[80px]"
                      />
                    </div>
                    <Button className="flex-shrink-0 self-end">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Send
                    </Button>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2">
                    <Badge variant="outline" className="bg-primary/5">
                      <Languages className="mr-1 h-3 w-3" />
                      Supports 8 Languages
                    </Badge>
                    <Badge variant="outline" className="bg-primary/5">Offline Ready</Badge>
                    <Badge variant="outline" className="bg-primary/5">Voice Enabled</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="resources">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-health-primary" />
                    Educational Materials
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Vaccine Safety Pamphlet", type: "PDF", languages: ["English", "Urdu", "Swahili"], size: "1.2 MB" },
                      { title: "Common Side Effects Guide", type: "PDF", languages: ["English", "Urdu", "Hausa"], size: "0.8 MB" },
                      { title: "Vaccination Schedule Visual", type: "Image", languages: ["Universal"], size: "0.5 MB" },
                      { title: "Community Benefits Video", type: "Video", languages: ["English", "Urdu"], size: "24 MB" },
                    ].map((resource, index) => (
                      <div key={index} className="border rounded-md p-4 flex justify-between">
                        <div>
                          <h4 className="font-medium">{resource.title}</h4>
                          <div className="text-xs text-muted-foreground mt-1">
                            {resource.type} • {resource.size}
                          </div>
                          <div className="flex gap-1 mt-1">
                            {resource.languages.map(lang => (
                              <Badge key={lang} variant="outline" className="text-xs">{lang}</Badge>
                            ))}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-4">
                  <Button variant="outline" size="sm">Upload New</Button>
                  <Button size="sm">View All</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="myths">
              <Card>
                <CardHeader>
                  <CardTitle>Vaccination Myth Database</CardTitle>
                </CardHeader>
                <CardContent className="h-96 flex items-center justify-center">
                  <p className="text-muted-foreground">Myth database and countering strategies coming soon</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tool Statistics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Counseling Sessions</span>
                </div>
                <span className="font-medium">245</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Languages className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Languages Used</span>
                </div>
                <span className="font-medium">8</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Communities Reached</span>
                </div>
                <span className="font-medium">34</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CounselorToolPage;
