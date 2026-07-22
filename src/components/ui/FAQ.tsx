import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export const FAQ: React.FC<FAQProps> = ({ items, className }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className={cn('w-full max-w-3xl mx-auto flex flex-col gap-4', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'border transition-all duration-300 relative',
              // Notch card style border
              'clip-notch border-neutral-200 dark:border-neutral-800 bg-white dark:bg-brand-cardDark'
            )}
          >
            {/* Design notch highlights on open */}
            {isOpen && (
              <div className="absolute top-0 left-0 w-full h-[3px] bg-brand-emerald" />
            )}

            <button
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={`faq-content-${item.id}`}
              id={`faq-button-${item.id}`}
              className="w-full flex items-center justify-between p-5 md:p-6 text-left font-heading font-semibold text-brand-black dark:text-white group focus-visible:ring-1 focus-visible:ring-brand-emerald outline-none"
            >
              <span className="pr-4 text-base md:text-lg group-hover:text-brand-emerald transition-colors duration-200">
                {item.question}
              </span>
              <span className="flex-shrink-0 p-1 rounded-full bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 text-neutral-400 group-hover:text-brand-emerald group-hover:border-brand-emerald/30 transition-all duration-200">
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transform transition-transform duration-300',
                    isOpen && 'rotate-180'
                  )}
                />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-content-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-button-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3, ease: 'easeOut' },
                      opacity: { duration: 0.2, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.25, ease: 'easeIn' },
                      opacity: { duration: 0.15 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-6 md:px-6 md:pb-8 text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed border-t border-dashed border-neutral-100 dark:border-neutral-800/50 pt-4 mt-1">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
