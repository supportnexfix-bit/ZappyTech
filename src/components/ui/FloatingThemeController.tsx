import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Monitor, Check } from 'lucide-react';
import { useTheme, type ThemeMode } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

export const FloatingThemeController: React.FC = () => {
  const { themeMode, setThemeMode, theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const selectMode = (mode: ThemeMode) => {
    setThemeMode(mode);
    setIsOpen(false);
  };

  const getActiveIcon = () => {
    // If the menu is closed, show the icon of the active resolved theme
    if (theme === 'dark') {
      return <Moon className="w-5 h-5 text-brand-emerald" />;
    }
    return <Sun className="w-5 h-5 text-brand-emerald" />;
  };

  const options: { mode: ThemeMode; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { mode: 'system', label: 'System', icon: Monitor },
    { mode: 'light', label: 'Light', icon: Sun },
    { mode: 'dark', label: 'Dark', icon: Moon },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed z-50 bottom-[16px] right-[16px] md:bottom-[24px] md:right-[24px] flex flex-col items-end gap-3"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur border border-neutral-200/50 dark:border-neutral-800/50 p-2 rounded-xl shadow-premium dark:shadow-premium-dark flex flex-col gap-1 w-36 text-left origin-bottom-right"
            role="menu"
            aria-label="Theme options"
          >
            {options.map((opt) => {
              const OptIcon = opt.icon;
              const isSelected = themeMode === opt.mode;

              return (
                <button
                  key={opt.mode}
                  type="button"
                  onClick={() => selectMode(opt.mode)}
                  role="menuitem"
                  aria-checked={isSelected}
                  className={cn(
                    'w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-heading font-medium transition-all duration-200 focus:outline-none cursor-pointer',
                    isSelected
                      ? 'bg-brand-emerald/10 text-brand-emerald'
                      : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                  )}
                >
                  <span className="flex items-center gap-2">
                    <OptIcon className="w-3.5 h-3.5" />
                    {opt.label}
                  </span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-brand-emerald" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating circular toggle button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label="Toggle theme controls"
        aria-expanded={isOpen}
        className="w-12 h-12 rounded-full flex items-center justify-center bg-white/80 dark:bg-zinc-900/80 backdrop-blur border border-neutral-200/50 dark:border-neutral-800/50 shadow-premium dark:shadow-premium-dark text-neutral-600 dark:text-neutral-400 hover:text-brand-emerald dark:hover:text-brand-emerald hover:border-brand-emerald/30 dark:hover:border-brand-emerald/30 transition-all duration-200 focus:outline-none cursor-pointer"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {getActiveIcon()}
        </motion.div>
      </button>
    </div>
  );
};
