import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <img 
        src="https://d64gsuwffb70l.cloudfront.net/6832cccbd540c6c74ba565b0_1749083840453_d155c183.png" 
        alt="PennyWisePro Logo" 
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default Logo;