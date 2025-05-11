
import React, { useState } from 'react';
import { Shield, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface DataTrustConsentBannerProps {
  onAccept?: () => void;
  onDecline?: () => void;
}

const DataTrustConsentBanner: React.FC<DataTrustConsentBannerProps> = ({
  onAccept,
  onDecline
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Card className="border-health-success/30 bg-gradient-to-r from-health-success/5 to-transparent">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-health-success/20">
            <Shield className="h-5 w-5 text-health-success" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-medium">Your data sovereignty matters</h3>
            <p className="text-xs text-muted-foreground">
              AEGIS Health honors your right to control how your community's data is used
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onDecline}>
              Decline
            </Button>
            <Button 
              className="bg-health-success hover:bg-health-success/80" 
              size="sm"
              onClick={onAccept}
            >
              I Consent
            </Button>
          </div>
        </div>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="mt-2">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="px-2 py-1 h-auto text-xs flex items-center gap-1">
              Where your data goes {isOpen ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div className="mt-3 pt-3 border-t text-sm space-y-2">
              <p className="text-muted-foreground text-xs">
                "Your data, your decision – AEGIS honors consent"
              </p>
              
              <ul className="space-y-1 text-xs">
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-health-success mr-2"></span>
                  Data is stored locally first and only synced with your permission
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-health-success mr-2"></span>
                  Your community data is anonymized before regional sharing
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 rounded-full bg-health-success mr-2"></span>
                  You can revoke consent and delete your data at any time
                </li>
              </ul>
              
              <Button variant="link" size="sm" className="h-auto p-0 text-xs flex items-center gap-1">
                View detailed data flow chart <ExternalLink className="h-3 w-3" />
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default DataTrustConsentBanner;
