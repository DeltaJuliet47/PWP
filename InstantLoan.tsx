import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import GlassPanel from '@/components/GlassPanel';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Clock, DollarSign, TrendingUp, Shield, AlertCircle, CheckCircle, Star } from 'lucide-react';
import Logo from '@/components/Logo';

const InstantLoan: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = () => {
    if (email) {
      setIsSubscribed(true);
      console.log('Subscribed:', email);
    }
  };

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Instant Approval",
      description: "Get approved in under 60 seconds with our AI-powered credit assessment"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-400" />,
      title: "Flexible Amounts",
      description: "Borrow from $100 to $5,000 based on your PennyWise history"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "Smart Rates",
      description: "Competitive rates that improve with your financial discipline"
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Secure Process",
      description: "Bank-level security with transparent terms and no hidden fees"
    }
  ];

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header with Logo */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size="xl" className="drop-shadow-2xl" />
          </div>
          <h1 className="text-4xl font-bold text-gradient mb-4">
            Instant Loan Options
          </h1>
          <p className="text-yellow-400/80 text-lg font-medium tracking-wider mb-2">
            COMING SOON
          </p>
          <p className="text-white/70 max-w-2xl mx-auto">
            Get instant access to funds when life happens unexpectedly. Our smart loan system integrates seamlessly with your PennyWise account.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <GlassPanel className="p-12 text-center">
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Zap className="w-10 h-10 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Lending is Almost Here</h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            We're putting the finishing touches on our instant loan platform that will change how you access emergency funds.
          </p>
          
          {!isSubscribed ? (
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-yellow-400/30 text-white placeholder:text-white/50"
                />
                <Button 
                  onClick={handleNotifyMe}
                  className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-black font-semibold whitespace-nowrap"
                  disabled={!email}
                >
                  Notify Me
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">You'll be the first to know when we launch!</span>
            </div>
          )}
        </GlassPanel>

        {/* Features Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <GlassPanel key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </GlassPanel>
          ))}
        </div>

        {/* How It Will Work */}
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">How Instant Loans Will Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-400">1</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Quick Application</h3>
              <p className="text-white/70 text-sm">Apply directly from your PennyWise dashboard in under 2 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">2</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Instant Decision</h3>
              <p className="text-white/70 text-sm">Our AI analyzes your PennyWise history for immediate approval</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-emerald-400">3</span>
              </div>
              <h3 className="font-semibold text-white mb-2">Funds Available</h3>
              <p className="text-white/70 text-sm">Money deposited instantly to your linked account</p>
            </div>
          </div>
        </GlassPanel>

        {/* Loan Types Preview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="glass-effect border-yellow-500/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <CardTitle className="text-yellow-400">Emergency Loan</CardTitle>
              </div>
              <CardDescription className="text-white/70">For unexpected expenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">$100 - $1,000</p>
                <p className="text-sm text-white/60">Same-day funding</p>
                <Badge variant="outline" className="border-yellow-500/30 text-yellow-400">
                  5.9% - 12.9% APR
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-green-500/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <CardTitle className="text-green-400">Bridge Loan</CardTitle>
              </div>
              <CardDescription className="text-white/70">Bridge gaps between disbursements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">$200 - $2,500</p>
                <p className="text-sm text-white/60">Flexible terms</p>
                <Badge variant="outline" className="border-green-500/30 text-green-400">
                  4.9% - 9.9% APR
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-effect border-emerald-500/20">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <CardTitle className="text-emerald-400">Premium Loan</CardTitle>
              </div>
              <CardDescription className="text-white/70">For established PennyWise users</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-2xl font-bold text-white">$1,000 - $5,000</p>
                <p className="text-sm text-white/60">Best rates available</p>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                  3.9% - 7.9% APR
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ Preview */}
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                How will loan approval work?
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Our AI will analyze your PennyWise account history, disbursement patterns, and financial discipline to provide instant loan decisions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                Will this affect my disbursements?
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Loan repayments can be integrated with your disbursement schedule or set up as separate automatic payments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                What are the requirements?
              </h3>
              <p className="text-white/70 text-sm mb-4">
                Active PennyWise account for 30+ days, consistent disbursement history, and linked bank account verification.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-400" />
                When will this be available?
              </h3>
              <p className="text-white/70 text-sm mb-4">
                We're targeting Q2 2024 for the beta launch. Subscribe above to be notified when applications open.
              </p>
            </div>
          </div>
        </GlassPanel>
      </div>
    </AppLayout>
  );
};

export default InstantLoan;