import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { AppContextProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import Wallet from "./pages/Wallet";
import InstantLoan from "./pages/InstantLoan";
import Account from "./pages/Account";
import BankLink from "./pages/BankLink";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AppContextProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/loans" element={<InstantLoan />} />
              <Route path="/account" element={<Account />} />
              <Route path="/bank-link" element={<BankLink />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AppContextProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;