
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Scroll restoration component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  // Use useLayoutEffect for route changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  // Use useEffect for initial page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Disable automatic hash scrolling on initial load
    // Only handle hash navigation after the page has fully loaded
    const hash = window.location.hash;
    if (hash && document.readyState === 'complete') {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      }, 100);
    }
  }, []);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
