import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', label, error, helperText, ...props }, ref) => {
    const inputId = useId();
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="font-heading font-medium text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            type={type}
            ref={ref}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              'w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border text-brand-black dark:text-white transition-all duration-200 outline-none',
              // Custom notch border styling for input fields to keep it premium
              'clip-notch-sm rounded-sm',
              error
                ? 'border-red-500 focus:border-red-500'
                : 'border-neutral-200 dark:border-neutral-800 focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald',
              'disabled:opacity-50 disabled:cursor-not-allowed',
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <span
            id={errorId}
            className="text-xs text-red-500 font-medium"
            role="alert"
          >
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={helperId} className="text-xs text-neutral-400">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
