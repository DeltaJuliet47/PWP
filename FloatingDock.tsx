import React from 'react';
import { Home, Wallet, Settings, User, TrendingUp, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useNavigate, useLocation } from 'react-router-dom';

interface DockItem {
  icon: React.ComponentType<any>;
  label: string;
  path: string;
}

const FloatingDock: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const dockItems: DockItem[] = [
    { icon: Home, label: 'Dashboard', path: '/' },
    { icon: Wallet, label: 'Wallet', path: '/wallet' },
    { icon: TrendingUp, label: 'Loans', path: '/loans' },
    { icon: Building2, label: 'Bank Link', path: '/bank-link' },
    { icon: User, label: 'Account', path: '/account' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-2 flex gap-2">
        {dockItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={cn(
                'p-3 rounded-xl transition-all duration-300 hover:scale-110',
                'hover:bg-white/10 group relative',
                isActive && 'bg-blue-500/30 scale-105'
              )}
            >
              <Icon className="w-6 h-6 text-white" />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingDock;