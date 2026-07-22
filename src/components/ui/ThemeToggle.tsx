import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-zinc-900 text-neutral-500 dark:text-neutral-400 hover:text-brand-emerald dark:hover:text-brand-emerald hover:border-brand-emerald/30 dark:hover:border-brand-emerald/30 transition-all duration-200 focus:outline-none relative overflow-hidden"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'light' ? 0 : 180,
          scale: theme === 'light' ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
        className="w-5 h-5 flex items-center justify-center"
      >
        {theme === 'light' ? (
          <Moon className="w-4 h-4 fill-neutral-500" />
        ) : (
          <Sun className="w-4 h-4 fill-brand-emerald text-brand-emerald" />
        )}
      </motion.div>
    </button>
  );
};
