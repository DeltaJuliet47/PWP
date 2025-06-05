import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import GlassPanel from '@/components/GlassPanel';
import { Button } from '@/components/ui/button';
import { Building2, Shield, Plus, CheckCircle, AlertCircle } from 'lucide-react';
import Logo from '@/components/Logo';

const BankLink: React.FC = () => {
  const [linkedAccounts, setLinkedAccounts] = React.useState([
    { id: 1, bank: 'Chase Bank', account: '****1234', type: 'Checking', status: 'connected' },
    { id: 2, bank: 'Wells Fargo', account: '****5678', type: 'Savings', status: 'pending' }
  ]);

  return (
    <AppLayout>
      <div className="space-y-8">
        {/* Header with Logo */}
        <div className="flex items-center gap-4 mb-8">
          <Logo size="lg" />
          <div>
            <h1 className="text-3xl font-bold text-gradient">
              Bank Accounts
            </h1>
            <p className="text-yellow-400/80 text-sm font-medium tracking-wider">
              CONNECT YOUR FINANCIAL INSTITUTIONS
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Connected Accounts */}
          <div className="lg:col-span-2 space-y-6">
            <GlassPanel className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-white">Connected Accounts</h2>
                <Button className="bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-black font-semibold">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Account
                </Button>
              </div>

              <div className="space-y-4">
                {linkedAccounts.map((account) => (
                  <div key={account.id} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                          <Building2 className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{account.bank}</h3>
                          <p className="text-white/70 text-sm">{account.type} • {account.account}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {account.status === 'connected' ? (
                          <>
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-green-400 text-sm">Connected</span>
                          </>
                        ) : (
                          <>
                            <AlertCircle className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-400 text-sm">Pending</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </GlassPanel>

            {/* Add New Account */}
            <GlassPanel className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Add New Bank Account</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">Bank Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your bank name"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400/50"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Account Type</label>
                    <select className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-400/50">
                      <option value="checking">Checking</option>
                      <option value="savings">Savings</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Account Number</label>
                    <input 
                      type="text" 
                      placeholder="Last 4 digits"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-yellow-400/50"
                    />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-yellow-500 to-green-500 hover:from-yellow-600 hover:to-green-600 text-black font-semibold">
                  Connect Account
                </Button>
              </div>
            </GlassPanel>
          </div>

          {/* Security Info */}
          <div className="space-y-6">
            <GlassPanel className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h3 className="text-lg font-semibold text-white">Bank-Level Security</h3>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                <p>• 256-bit SSL encryption</p>
                <p>• Read-only access</p>
                <p>• No storage of credentials</p>
                <p>• Instant disconnect option</p>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Supported Banks</h3>
              <div className="space-y-2 text-sm text-white/70">
                <p>✓ Chase Bank</p>
                <p>✓ Wells Fargo</p>
                <p>✓ Bank of America</p>
                <p>✓ Citibank</p>
                <p>✓ Capital One</p>
                <p className="text-yellow-400 mt-3">+ 10,000+ more banks</p>
              </div>
            </GlassPanel>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default BankLink;