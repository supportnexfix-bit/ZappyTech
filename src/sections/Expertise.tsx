import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { ShieldCheck, HardDrive, Cpu, Terminal, Hammer, Globe, Calendar, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

export const Expertise: React.FC = () => {
  const expertiseCategories = [
    {
      category: 'Hardware Engineering & Repair',
      description: 'Component-level troubleshooting and repair of complex circuitry.',
      items: [
        {
          title: 'Computer & Laptop Repair',
          desc: 'Logic board diagnostics, BGA chip reballing, logic gate tracing, and screen refurbishment.',
          icon: Cpu,
        },
        {
          title: 'Mobile & Tablet Service',
          desc: 'Micro-soldering, charging IC replacement, moisture removal, and screen refits.',
          icon: HardDrive,
        },
        {
          title: 'Electronic System Repair',
          desc: 'Troubleshooting automation control boards, monitoring screens, and power controllers.',
          icon: Settings,
        },
      ],
    },
    {
      category: 'Configuration & Installation',
      description: 'System software setup, validation, optimization, and security audits.',
      items: [
        {
          title: 'Operating System Installation',
          desc: 'Windows, macOS, Linux setup, driver matching, BIOS flashing, and security hardeners.',
          icon: Terminal,
        },
        {
          title: 'Custom PC Assembly',
          desc: 'Hardware matching, workstation building, cooling optimization, and testing.',
          icon: Hammer,
        },
        {
          title: 'Software & Drivers Integration',
          desc: 'Installing corporate software suites, firmware syncing, and clean system optimization.',
          icon: ShieldCheck,
        },
      ],
    },
    {
      category: 'Infrastructure & Support',
      description: 'Networking maintenance and structural support systems.',
      items: [
        {
          title: 'Networking & IT Security',
          desc: 'Configuring routers, switches, firewalls, and setting up secure wired/wireless grids.',
          icon: Globe,
        },
        {
          title: 'Annual Maintenance Support (AMC)',
          desc: 'Periodic computer audits, preventive dust cleaning, and priority ticketing for enterprises.',
          icon: Calendar,
        },
      ],
    },
  ];

  return (
    <section id="solutions" className="py-24 bg-white dark:bg-brand-bgDark relative transition-colors duration-300">
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Core Capabilities"
          title="Technical Expertise & Solutions"
          description="Precision engineering services categorized for individuals, educational laboratories, and business infrastructures."
        />

        <div className="flex flex-col gap-16">
          {expertiseCategories.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              {/* Category Header */}
              <div className="text-left border-l-4 border-brand-emerald pl-4">
                <h3 className="text-xl font-heading font-extrabold text-brand-black dark:text-white uppercase tracking-wider">
                  {group.category}
                </h3>
                <p className="text-sm text-neutral-400 dark:text-neutral-500 font-light mt-1">
                  {group.description}
                </p>
              </div>

              {/* Category Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {group.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.4, delay: itemIdx * 0.1 }}
                      className="h-full"
                    >
                      <Card className="h-full border-neutral-100 dark:border-neutral-800 text-left p-6 hover:border-brand-emerald/30 group">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 text-brand-emerald clip-notch-sm mt-1">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-base font-heading font-bold text-brand-black dark:text-white mb-2 group-hover:text-brand-emerald transition-colors duration-200">
                              {item.title}
                            </h4>
                            <p className="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
