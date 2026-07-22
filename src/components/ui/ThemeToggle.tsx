import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { themeMode, setThemeMode } = useTheme();

  const cycleTheme = () => {
    if (themeMode === 'system') {
      setThemeMode('light');
    } else if (themeMode === 'light') {
      setThemeMode('dark');
    } else {
      setThemeMode('system');
    }
  };

  const getIcon = () => {
    switch (themeMode) {
      case 'light':
        return <Sun className="w-4 h-4 text-brand-emerald fill-brand-emerald/10" />;
      case 'dark':
        return <Moon className="w-4 h-4 text-brand-emerald fill-brand-emerald/10" />;
      case 'system':
      default:
        return <Monitor className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />;
    }
  };

  const getLabel = () => {
    switch (themeMode) {
      case 'light':
        return 'LIGHT';
      case 'dark':
        return 'DARK';
      case 'system':
      default:
        return 'AUTO';
    }
  };

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-zinc-900 text-neutral-500 dark:text-neutral-400 hover:text-brand-emerald dark:hover:text-brand-emerald hover:border-brand-emerald/30 dark:hover:border-brand-emerald/30 transition-all duration-200 focus:outline-none relative overflow-hidden group select-none cursor-pointer"
      aria-label={`Current theme mode: ${themeMode}. Click to cycle: Auto, Light, Dark.`}
    >
      <motion.div
        key={themeMode}
        initial={{ rotate: -30, scale: 0.85, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="w-4 h-4 flex items-center justify-center"
      >
        {getIcon()}
      </motion.div>
      <span className="text-[9px] font-mono font-bold tracking-wider text-neutral-400 dark:text-neutral-500 group-hover:text-brand-emerald transition-colors duration-200">
        {getLabel()}
      </span>
    </button>
  );
};
