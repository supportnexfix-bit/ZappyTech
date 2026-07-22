import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Users, Crosshair, HelpCircle, Zap, Shield, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Professional Engineers',
      desc: 'Our staff are certified systems architects, network engineers, and chip-level micro-soldering experts with years of industrial service experience.',
      icon: Users,
      metric: '100% Certified Techs',
    },
    {
      title: 'Accurate Diagnosis',
      desc: 'We use professional digital oscilloscopes, component logic tracers, and BIOS testers to isolate the exact component failure before making repairs.',
      icon: Crosshair,
      metric: '< 1% Mismatch rate',
    },
    {
      title: 'Reliable Support',
      desc: 'Direct channels to engineers. We provide dedicated status reporting, detailed service logs, and explicit clarity on hardware faults.',
      icon: HelpCircle,
      metric: 'Direct Support Desk',
    },
    {
      title: 'Fast Turnaround',
      desc: 'Streamlined logistics and component sourcing. We start visuals checks immediately upon device reception, minimizing down times.',
      icon: Zap,
      metric: 'Average 24h turnaround',
    },
    {
      title: 'Premium Quality Components',
      desc: 'We source OEM-spec ICs, capacitors, screen panels, and accessories, avoiding sub-standard replacement modules at all costs.',
      icon: Shield,
      metric: 'OEM-Grade Parts',
    },
    {
      title: 'Long Term Support',
      desc: 'Every repair is backed by ZAPPYTECH support, featuring standard service warranties and post-repair wellness checks.',
      icon: HeartHandshake,
      metric: 'Warranty Covered',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-neutral-50 dark:bg-[#0A0C0E]/50 relative transition-colors duration-300">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Our Value Proposition"
          title="Why Choose ZAPPYTECH"
          description="Precision. Accuracy. Professional accountability. We align our engineering metrics to deliver long-term device stability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <Card notched={true} className="h-full text-left p-6 flex flex-col justify-between group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 text-brand-emerald clip-notch-sm">
                        <Icon className="w-5 h-5 animate-pulse" />
                      </div>
                      <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 bg-neutral-100 dark:bg-zinc-800 px-2 py-0.5 rounded uppercase tracking-wider">
                        {reason.metric}
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-heading font-extrabold text-brand-black dark:text-white mb-2 group-hover:text-brand-emerald transition-colors duration-200">
                      {reason.title}
                    </h3>

                    <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                  
                  {/* Decorative hardware mock chart or notch outline at the bottom to represent tech layout */}
                  <div className="mt-6 pt-3 border-t border-dashed border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="text-[9px] font-mono text-neutral-400">UNIT.STATUS // OK</span>
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-brand-emerald rounded-full" />
                      <span className="w-1.5 h-1.5 bg-brand-emerald/40 rounded-full" />
                      <span className="w-1.5 h-1.5 bg-brand-emerald/10 rounded-full" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
