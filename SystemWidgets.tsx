import React from 'react';
import { Calendar, Activity, Music, Wifi } from 'lucide-react';
import GlassPanel from './GlassPanel';

const SystemWidgets: React.FC = () => {
  const [currentTime, setCurrentTime] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 max-w-md">
      <GlassPanel className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-blue-400" />
          <span className="text-white/70 text-xs">Today</span>
        </div>
        <div className="text-white font-semibold">
          {currentTime.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
        <div className="text-white/70 text-sm">
          {currentTime.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </GlassPanel>

      <GlassPanel className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="w-4 h-4 text-green-400" />
          <span className="text-white/70 text-xs">System</span>
        </div>
        <div className="text-white font-semibold">Optimal</div>
        <div className="flex items-center gap-1 mt-1">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-white/70 text-xs">All systems active</span>
        </div>
      </GlassPanel>

      <GlassPanel className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Music className="w-4 h-4 text-purple-400" />
          <span className="text-white/70 text-xs">Audio</span>
        </div>
        <div className="text-white font-semibold text-sm">Ambient Focus</div>
        <div className="flex items-center gap-1 mt-1">
          <div className="flex gap-1">
            {[1,2,3,4,5].map(i => (
              <div key={i} className={`w-1 h-3 rounded ${i <= 3 ? 'bg-purple-400' : 'bg-white/20'}`}></div>
            ))}
          </div>
        </div>
      </GlassPanel>

      <GlassPanel className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <Wifi className="w-4 h-4 text-blue-400" />
          <span className="text-white/70 text-xs">Network</span>
        </div>
        <div className="text-white font-semibold">Connected</div>
        <div className="text-white/70 text-xs mt-1">Ultra-fast 5G</div>
      </GlassPanel>
    </div>
  );
};

export default SystemWidgets;