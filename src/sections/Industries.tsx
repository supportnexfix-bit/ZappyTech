import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Home, BookOpen, GraduationCap, Building2, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export const Industries: React.FC = () => {
  const industries = [
    {
      title: 'Home Users & Individuals',
      subtitle: 'Personal Tech Security & Repair',
      icon: Home,
      sla: '24-Hour Diagnosis Turnaround',
      desc: 'Expert support for personal desktops, laptops, tablets, and mobile devices. Software installation, home networking, custom gaming PC assembly, and data recovery.',
      devices: 'Single / Multi-Device support',
    },
    {
      title: 'Schools & K-12 Institutions',
      subtitle: 'Computer Lab Setup & Auditing',
      icon: BookOpen,
      sla: 'Same-Day Urgent SLA',
      desc: 'Deploying and maintaining school computer labs, system auditing, parental filtering software configurations, and printing networks management.',
      devices: '10 to 50+ Connected Workstations',
    },
    {
      title: 'Colleges & Universities',
      subtitle: 'High-Performance Lab Infrastructure',
      icon: GraduationCap,
      sla: 'Dedicated On-Call Support',
      desc: 'Diagnostics and hardware repair for research workstations, engineering CAD labs, campus server nodes, and institutional network terminals.',
      devices: '50 to 500+ High-Performance Systems',
    },
    {
      title: 'Businesses & Corporate Offices',
      subtitle: 'AMC Support & Security Hardening',
      icon: Building2,
      sla: '4-Hour Emergency Response',
      desc: 'Annual Maintenance Contracts (AMC), active directory setups, backup systems, VPN networks, corporate laptop fleets repair, and security auditing.',
      devices: '20 to 200+ Employee Assets',
    },
    {
      title: 'Small Industries & Production Units',
      subtitle: 'Legacy Control Systems & Automation Support',
      icon: Factory,
      sla: 'Customized Operations Contract',
      desc: 'Troubleshooting PLC nodes, automation interface screens, diagnostic control monitors, and legacy operating system configurations for machinery.',
      devices: 'Custom PLC / Legacy Terminal systems',
    },
  ];

  return (
    <section id="industries" className="py-24 bg-white dark:bg-brand-bgDark relative transition-colors duration-300">
      <div className="absolute inset-0 dot-matrix opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Sectors We Service"
          title="Industries We Support"
          description="Tailored technology support architectures. We scale our diagnostic response and support frameworks to match the demands of each sector."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main callout block on left (1/3 width) */}
          <div className="lg:col-span-4 text-left flex flex-col justify-between bg-neutral-900 text-white dark:bg-neutral-950 p-8 rounded-lg clip-notch relative overflow-hidden shadow-lg border border-neutral-800">
            <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
            
            <div className="relative z-10">
              <span className="text-[10px] font-mono tracking-widest text-brand-emerald uppercase font-bold block mb-4">
                Scalable IT SLAs
              </span>
              <h3 className="text-2xl font-heading font-extrabold mb-4 leading-tight">
                Engined for every operational scale.
              </h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6">
                From individual home users seeking precision diagnosis to industrial plants requiring legacy system restoration, ZAPPYTECH structures customized Service Level Agreements (SLAs) for ultimate business continuity.
              </p>
            </div>
            
            <div className="border-t border-neutral-800 pt-6 mt-8 relative z-10">
              <span className="text-xs text-brand-emerald font-mono uppercase block mb-1">
                Standard Support Hours
              </span>
              <span className="text-lg font-heading font-bold">
                09:00 AM - 07:00 PM
              </span>
              <span className="block text-xs text-neutral-500 mt-1">
                Emergency tickets handled 24/7.
              </span>
            </div>
          </div>

          {/* Grid items (2/3 width) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="h-full"
                >
                  <Card notched={true} className="h-full text-left p-6 flex flex-col justify-between group">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 text-brand-emerald clip-notch-sm">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block font-mono">
                            {ind.subtitle}
                          </span>
                          <h4 className="text-base font-heading font-bold text-brand-black dark:text-white group-hover:text-brand-emerald transition-colors duration-200">
                            {ind.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-4">
                        {ind.desc}
                      </p>
                    </div>

                    <div className="border-t border-neutral-100 dark:border-neutral-800/80 pt-3 mt-4 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-neutral-400 dark:text-neutral-500">
                        {ind.devices}
                      </span>
                      <span className="text-brand-emerald font-semibold">
                        {ind.sla}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
