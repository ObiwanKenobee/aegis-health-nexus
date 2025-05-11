
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SmartSchedulePage from "./pages/SmartSchedulePage";
import CounselorToolPage from "./pages/CounselorToolPage";
import ColdChainPage from "./pages/ColdChainPage";
import AIEthicsPage from "./pages/AIEthicsPage";
import SyncStatusPage from "./pages/SyncStatusPage";
import MeshStatusPage from "./pages/MeshStatusPage";
import DataExportPage from "./pages/DataExportPage";
import SettingsPage from "./pages/SettingsPage";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/schedule" element={<SmartSchedulePage />} />
          <Route path="/counselor" element={<CounselorToolPage />} />
          <Route path="/cold-chain" element={<ColdChainPage />} />
          <Route path="/ai-ethics" element={<AIEthicsPage />} />
          <Route path="/sync-status" element={<SyncStatusPage />} />
          <Route path="/mesh-status" element={<MeshStatusPage />} />
          <Route path="/data-export" element={<DataExportPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
