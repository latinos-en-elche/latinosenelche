import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const VivirElche = lazy(() => import("./pages/VivirElche"));
const Tramites = lazy(() => import("./pages/Tramites"));
const Empleo = lazy(() => import("./pages/Empleo"));
const Comunidad = lazy(() => import("./pages/Comunidad"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" /></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vivir-elche" element={<VivirElche />} />
              <Route path="/tramites" element={<Tramites />} />
              <Route path="/empleo" element={<Empleo />} />
              <Route path="/comunidad" element={<Comunidad />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
