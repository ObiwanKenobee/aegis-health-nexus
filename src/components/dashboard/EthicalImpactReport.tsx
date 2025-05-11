
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, ThumbsDown, ThumbsUp, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';

const EthicalImpactReport: React.FC = () => {
  const [showFeedback, setShowFeedback] = useState(false);

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <CardTitle className="text-md flex items-center gap-2">
          <Brain className="h-4 w-4 text-health-primary" />
          Ethical Impact Report
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-3 bg-muted/40 rounded-md">
          <h4 className="text-sm font-medium mb-2">SHRUC-9 Priority Reasoning</h4>
          <p className="text-xs text-muted-foreground mb-3">
            Why the AI recommended focusing on Union Council 9 this week:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <p className="text-xs">
                  Dropout rate increased by 14% in the last 30 days
                </p>
                <div className="mt-1 h-1 w-full bg-muted relative">
                  <div className="absolute top-0 left-0 h-1 bg-health-alert" style={{width: '75%'}}></div>
                </div>
                <p className="text-[10px] text-muted-foreground">Trust score: High (75%)</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <p className="text-xs">
                  Religious holiday ends today, families now available
                </p>
                <div className="mt-1 h-1 w-full bg-muted relative">
                  <div className="absolute top-0 left-0 h-1 bg-health-primary" style={{width: '90%'}}></div>
                </div>
                <p className="text-[10px] text-muted-foreground">Community verified: Yes (90%)</p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-health-primary/20 flex items-center justify-center mt-0.5">
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <p className="text-xs">
                    Ethical weight score: 4.2/5
                  </p>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-3 w-3 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs">
                          A score that balances urgency, resource availability, and cultural appropriateness
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <div className="mt-1 h-1 w-full bg-muted relative">
                  <div className="absolute top-0 left-0 h-1 bg-health-success" style={{width: '84%'}}></div>
                </div>
                <p className="text-[10px] text-muted-foreground">Cultural sensitivity: High (84%)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="text-xs">
                <HelpCircle className="h-3 w-3 mr-1" /> 
                What does this mean?
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>AI Ethics Glossary</DialogTitle>
              </DialogHeader>
              <div className="space-y-2 text-sm">
                <div>
                  <h3 className="font-medium">Ethical Weight Score</h3>
                  <p className="text-muted-foreground text-xs">A measure of how the AI balances healthcare priorities with community values and cultural considerations.</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium">Trust Score</h3>
                  <p className="text-muted-foreground text-xs">How reliable the data source is, based on validation, recency, and completeness.</p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-medium">Cultural Sensitivity</h3>
                  <p className="text-muted-foreground text-xs">How well the recommendation aligns with local cultural practices, religious observances, and community preferences.</p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        {!showFeedback ? (
          <div className="flex items-center justify-center gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={() => setShowFeedback(true)}>
              <ThumbsDown className="h-3 w-3" /> Disagree
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-1" onClick={() => setShowFeedback(true)}>
              <ThumbsUp className="h-3 w-3" /> Agree
            </Button>
          </div>
        ) : (
          <div className="text-center text-xs text-muted-foreground">
            Thank you for your feedback! Your input helps improve our recommendations.
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EthicalImpactReport;
