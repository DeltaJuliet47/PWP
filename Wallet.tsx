import React, { useState } from 'react';
import { AppLayout } from '@/components/AppLayout';
import GlassPanel from '@/components/GlassPanel';
import WalletCard from '@/components/WalletCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Clock, DollarSign, Calendar, AlertTriangle, TrendingUp, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import Logo from '@/components/Logo';

const Wallet: React.FC = () => {
  const [transferAmount, setTransferAmount] = useState('');
  const [disbursementSchedule, setDisbursementSchedule] = useState('weekly');
  const [emergencyRequest, setEmergencyRequest] = useState(false);
  const [emergencyAmount, setEmergencyAmount] = useState('');

  const handleTransfer = () => {
    console.log('Transfer:', transferAmount, disbursementSchedule);
    setTransferAmount('');
  };

  const handleEmergencyRequest = () => {
    setEmergencyRequest(true);
    console.log('Emergency request:', emergencyAmount);
  };

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <Logo size="lg" />
          <div>
            <h1 className="text-3xl font-bold text-gradient">
              Wallet Management
            </h1>
            <p className="text-copper-400/80 text-sm font-medium tracking-wider">
              CONTROL YOUR FINANCIAL FLOW
            </p>
          </div>
        </div>

        {/* Wallet Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <WalletCard />
          
          <GlassPanel className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Next Disbursement</h3>
                <p className="text-sm text-white/60">Weekly Schedule</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-green-400">$350.00</p>
            <p className="text-sm text-white/60 mt-2">Available in 3 days</p>
            <Progress value={60} className="mt-3" />
          </GlassPanel>

          <GlassPanel className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-copper-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-copper-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Monthly Savings</h3>
                <p className="text-sm text-white/60">This month</p>
              </div>
            </div>
            <p className="text-2xl font-bold text-copper-400">$1,240.00</p>
            <p className="text-sm text-green-400 mt-2">+12% from last month</p>
          </GlassPanel>
        </div>

        {/* Transfer Money Section */}
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <DollarSign className="w-6 h-6 text-green-400" />
            Transfer Money
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div>
                <Label htmlFor="amount" className="text-white/80">Transfer Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                />
              </div>
              <div>
                <Label htmlFor="schedule" className="text-white/80">Disbursement Schedule</Label>
                <Select value={disbursementSchedule} onValueChange={setDisbursementSchedule}>
                  <SelectTrigger className="bg-white/5 border-white/20 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button 
                onClick={handleTransfer}
                className="w-full copper-gradient hover:opacity-90 text-white font-semibold"
                disabled={!transferAmount}
              >
                Transfer Funds
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
              <h3 className="font-semibold text-green-400 mb-3">How it works</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>• Funds are locked until disbursement dates</li>
                <li>• Weekly: Every 7 days</li>
                <li>• Bi-weekly: Every 14 days</li>
                <li>• Emergency access available with 4hr wait</li>
              </ul>
            </div>
          </div>
        </GlassPanel>

        {/* Emergency Access */}
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-copper-400" />
            Emergency Access
          </h2>
          {!emergencyRequest ? (
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="emergency-amount" className="text-white/80">Emergency Amount</Label>
                  <Input
                    id="emergency-amount"
                    type="number"
                    placeholder="Enter amount needed"
                    value={emergencyAmount}
                    onChange={(e) => setEmergencyAmount(e.target.value)}
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/40"
                  />
                </div>
                <Button 
                  onClick={handleEmergencyRequest}
                  variant="outline"
                  className="w-full border-copper-500/30 text-copper-400 hover:bg-copper-500/10"
                  disabled={!emergencyAmount}
                >
                  Request Emergency Access
                  <Clock className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="bg-copper-500/10 rounded-lg p-6 border border-copper-500/20">
                <h3 className="font-semibold text-copper-400 mb-3">Emergency Access</h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>• 4-hour approval waiting period</li>
                  <li>• Available between disbursements</li>
                  <li>• Limited to available balance</li>
                  <li>• Affects next disbursement amount</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-copper-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-copper-400 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Emergency Request Submitted</h3>
              <p className="text-white/70 mb-4">Your request for ${emergencyAmount} is being processed.</p>
              <Badge variant="outline" className="border-copper-500/30 text-copper-400">
                Approval pending - 3h 45m remaining
              </Badge>
            </div>
          )}
        </GlassPanel>

        {/* Recent Transactions */}
        <GlassPanel className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Transactions</h2>
          <div className="space-y-4">
            {[
              { type: 'disbursement', amount: 350, date: '2024-01-15', status: 'completed' },
              { type: 'transfer', amount: 1000, date: '2024-01-10', status: 'completed' },
              { type: 'emergency', amount: 200, date: '2024-01-08', status: 'completed' },
            ].map((transaction, index) => (
              <Card key={index} className="bg-white/5 border-white/10">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        transaction.type === 'disbursement' ? 'bg-green-500/20' :
                        transaction.type === 'transfer' ? 'bg-copper-500/20' : 'bg-copper-500/20'
                      }`}>
                        {transaction.type === 'disbursement' ? 
                          <ArrowDownLeft className="w-5 h-5 text-green-400" /> :
                          transaction.type === 'transfer' ?
                          <ArrowUpRight className="w-5 h-5 text-copper-400" /> :
                          <AlertTriangle className="w-5 h-5 text-copper-400" />
                        }
                      </div>
                      <div>
                        <p className="font-semibold text-white capitalize">{transaction.type}</p>
                        <p className="text-sm text-white/60">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        transaction.type === 'disbursement' ? 'text-green-400' :
                        transaction.type === 'transfer' ? 'text-copper-400' : 'text-copper-400'
                      }`}>
                        ${transaction.type === 'disbursement' ? '-' : '+'}${transaction.amount}
                      </p>
                      <Badge variant="outline" className="border-green-500/30 text-green-400 text-xs">
                        {transaction.status}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </GlassPanel>
      </div>
    </AppLayout>
  );
};

export default Wallet;