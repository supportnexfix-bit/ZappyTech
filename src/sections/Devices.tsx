import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Cpu, Laptop, Smartphone, Tablet, Printer, Network, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export const Devices: React.FC = () => {
  const devices = [
    {
      title: 'Desktop Computers',
      icon: Cpu,
      desc: 'Workstations, custom gaming rigs, server towers, and institutional lab desktops.',
      highlights: ['Custom water-loop maintenance', 'BGA component soldering', 'BIOS/UEFI flashing & recovery', 'Power supply diagnostics'],
    },
    {
      title: 'Laptops & Notebooks',
      icon: Laptop,
      desc: 'Ultrabooks, business notebooks, and mobile workstations across all major brands.',
      highlights: ['Display panel replacement', 'Keyboard & trackpad repair', 'Hinge & chassis structural repair', 'Battery calibration & swap'],
    },
    {
      title: 'Mobile Devices',
      icon: Smartphone,
      desc: 'Premium smartphones and rugged handhelds requiring micro-repair solutions.',
      highlights: ['IC/logic board trace repair', 'OLED screen refurbishment', 'Charging port replacement', 'Water damage remediation'],
    },
    {
      title: 'Tablets & iPads',
      icon: Tablet,
      desc: 'Media consumption tablets, graphic design slates, and POS payment displays.',
      highlights: ['Digitizer glass replacement', 'Logic board logic diagnostic', 'Charging IC replacement', 'Storage chip upgrades'],
    },
    {
      title: 'Printers & Plotters',
      icon: Printer,
      desc: 'Enterprise laser printers, office copiers, and wide-format blueprint plotters.',
      highlights: ['Fuser unit refurbishment', 'Toner/Ink feed calibration', 'Interface board debugging', 'Roller assembly cleaning'],
    },
    {
      title: 'Networking Hardware',
      icon: Network,
      desc: 'Office IT routers, switches, access points, and rackmount infrastructure.',
      histor: 'true',
      highlights: ['Firmware patching & config', 'Port diagnostics & repair', 'UTP/Fiber interface test', 'Access point mounting repair'],
    },
    {
      title: 'Electronic Systems',
      icon: Wrench,
      desc: 'Custom control boards, automation PCBs, monitors, and precision systems.',
      highlights: ['Component level troubleshooting', 'Capacitor bank replacement', 'Trace jumpering & rewiring', 'Oscilloscope logic testing'],
    },
  ];

  return (
    <section id="devices" className="py-24 bg-neutral-50 dark:bg-[#0A0C0E]/50 relative transition-colors duration-300">
      <div className="absolute inset-0 dot-matrix opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Service Portfolio"
          title="Hardware Classes We Engineer"
          description="We do not just replace parts; we diagnose failures down to the component level, restoring complex tech architectures to peak performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {devices.map((device, index) => {
            const Icon = device.icon;
            return (
              <motion.div
                key={device.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={index === devices.length - 1 && devices.length % 4 !== 0 ? 'md:col-span-2 lg:col-span-1 xl:col-span-2' : ''}
              >
                <Card notched={true} className="h-full flex flex-col justify-between text-left p-6 group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-brand-black dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 text-brand-emerald clip-notch-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                        Class 0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-heading font-extrabold text-brand-black dark:text-white mb-2 group-hover:text-brand-emerald transition-colors duration-200">
                      {device.title}
                    </h3>
                    
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-6">
                      {device.desc}
                    </p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="border-t border-neutral-100 dark:border-neutral-800/80 pt-4 mt-auto">
                    <span className="text-[10px] font-heading font-bold text-brand-black dark:text-neutral-300 uppercase tracking-wider block mb-2">
                      Key Services:
                    </span>
                    <ul className="flex flex-col gap-1.5">
                      {device.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                          <span className="w-1 h-1 bg-brand-emerald rounded-full" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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
