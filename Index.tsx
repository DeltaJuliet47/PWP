import React from 'react';
import Header from '@/components/Header';
import FloatingDock from '@/components/FloatingDock';
import GlassPanel from '@/components/GlassPanel';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Shield, Clock, TrendingUp, DollarSign, Users, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/Logo';

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 relative overflow-hidden">
      {/* Animated background with green and copper */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-copper-900/20 via-green-900/40 to-green-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-copper-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <div className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <Logo size="xl" className="drop-shadow-2xl" />
              </div>
              <h1 className="text-6xl font-bold text-white mb-6 text-gradient">
                PENNYWISE PRO
              </h1>
              <p className="text-xl text-copper-400/80 font-medium tracking-wider mb-4">
                BECAUSE LIFE DOESN'T HAPPEN ALL AT ONCE.
              </p>
              <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
                Smart financial management with controlled disbursements. Transfer money and access it through weekly or bi-weekly schedules, with emergency access when you need it most.
              </p>
              
              {/* Instant Loan Banner */}
              <div className="inline-flex items-center gap-2 glass-effect rounded-full px-6 py-3 border border-green-500/30 mb-8">
                <Zap className="w-5 h-5 text-green-400" />
                <span className="text-green-400 font-semibold">Instant Loan Option Coming Soon</span>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/wallet')}
                  className="copper-gradient hover:opacity-90 px-8 py-3 text-lg text-white font-semibold"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  onClick={() => navigate('/bank-link')}
                  variant="outline"
                  className="border-green-400/30 text-green-400 hover:bg-green-500/10 px-8 py-3 text-lg"
                >
                  Link Bank Account
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <GlassPanel className="p-8 text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Controlled Disbursements</h3>
                <p className="text-white/70">Set weekly or bi-weekly disbursements to manage your spending habits and build financial discipline.</p>
              </GlassPanel>

              <GlassPanel className="p-8 text-center">
                <div className="w-16 h-16 bg-copper-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-copper-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Emergency Access</h3>
                <p className="text-white/70">Need funds between disbursements? Request emergency access with a 4-hour approval waiting period.</p>
              </GlassPanel>

              <GlassPanel className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Smart Analytics</h3>
                <p className="text-white/70">Track your spending patterns and financial goals with intelligent insights and recommendations.</p>
              </GlassPanel>
            </div>

            {/* Quick Actions */}
            <GlassPanel className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Actions</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <Button 
                  onClick={() => navigate('/wallet')}
                  variant="outline"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10 h-16"
                >
                  View Wallet
                </Button>
                <Button 
                  onClick={() => navigate('/bank-link')}
                  variant="outline"
                  className="border-copper-500/30 text-copper-400 hover:bg-copper-500/10 h-16"
                >
                  Link Bank
                </Button>
                <Button 
                  onClick={() => navigate('/loans')}
                  variant="outline"
                  className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 h-16"
                >
                  Instant Loans
                </Button>
                <Button 
                  onClick={() => navigate('/account')}
                  variant="outline"
                  className="border-green-500/30 text-green-400 hover:bg-green-500/10 h-16"
                >
                  Account Settings
                </Button>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>

      <FloatingDock />
    </div>
  );
};

export default Index;