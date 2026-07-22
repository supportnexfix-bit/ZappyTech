import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, PenTool, CheckCircle, Truck, Eye } from 'lucide-react';
import { cn } from '../../utils/cn';

interface TimelineStep {
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  checklist: string[];
}

export const Timeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: TimelineStep[] = [
    {
      title: 'Inspection',
      shortDesc: 'Visual & electrical check',
      longDesc: 'Our engineers conduct an initial multi-point check of power supplies, connectors, port integrity, and physical condition. We document cosmetic and environmental details before testing.',
      icon: Eye,
      checklist: ['Chassis & port visual inspection', 'Voltage & power rail test', 'Thermal imaging check', 'Peripheral connectivity check'],
    },
    {
      title: 'Diagnosis',
      shortDesc: 'Pinpoint precise root cause',
      longDesc: 'Using advanced hardware scopes, diagnostic utilities, and BIOS-level testing, we locate structural failures, bad capacitors, logic board shorts, or corrupted system files.',
      icon: Search,
      checklist: ['Logic board circuit tracing', 'RAM & storage sector scans', 'OS integrity & driver audit', 'Thermal threshold validation'],
    },
    {
      title: 'Repair',
      shortDesc: 'Engineering micro-soldering',
      longDesc: 'Whether it is micro-soldering BGA chips, replacing faulty SSD controllers, conducting screen refurbishments, or clean OS rebuilding, our technicians perform clean repairs.',
      icon: PenTool,
      checklist: ['Clean-room dust removal', 'SMD component replacement', 'Precision thermal paste reapplying', 'Solder joint re-flowing'],
    },
    {
      title: 'Testing',
      shortDesc: 'Rigorous stress validation',
      longDesc: 'We subject the device to continuous heavy workload burn-in tests, benchmark checks, read/write loops, and functional audits to confirm system stability before release.',
      icon: CheckCircle,
      checklist: ['24-hour hardware burn-in test', 'CPU/GPU thermal stress test', 'Memory stability profiling', 'Battery charge-discharge cycle test'],
    },
    {
      title: 'Delivery',
      shortDesc: 'Secure handoff & support',
      longDesc: 'The device is cleaned, polished, packed, and delivered with a comprehensive service report, replacement parts logs, and a standard warranty on the repairs.',
      icon: Truck,
      checklist: ['Detailed service breakdown report', 'Anti-static bag sealing', 'AMC warranty documentation', 'Technical consultation handover'],
    },
  ];

  return (
    <div className="w-full py-6">
      {/* Desktop Horizontal Stepper (hidden on small screens) */}
      <div className="hidden md:flex justify-between items-center relative mb-12 max-w-5xl mx-auto px-4">
        {/* Connection blueprint line */}
        <div className="absolute left-16 right-16 top-1/2 -translate-y-1/2 h-[2px] bg-neutral-200 dark:bg-neutral-800 z-0">
          <motion.div
            className="h-full bg-brand-emerald"
            initial={{ width: '0%' }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />
        </div>

        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = idx === activeStep;
          const isCompleted = idx < activeStep;

          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(idx)}
              aria-label={`View process step ${idx + 1}: ${step.title}`}
              className="z-10 flex flex-col items-center group focus:outline-none"
            >
              <motion.div
                className={cn(
                  'w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300',
                  isActive
                    ? 'bg-brand-emerald border-brand-emerald text-brand-black shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                    : isCompleted
                    ? 'bg-brand-black dark:bg-zinc-900 border-brand-emerald text-brand-emerald'
                    : 'bg-white dark:bg-brand-bgDark border-neutral-300 dark:border-neutral-800 text-neutral-400 group-hover:border-neutral-400 dark:group-hover:border-neutral-600'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <StepIcon className="w-6 h-6" />
              </motion.div>
              <div className="mt-3 text-center">
                <span
                  className={cn(
                    'block text-sm font-heading font-bold uppercase tracking-wider',
                    isActive ? 'text-brand-emerald' : 'text-neutral-500 dark:text-neutral-400'
                  )}
                >
                  {step.title}
                </span>
                <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block max-w-[120px] mx-auto mt-0.5">
                  {step.shortDesc}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Mobile Vertical Stepper (hidden on md+) */}
      <div className="flex md:hidden flex-col gap-6 max-w-md mx-auto mb-8 relative pl-6 border-l border-neutral-200 dark:border-neutral-800">
        {steps.map((step, idx) => {
          const StepIcon = step.icon;
          const isActive = idx === activeStep;

          return (
            <button
              key={step.title}
              type="button"
              onClick={() => setActiveStep(idx)}
              className="text-left w-full relative flex items-start gap-4 group focus:outline-none"
            >
              {/* Dot on line */}
              <div
                className={cn(
                  'absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 transition-all duration-300',
                  isActive
                    ? 'bg-brand-emerald border-brand-emerald'
                    : 'bg-white dark:bg-brand-bgDark border-neutral-300 dark:border-neutral-800'
                )}
              />
              
              <div
                className={cn(
                  'p-2.5 rounded-lg border flex items-center justify-center transition-all duration-300',
                  isActive
                    ? 'bg-brand-emerald/10 border-brand-emerald text-brand-emerald'
                    : 'bg-neutral-50 dark:bg-zinc-950 border-neutral-200 dark:border-neutral-900 text-neutral-400'
                )}
              >
                <StepIcon className="w-5 h-5" />
              </div>
              <div>
                <span
                  className={cn(
                    'block text-sm font-heading font-bold uppercase tracking-wider',
                    isActive ? 'text-brand-emerald' : 'text-neutral-700 dark:text-neutral-300'
                  )}
                >
                  {step.title}
                </span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">
                  {step.shortDesc}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Box (Framer Motion card) */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="p-6 md:p-8 bg-neutral-50 dark:bg-brand-cardDark border border-neutral-200 dark:border-neutral-800 clip-notch relative"
          >
            {/* Tech detail blueprint overlay */}
            <div className="absolute inset-0 dot-matrix pointer-events-none opacity-20" />
            <div className="absolute top-2 right-4 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              Process Module 0{activeStep + 1}
            </div>

            <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start relative z-10">
              <div className="md:col-span-3 text-left">
                <span className="text-[10px] font-heading font-semibold tracking-wider text-brand-emerald uppercase">
                  Stage {activeStep + 1} of 5
                </span>
                <h3 className="text-xl md:text-2xl font-heading font-extrabold text-brand-black dark:text-white mt-1 mb-3">
                  {steps[activeStep].title}
                </h3>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
                  {steps[activeStep].longDesc}
                </p>
              </div>

              <div className="md:col-span-2 text-left bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-5 rounded-md">
                <span className="text-xs font-heading font-bold text-brand-black dark:text-white uppercase tracking-wider block mb-3 border-b border-dashed border-neutral-200 dark:border-neutral-800 pb-2">
                  Engineering Checklist:
                </span>
                <ul className="flex flex-col gap-2">
                  {steps[activeStep].checklist.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                      <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
