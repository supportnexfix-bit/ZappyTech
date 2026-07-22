import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Timeline } from '../components/ui/Timeline';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-neutral-50 dark:bg-[#0A0C0E]/50 relative transition-colors duration-300">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Engineering Standard"
          title="Methodical Service Process"
          description="How ZAPPYTECH operates. Our standardized five-stage methodology ensures diagnostic precision, high-quality repair execution, and validated stability."
        />

        <Timeline />
      </div>
    </section>
  );
};
