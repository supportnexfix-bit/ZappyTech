import React from 'react';
import { Logo } from '../components/ui/Logo';
import { Mail, Phone, Clock } from 'lucide-react';

interface FooterProps {
  onNavClick?: (sectionId: string) => void;
  onPageChange?: (page: 'home' | 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick, onPageChange }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (id: string) => {
    if (onNavClick) {
      onNavClick(id);
    } else {
      window.location.hash = `#${id}`;
    }
  };

  return (
    <footer className="bg-neutral-50 dark:bg-[#0A0C0E] border-t border-neutral-200 dark:border-neutral-900 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-left">
        {/* Brand Information */}
        <div className="flex flex-col gap-4">
          <Logo size={28} />
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 font-light leading-relaxed">
            Professional Technology Service & Engineering Experts. Providing diagnostics, repair, installation, and IT maintenance.
          </p>
          <div className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest font-mono mt-2">
            TAGLINE: EVERY DEVICE. EVERY SOLUTION.
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-heading font-bold text-sm text-brand-black dark:text-white uppercase tracking-wider mb-5">
            Quick Navigation
          </h3>
          <ul className="flex flex-col gap-2.5">
            {[
              { id: 'home', label: 'Home' },
              { id: 'devices', label: 'Supported Devices' },
              { id: 'solutions', label: 'Our Solutions' },
              { id: 'process', label: 'Service Process' },
              { id: 'support', label: 'Technical Support' },
              { id: 'contact', label: 'Contact Us' },
            ].map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (onPageChange) onPageChange('home');
                    setTimeout(() => handleNav(link.id), 50);
                  }}
                  className="text-sm text-neutral-500 dark:text-neutral-400 hover:text-brand-emerald dark:hover:text-brand-emerald transition-colors duration-200 font-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services List */}
        <div>
          <h3 className="font-heading font-bold text-sm text-brand-black dark:text-white uppercase tracking-wider mb-5">
            Our Services
          </h3>
          <ul className="flex flex-col gap-2.5">
            {[
              'Desktop Computer Service',
              'Laptop Hardware Repair',
              'Mobile & Tablet Service',
              'Software & OS Installation',
              'Custom PC Assembly',
              'IT Infrastructure & AMC Support',
            ].map((service) => (
              <li key={service} className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info (NO Address/Maps/Socials as requested) */}
        <div>
          <h3 className="font-heading font-bold text-sm text-brand-black dark:text-white uppercase tracking-wider mb-5">
            Technical Operations
          </h3>
          <ul className="flex flex-col gap-4 text-sm text-neutral-500 dark:text-neutral-400">
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-brand-emerald flex-shrink-0" />
              <a href="tel:+919876543210" className="hover:text-brand-emerald font-mono">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-brand-emerald flex-shrink-0" />
              <a href="mailto:support@zappytech.com" className="hover:text-brand-emerald font-mono">
                support@zappytech.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-brand-emerald mt-0.5 flex-shrink-0" />
              <div>
                <span className="block font-medium">Monday - Saturday</span>
                <span className="text-xs text-neutral-400 dark:text-neutral-500">09:00 AM - 07:00 PM</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 pt-8 border-t border-neutral-200 dark:border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-400 dark:text-neutral-500 font-light">
          &copy; {currentYear} ZAPPYTECH. All rights reserved. Professional Technology Service & Engineering.
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#privacy"
            onClick={(e) => {
              e.preventDefault();
              if (onPageChange) onPageChange('privacy');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-brand-emerald transition-colors duration-200 font-light"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            onClick={(e) => {
              e.preventDefault();
              if (onPageChange) onPageChange('terms');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs text-neutral-400 dark:text-neutral-500 hover:text-brand-emerald transition-colors duration-200 font-light"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};
