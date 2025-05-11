
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="flex justify-center">
          <div className="h-24 w-24 rounded-full bg-health-primary/10 flex items-center justify-center">
            <AlertTriangle size={48} className="text-health-primary" />
          </div>
        </div>
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl text-muted-foreground">
          The page you requested could not be found. It might have been moved or doesn't exist.
        </p>
        <Button size="lg" asChild>
          <a href="/">Return to Dashboard</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
