import React from 'react';
import { Button } from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome }) => {
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
            Legal Document
          </span>
          <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-brand-black dark:text-white">
            Privacy Policy
          </h1>
          <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono block mt-2">
            Last Updated: July 22, 2026 // SYSTEM.REF: ZP-POL-042
          </span>
        </header>

        {/* Content */}
        <article className="prose prose-neutral dark:prose-invert max-w-none text-neutral-500 dark:text-neutral-400 text-sm md:text-base leading-relaxed flex flex-col gap-6 font-light">
          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              1. Information We Collect
            </h2>
            <p>
              ZAPPYTECH collects technical registration details when you submit a support ticket. This includes your name, telephone number, email address, device hardware class, brand/model, and detailed fault symptoms. We do not scrape, harvest, or index cookies or browser trackers.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              2. Data Protection & Drive Security
            </h2>
            <p>
              All hardware repairs, micro-soldering, and diagnostics are performed in ESD-safe environments. If diagnostics require logical testing of storage drives, our engineers work on clone partitions to protect the integrity of your primary data. Your personal files are never accessed, copied, or shared.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              3. Retention Policy
            </h2>
            <p>
              Support ticket details, diagnostic findings, replaced component serial logs, and invoicing sheets are stored for a period of two years to satisfy regulatory tax mandates and validate active hardware warranties. After warranty expiry, data is purged upon request.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              4. Third-Party Disclosures
            </h2>
            <p>
              We do not sell, trade, or distribute your email addresses, phone logs, or identity details to marketing syndicates or analytics firms. We coordinate exclusively with certified parts distribution networks to verify parts compatibility when ordering OEM replacement modules.
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-heading font-bold text-brand-black dark:text-white mb-2 uppercase tracking-wide">
              5. User Rights (WCAG Compliance)
            </h2>
            <p>
              You have the right to request a digital export of your registered service history, update contact details, or request standard data purge actions. Contact our privacy officer at <a href="tel:+919876543210" className="text-brand-emerald hover:underline font-mono">+91 98765 43210</a> for compliance requests.
            </p>
          </section>
        </article>

        {/* Footer actions */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 pt-8 mt-12 flex justify-between items-center text-xs text-neutral-400">
          <span>ZAPPYTECH LEGAL SYSTEM</span>
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
