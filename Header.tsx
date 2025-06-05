import React from 'react';
import { Button } from '@/components/ui/button';
import { Bell, Settings, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from './Logo';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="w-full p-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => navigate('/')}>
          <Logo size="lg" className="drop-shadow-2xl" />
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              PENNYWISE
            </h1>
            <p className="text-lg font-bold bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              PRO
            </p>
            <p className="text-xs text-orange-400/80 font-medium tracking-wider">
              BECAUSE LIFE DOESN'T HAPPEN ALL AT ONCE.
            </p>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10"
          >
            <Bell className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => navigate('/account')}
          >
            <Settings className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-white/70 hover:text-white hover:bg-white/10"
            onClick={() => navigate('/account')}
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;