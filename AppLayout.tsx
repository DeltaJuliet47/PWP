import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import Header from './Header';
import WalletCard from './WalletCard';
import SystemWidgets from './SystemWidgets';
import FloatingDock from './FloatingDock';
import GlassPanel from './GlassPanel';
import { Button } from '@/components/ui/button';
import { Shield, Clock } from 'lucide-react';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const [pendingWithdrawal, setPendingWithdrawal] = React.useState(0);
  const [approvalTimeLeft, setApprovalTimeLeft] = React.useState(0);

  const handleEmergencyAccess = () => {
    if (approvalTimeLeft === 0) {
      setApprovalTimeLeft(4 * 60 * 60); // 4 hours in seconds
      setPendingWithdrawal(250); // Example amount
    }
  };

  React.useEffect(() => {
    if (approvalTimeLeft > 0) {
      const timer = setInterval(() => {
        setApprovalTimeLeft(prev => {
          if (prev <= 1) {
            setPendingWithdrawal(0);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [approvalTimeLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/40 to-slate-900"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        <Header />
        
        <div className="px-6 pb-20">
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Main wallet section */}
            <div className="lg:col-span-2 space-y-6">
              <WalletCard 
                balance={1250.75}
                pendingAmount={pendingWithdrawal}
                nextDisbursement="Friday, Dec 15"
              />
              
              {/* Emergency access */}
              <GlassPanel className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Emergency Access</h3>
                </div>
                
                {approvalTimeLeft > 0 ? (
                  <div className="bg-orange-500/20 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-orange-400 font-semibold">Approval Pending</span>
                    </div>
                    <p className="text-white text-2xl font-mono">{formatTime(approvalTimeLeft)}</p>
                    <p className="text-white/70 text-sm mt-1">Time remaining for emergency withdrawal</p>
                  </div>
                ) : (
                  <div>
                    <p className="text-white/70 mb-4">Access funds between disbursements with a 4-hour approval period.</p>
                    <Button 
                      onClick={handleEmergencyAccess}
                      variant="outline"
                      className="border-orange-400/50 text-orange-400 hover:bg-orange-400/10"
                    >
                      Request Emergency Access
                    </Button>
                  </div>
                )}
              </GlassPanel>
            </div>

            {/* Sidebar widgets */}
            <div className="space-y-6">
              <SystemWidgets />
            </div>
          </div>
        </div>
      </div>

      <FloatingDock />
    </div>
  );
};

export { AppLayout };
export default AppLayout;