import React from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { FAQ } from '../components/ui/FAQ';

export const FAQSection: React.FC = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'What types of diagnostics do your engineers perform?',
      answer: 'Our diagnostics are hardware-level. We trace circuits using digital oscilloscopes and thermal imaging scopes to isolate broken capacitors, blown ICs, or trace fractures. On the software side, we verify operating system logs, memory integrity, and drive read/write thresholds.',
    },
    {
      id: 'faq-2',
      question: 'Do you charge a diagnostic fee if the device is not repairable?',
      answer: 'We maintain a strict "No Fix, No Fee" policy. If our engineers inspect your device and conclude that a component repair is impossible due to extensive structural board damage, we return your device free of any diagnostic charges.',
    },
    {
      id: 'faq-3',
      question: 'What is covered under the Annual Maintenance Contract (AMC)?',
      answer: 'Our corporate and lab AMC support covers bi-monthly hardware cleanups, OS optimization updates, virus audits, router configuration checks, printer fuser tune-ups, and priority response timelines (under 4 hours) for sudden IT breakdowns.',
    },
    {
      id: 'faq-4',
      question: 'Are the replacement parts you use original?',
      answer: 'Yes, we source OEM-grade or high-quality certified replacement parts directly from approved distributors. We back all replaced components (like screen digitizers, charging ICs, SSD controllers, or battery modules) with a standard warranty.',
    },
    {
      id: 'faq-5',
      question: 'How long does a chip-level logic board repair typically take?',
      answer: 'A standard diagnostic and repair cycle takes between 24 to 48 hours. Micro-soldering complex BGA chips or rebuilding severely corroded paths might take longer. We provide live status tracking throughout the process.',
    },
    {
      id: 'faq-6',
      question: 'Do you service older or legacy industrial electronic systems?',
      answer: 'Yes, our team is qualified to troubleshoot legacy hardware, specialized instrumentation interfaces, and older automation PCBs where standard vendor support is no longer available.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-neutral-50 dark:bg-[#0A0C0E]/50 relative transition-colors duration-300">
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Knowledge Base"
          title="Frequently Asked Questions"
          description="Have questions about service warranties, chip-level diagnostics, or AMC coverage? Read our standard procedures."
        />

        <FAQ items={faqItems} />
      </div>
    </section>
  );
};
