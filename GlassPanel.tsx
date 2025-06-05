import React from 'react';
import { cn } from '@/lib/utils';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg';
}

const GlassPanel: React.FC<GlassPanelProps> = ({ 
  children, 
  className, 
  blur = 'md' 
}) => {
  const blurClass = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg'
  }[blur];

  return (
    <div 
      className={cn(
        'bg-white/10 border border-white/20 rounded-2xl',
        'shadow-2xl shadow-black/20',
        blurClass,
        'transition-all duration-300 hover:bg-white/15',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassPanel;