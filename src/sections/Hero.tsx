import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { ArrowRight, Phone, Cpu, Laptop, Smartphone, Tablet, Radio } from 'lucide-react';

interface HeroProps {
  onRequestSupport: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestSupport }) => {
  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-16 flex items-center justify-center relative overflow-hidden bg-white dark:bg-brand-bgDark transition-colors duration-300"
    >
      {/* Background blueprint elements */}
      <div className="absolute inset-0 blueprint-grid opacity-100" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-brand-bgDark/50 dark:to-brand-bgDark pointer-events-none" />

      {/* Decorative vertical coordinates bar on the left */}
      <div className="absolute left-6 top-1/3 bottom-1/3 w-[1px] bg-neutral-200 dark:bg-neutral-800 hidden xl:flex flex-col justify-between items-center py-4 text-[9px] font-mono text-neutral-400 select-none">
        <span>LAT 12.9716° N</span>
        <span className="rotate-90 origin-center my-6">SYS.OK</span>
        <span>LON 77.5946° E</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Text Block */}
        <div className="lg:col-span-7 text-left flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald text-xs font-mono uppercase tracking-widest mb-6 clip-notch-sm"
          >
            <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full animate-pulse" />
            Engineering-Grade Diagnostics & Repair
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-brand-black dark:text-white leading-[1.1] mb-6 tracking-tight"
          >
            Every Device.<br />
            <span className="text-brand-emerald relative">
              Every Solution.
              <span className="absolute bottom-1 left-0 w-full h-[4px] bg-brand-emerald/20 -z-10" />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light max-w-2xl leading-relaxed mb-8"
          >
            ZAPPYTECH delivers professional hardware repair, software configuration, operating system installation, custom PC assembly, and enterprise IT maintenance. Built on technical precision and long-term reliability.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              variant="accent"
              size="lg"
              onClick={onRequestSupport}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Request Support
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={<Phone className="w-4 h-4 text-brand-emerald" />}
              onClick={() => { window.location.href = 'tel:+919344106263'; }}
            >
              Call Engineers
            </Button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-3 gap-6 md:gap-10 border-t border-dashed border-neutral-200 dark:border-neutral-800 pt-8 mt-12 w-full max-w-lg"
          >
            {[
              { val: '99.4%', label: 'Accuracy Rate' },
              { val: '15k+', label: 'Devices Serviced' },
              { val: '45+', label: 'Corporate Partners' },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <span className="block text-xl md:text-2xl font-heading font-extrabold text-brand-black dark:text-white">
                  {stat.val}
                </span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider font-light mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Graphic Block */}
        <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-[450px] aspect-square relative"
          >
            {/* Ambient glows behind graphic */}
            <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-brand-emerald/10 dark:bg-brand-emerald/5 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-brand-steel/10 dark:bg-brand-steel/5 blur-[80px] rounded-full pointer-events-none" />

            {/* Custom SVG Blueprint Graphic */}
            <svg
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full text-brand-black dark:text-white"
            >
              {/* Engineering Grid Guide Lines */}
              <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.75" strokeDasharray="5 5" className="opacity-15" />
              <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.75" className="opacity-10" />
              <line x1="200" y1="30" x2="200" y2="370" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-15" />
              <line x1="30" y1="200" x2="370" y2="200" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" className="opacity-15" />
              
              {/* Outer Diagonal Engineering crossbars */}
              <line x1="80" y1="80" x2="320" y2="320" stroke="currentColor" strokeWidth="0.5" className="opacity-10" />
              <line x1="80" y1="320" x2="320" y2="80" stroke="currentColor" strokeWidth="0.5" className="opacity-10" />

              {/* Connecting animated data paths using SVG strokes */}
              <g className="text-brand-emerald">
                {/* Path 1: Center -> Laptop */}
                <path d="M200 200 L200 100" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
                {/* Path 2: Center -> Desktop */}
                <path d="M200 200 L310 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
                {/* Path 3: Center -> Mobile */}
                <path d="M200 200 L280 290" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
                {/* Path 4: Center -> Tablet */}
                <path d="M200 200 L120 290" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
                {/* Path 5: Center -> Electronics */}
                <path d="M200 200 L90 160" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="opacity-60" />
              </g>

              {/* Central Processor Node (ZAPPYTECH CORE) */}
              <g className="cursor-pointer group">
                <circle cx="200" cy="200" r="30" fill="currentColor" className="text-neutral-100 dark:text-zinc-900 shadow-md" />
                <circle cx="200" cy="200" r="30" stroke="currentColor" strokeWidth="2" className="text-brand-emerald" />
                <circle cx="200" cy="200" r="36" stroke="currentColor" strokeWidth="1" strokeDasharray="6 3" className="text-brand-emerald opacity-50 animate-spin" style={{ transformOrigin: '200px 200px', animationDuration: '20s' }} />
                {/* Microchip icon path in the center */}
                <path d="M192 188h16v24h-16z M196 184v4 M204 184v4 M196 212v4 M204 212v4 M188 194h4 M188 206h4 M208 194h4 M208 206h4" stroke="currentColor" strokeWidth="1.5" className="text-brand-emerald" />
              </g>

              {/* Device Node 1: Laptop (Top) */}
              <g className="cursor-pointer group">
                <circle cx="200" cy="100" r="24" fill="currentColor" className="text-neutral-50 dark:text-zinc-900" stroke="currentColor" strokeWidth="1" />
                <circle cx="200" cy="100" r="24" className="stroke-neutral-300 dark:stroke-neutral-800 hover:stroke-brand-emerald transition-all duration-300" strokeWidth="2" />
                <foreignObject x="188" y="88" width="24" height="24">
                  <Laptop className="w-5 h-5 text-brand-emerald m-0.5" />
                </foreignObject>
                <text x="200" y="65" textAnchor="middle" className="text-[10px] font-heading font-bold fill-neutral-500 dark:fill-neutral-400 tracking-wider">LAPTOPS</text>
              </g>

              {/* Device Node 2: Desktop (Right Top) */}
              <g className="cursor-pointer group">
                <circle cx="310" cy="160" r="24" fill="currentColor" className="text-neutral-50 dark:text-zinc-900" stroke="currentColor" strokeWidth="1" />
                <circle cx="310" cy="160" r="24" className="stroke-neutral-300 dark:stroke-neutral-800 hover:stroke-brand-emerald transition-all duration-300" strokeWidth="2" />
                <foreignObject x="298" y="148" width="24" height="24">
                  <Cpu className="w-5 h-5 text-brand-emerald m-0.5" />
                </foreignObject>
                <text x="310" y="125" textAnchor="middle" className="text-[10px] font-heading font-bold fill-neutral-500 dark:fill-neutral-400 tracking-wider">DESKTOPS</text>
              </g>

              {/* Device Node 3: Mobile (Right Bottom) */}
              <g className="cursor-pointer group">
                <circle cx="280" cy="290" r="24" fill="currentColor" className="text-neutral-50 dark:text-zinc-900" stroke="currentColor" strokeWidth="1" />
                <circle cx="280" cy="290" r="24" className="stroke-neutral-300 dark:stroke-neutral-800 hover:stroke-brand-emerald transition-all duration-300" strokeWidth="2" />
                <foreignObject x="268" y="278" width="24" height="24">
                  <Smartphone className="w-5 h-5 text-brand-emerald m-0.5" />
                </foreignObject>
                <text x="280" y="332" textAnchor="middle" className="text-[10px] font-heading font-bold fill-neutral-500 dark:fill-neutral-400 tracking-wider">MOBILE</text>
              </g>

              {/* Device Node 4: Tablet (Left Bottom) */}
              <g className="cursor-pointer group">
                <circle cx="120" cy="290" r="24" fill="currentColor" className="text-neutral-50 dark:text-zinc-900" stroke="currentColor" strokeWidth="1" />
                <circle cx="120" cy="290" r="24" className="stroke-neutral-300 dark:stroke-neutral-800 hover:stroke-brand-emerald transition-all duration-300" strokeWidth="2" />
                <foreignObject x="108" y="278" width="24" height="24">
                  <Tablet className="w-5 h-5 text-brand-emerald m-0.5" />
                </foreignObject>
                <text x="120" y="332" textAnchor="middle" className="text-[10px] font-heading font-bold fill-neutral-500 dark:fill-neutral-400 tracking-wider">TABLETS</text>
              </g>

              {/* Device Node 5: Electronics/Networking (Left Top) */}
              <g className="cursor-pointer group">
                <circle cx="90" cy="160" r="24" fill="currentColor" className="text-neutral-50 dark:text-zinc-900" stroke="currentColor" strokeWidth="1" />
                <circle cx="90" cy="160" r="24" className="stroke-neutral-300 dark:stroke-neutral-800 hover:stroke-brand-emerald transition-all duration-300" strokeWidth="2" />
                <foreignObject x="78" y="148" width="24" height="24">
                  <Radio className="w-5 h-5 text-brand-emerald m-0.5" />
                </foreignObject>
                <text x="90" y="125" textAnchor="middle" className="text-[10px] font-heading font-bold fill-neutral-500 dark:fill-neutral-400 tracking-wider">ELECTRONICS</text>
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
