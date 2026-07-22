import React, { forwardRef, useId } from 'react';
import { cn } from '../../utils/cn';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, rows = 4, ...props }, ref) => {
    const textareaId = useId();
    const errorId = `${textareaId}-error`;
    const helperId = `${textareaId}-helper`;

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label
            htmlFor={textareaId}
            className="font-heading font-medium text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            id={textareaId}
            ref={ref}
            rows={rows}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            className={cn(
              'w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border text-brand-black dark:text-white transition-all duration-200 outline-none resize-y',
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

Textarea.displayName = 'Textarea';
