import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: number; // width/height of the icon in pixels
}

export const LogoIcon: React.FC<{ size?: number; className?: string }> = ({ size = 40, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-brand-emerald dark:text-brand-emerald ${className}`}
      role="img"
      aria-label="ZAPPYTECH Logo Icon"
    >
      {/* Background blueprint circle - subtle reference */}
      <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="opacity-20" />
      
      {/* Custom Z Polygon with Notch */}
      {/* 
        Points represent:
        - Top-bar: (18, 20) -> (82, 20) -> (82, 34) -> (45, 34)
        - Diagonal: diagonal down to (18, 66)
        - Notch in the middle:
          Normal diagonal path right-side goes from (82, 34) to (54, 54).
          We add the geometric notch (flat bottom, vertical side - representing a tech-cut/notch) 
          at the center (50, 50).
        - Bottom-bar: (18, 66) -> (18, 80) -> (82, 80) -> (82, 66) -> (36, 66)
      */}
      <path
        d="M 18 20 
           H 82 
           V 34 
           H 52
           L 58 40
           H 46
           V 46
           L 28 66
           H 18
           V 80
           H 82
           V 66
           H 48
           L 42 60
           H 54
           V 54
           L 72 34
           H 82
           V 20 Z"
        fill="currentColor"
        className="transition-all duration-300"
      />
      
      {/* Small precision crosshair overlay - representing technical precision */}
      <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
      <line x1="50" y1="85" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
      <line x1="5" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
      <line x1="85" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false, size = 32 }) => {
  return (
    <div className={`flex items-center gap-3 font-heading font-extrabold tracking-wider ${className}`}>
      <LogoIcon size={size} />
      {!iconOnly && (
        <span className="text-xl md:text-2xl text-brand-black dark:text-white flex items-baseline tracking-normal">
          ZAPPY
          <span className="text-brand-emerald font-light">TECH</span>
        </span>
      )}
    </div>
  );
};
