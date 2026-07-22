import React from 'react';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

interface TermsConditionsProps {
  onBackToHome: () => void;
}

export const TermsConditions: React.FC<TermsConditionsProps> = ({ onBackToHome }) => {
  return (
    <main id="main-content" className="py-28 bg-white dark:bg-brand-bgDark min-h-screen text-left transition-colors duration-300">
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none" />
      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="outline"
            size="sm"
            onClick={onBackToHome}
            icon={<ArrowLeft className="w-4 h-4 text-brand-emerald" />}
          >
            Back to Home
          </Button>
        </div>

        {/* Header */}
        <header className="border-b border-neutral-200 dark:border-neutral-800 pb-6 mb-8">
          <span className="text-xs font-mono text-brand-emerald uppercase tracking-widest block mb-2">
            Legal Agreement
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-black dark:text-white">
            Terms & Conditions
          </h1>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono block mt-2">
            Last Updated: July 22, 2026 // SYSTEM.REF: ZP-TRM-098
          </span>
        </header>

        {/* Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed flex flex-col gap-6 font-light">
          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              1. Scope of Service
            </h2>
            <p>
              ZAPPYTECH provides technical diagnostics, component repairs, OS installations, custom workstation assembly, and IT network maintenance. We operate as professional engineers and service consultants. Registration of a ticket initiates a visual audit process.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              2. Diagnostics and No-Fix Policy
            </h2>
            <p>
              We inspect devices for hardware and software defects. If our engineers conclude that a system is un-repairable due to severe component degradation or structural motherboard failure, we apply a strict "No Fix, No Fee" policy. The client pays nothing for diagnostic inspections in such cases.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              3. Client Backup Responsibility
            </h2>
            <p>
              While ZAPPYTECH technicians apply strict safety measures in chip-level debugging, the customer acknowledges that complex hardware testing carries minor risk. The customer is responsible for maintaining external backups of critical data before submitting devices. ZAPPYTECH is not liable for data loss on un-backed storage drives.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              4. Standard Repair Warranty
            </h2>
            <p>
              All hardware replacement modules and chip-level micro-soldering solutions carried out by ZAPPYTECH are covered by a 90-day warranty, starting from the delivery date. The warranty is invalidated by visual evidence of subsequent physical damage, water entry, or third-party disassembly.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              5. Abandoned Hardware
            </h2>
            <p>
              Devices repaired and left un-collected for more than 90 days after delivery notifications are subject to storage charges. If a device remains un-claimed for 180 days, ZAPPYTECH reserves the right to recycle the hardware to recoup component costs.
            </p>
          </section>
        </article>

        {/* Footer actions */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 mt-12 flex justify-between items-center text-xs text-neutral-400">
          <span>ZAPPYTECH COMPLIANCE DESK</span>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onBackToHome();
            }}
            className="hover:text-brand-emerald transition-colors"
          >
            Return to Dashboard
          </a>
        </div>
      </div>
    </main>
  );
};
