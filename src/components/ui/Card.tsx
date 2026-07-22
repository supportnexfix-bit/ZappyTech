import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  notched?: boolean;
  dotPattern?: boolean;
  borderColor?: 'default' | 'emerald' | 'steel' | 'none';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = true,
  notched = false,
  dotPattern = false,
  borderColor = 'default',
  ...props
}) => {
  const borderStyles = {
    default: 'border border-neutral-200 dark:border-neutral-800',
    emerald: 'border border-brand-emerald/40 dark:border-brand-emerald/30',
    steel: 'border border-brand-steel/40 dark:border-brand-steel/30',
    none: 'border-none',
  };

  return (
    <div
      className={cn(
        'bg-white dark:bg-brand-cardDark p-6 transition-all duration-300 relative overflow-hidden',
        borderStyles[borderColor],
        notched ? 'clip-notch notch-border-container' : 'rounded-lg',
        hoverEffect && !notched && 'shadow-premium hover:shadow-premium-hover dark:shadow-premium-dark dark:hover:shadow-premium-dark-hover hover:-translate-y-1',
        hoverEffect && notched && 'hover:brightness-105 dark:hover:brightness-110',
        className
      )}
      {...props}
    >
      {/* Optional engineering dot matrix overlay in the background */}
      {dotPattern && <div className="absolute inset-0 dot-matrix pointer-events-none opacity-40" />}
      
      {/* Decorative corner highlights for notched cards */}
      {notched && (
        <>
          <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-brand-emerald/60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-brand-emerald/60 pointer-events-none" />
        </>
      )}
      
      {/* Card Content wrapper to keep it above dot-matrix */}
      <div className="relative z-10 h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
