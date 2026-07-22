import React from 'react';
import { cn } from '../../utils/cn';

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  tag,
  title,
  description,
  align = 'center',
  className,
}) => {
  const alignmentClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn('flex flex-col max-w-3xl mx-auto mb-16', alignmentClasses[align], className)}>
      {tag && (
        <span className="text-xs font-heading font-semibold text-brand-emerald dark:text-brand-emerald tracking-widest uppercase mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-brand-emerald inline-block clip-notch-sm" />
          {tag}
        </span>
      )}
      
      <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-black dark:text-white leading-tight">
        {title}
      </h2>
      
      {/* Repeating notch design language in section dividers */}
      <div className="flex items-center gap-2 my-5 w-full justify-center">
        <span className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow max-w-[80px]" />
        
        {/* Notch separator */}
        <div className="relative w-8 h-4 flex items-center justify-center text-brand-emerald">
          <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Double notch path */}
            <path d="M2 1 L10 1 L12 4 L14 1 L22 1" stroke="currentColor" strokeWidth="1.5" />
            <path d="M6 8 L18 8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" className="opacity-50" />
            <rect x="10" y="3" width="4" height="4" fill="currentColor" className="clip-notch-sm" />
          </svg>
        </div>
        
        <span className="h-[1px] bg-neutral-200 dark:bg-neutral-800 flex-grow max-w-[80px]" />
      </div>

      {description && (
        <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
