import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Phone, Mail, Clock, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  const contactDetails = [
    {
      title: 'Telephone Hotline',
      value: '+91 98765 43210',
      actionLabel: 'Call Engineer',
      href: 'tel:+919876543210',
      status: 'Direct line to lab',
      icon: Phone,
    },
    {
      title: 'Email Communications',
      value: 'support@zappytech.com',
      actionLabel: 'Send Inquiry',
      href: 'mailto:support@zappytech.com',
      status: 'Response under 2 hours',
      icon: Mail,
    },
    {
      title: 'Operational Availability',
      value: 'Monday - Saturday',
      actionLabel: '09:00 AM - 07:00 PM',
      href: '#',
      status: 'Standard Lab Workdays',
      icon: Clock,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-neutral-50 dark:bg-[#0A0C0E]/50 relative transition-colors duration-300">
      <div className="absolute inset-0 dot-matrix opacity-20 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Service Desk"
          title="Direct Channels of Contact"
          description="Have questions or require immediate support? Reach out to ZAPPYTECH engineering using our verified communication channels."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactDetails.map((detail, idx) => {
            const Icon = detail.icon;
            return (
              <motion.div
                key={detail.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card notched={true} className="h-full text-left p-6 flex flex-col justify-between group">
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 bg-neutral-50 dark:bg-zinc-900 border border-neutral-200 dark:border-neutral-800 text-brand-emerald clip-notch-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
                        Channel 0{idx + 1}
                      </span>
                    </div>

                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block font-mono">
                      {detail.status}
                    </span>
                    <h3 className="text-lg font-heading font-extrabold text-brand-black dark:text-white mt-1 mb-4">
                      {detail.title}
                    </h3>
                  </div>

                  <div className="border-t border-neutral-100 dark:border-neutral-800/80 pt-4 mt-4 text-left">
                    <a
                      href={detail.href}
                      className="block text-base font-heading font-extrabold text-brand-black dark:text-white hover:text-brand-emerald transition-colors duration-200 font-mono tracking-tight"
                    >
                      {detail.value}
                    </a>
                    
                    <span className="block text-xs text-neutral-400 dark:text-neutral-500 mt-1 uppercase font-semibold">
                      {detail.actionLabel}
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Support Alert banner at bottom */}
        <div className="max-w-5xl mx-auto mt-12 bg-neutral-100 dark:bg-[#121417] border border-neutral-200 dark:border-neutral-800 p-5 rounded-md text-left flex flex-col sm:flex-row items-start sm:items-center gap-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-3 h-full bg-brand-emerald pointer-events-none" />
          <div className="p-2 bg-brand-emerald/10 text-brand-emerald rounded flex-shrink-0">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-sm font-heading font-bold text-brand-black dark:text-white uppercase tracking-wider">
              Emergency Escalation Notice
            </span>
            <span className="text-xs text-neutral-500 dark:text-neutral-400 font-light block mt-0.5">
              If your corporate network or educational database suffers a complete outage outside of business hours, call our hotline with your client ID. Emergency response overrides standard scheduling parameters.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
