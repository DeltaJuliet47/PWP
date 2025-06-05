import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet, ArrowUpRight, Clock } from 'lucide-react';
import GlassPanel from './GlassPanel';

interface WalletCardProps {
  balance?: number;
  pendingAmount?: number;
  nextDisbursement?: string;
}

const WalletCard: React.FC<WalletCardProps> = ({ 
  balance = 2450, 
  pendingAmount = 0, 
  nextDisbursement = 'In 3 days' 
}) => {
  const [transferAmount, setTransferAmount] = React.useState('');
  const [disbursementType, setDisbursementType] = React.useState('weekly');
  const [showTransfer, setShowTransfer] = React.useState(false);

  return (
    <GlassPanel className="p-6 max-w-md">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 copper-gradient rounded-xl">
          <Wallet className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">PennyWise Wallet</h2>
          <p className="text-white/70 text-sm">Smart Money Management</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-black/20 rounded-xl p-4">
          <p className="text-white/70 text-sm">Available Balance</p>
          <p className="text-2xl font-bold text-green-400">${balance.toFixed(2)}</p>
        </div>

        {pendingAmount > 0 && (
          <div className="bg-copper-500/20 rounded-xl p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-copper-400" />
            <div>
              <p className="text-copper-400 text-sm">Pending Withdrawal</p>
              <p className="text-white font-semibold">${pendingAmount.toFixed(2)}</p>
            </div>
          </div>
        )}

        <div className="bg-black/20 rounded-xl p-4">
          <p className="text-white/70 text-sm">Next Disbursement</p>
          <p className="text-green-400 font-semibold">{nextDisbursement}</p>
        </div>

        {!showTransfer ? (
          <Button 
            onClick={() => setShowTransfer(true)}
            className="w-full copper-gradient hover:opacity-90 text-white font-semibold"
          >
            <ArrowUpRight className="w-4 h-4 mr-2" />
            Add Money
          </Button>
        ) : (
          <div className="space-y-3">
            <Input
              type="number"
              placeholder="Enter amount"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              className="bg-black/20 border-white/20 text-white placeholder:text-white/50"
            />
            <Select value={disbursementType} onValueChange={setDisbursementType}>
              <SelectTrigger className="bg-black/20 border-white/20 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly Disbursements</SelectItem>
                <SelectItem value="biweekly">Bi-weekly Disbursements</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                onClick={() => setShowTransfer(false)}
                className="flex-1 border-white/20 text-white hover:bg-white/10"
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 copper-gradient text-white font-semibold"
              >
                Transfer
              </Button>
            </div>
          </div>
        )}
      </div>
    </GlassPanel>
  );
};

export default WalletCard;