import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  notched?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'md',
  notched = true,
  loading = false,
  icon,
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-brand-black text-white hover:bg-neutral-800 dark:bg-white dark:text-brand-black dark:hover:bg-neutral-200 border border-transparent',
    secondary: 'bg-brand-steel text-white hover:bg-opacity-90 dark:bg-brand-steel dark:text-white border border-transparent',
    accent: 'bg-brand-emerald text-brand-black hover:bg-brand-emerald/90 border border-transparent',
    outline: 'bg-transparent border border-neutral-300 text-brand-black hover:bg-neutral-50 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-zinc-900',
    ghost: 'bg-transparent text-brand-black hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-zinc-900',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-7 py-3.5 gap-2.5',
  };

  const notchStyles = notched ? 'clip-notch' : 'rounded-md';

  return (
    <motion.button
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        notchStyles,
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!loading && icon && <span className="inline-flex">{icon}</span>}
      <span>{children}</span>
      
      {/* Decorative technical line inside button for accent/primary variants to represent precision */}
      {notched && (variant === 'primary' || variant === 'accent') && (
        <div className="absolute top-0 right-0 w-[2px] h-full bg-brand-emerald/40 pointer-events-none group-hover:bg-brand-emerald" />
      )}
    </motion.button>
  );
};
