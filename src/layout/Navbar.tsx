import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { Logo } from '../components/ui/Logo';
import { Button } from '../components/ui/Button';
import { cn } from '../utils/cn';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavClick, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'devices', label: 'Devices' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'process', label: 'Process' },
    { id: 'support', label: 'Support' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <>
      {/* Skip to content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-emerald text-brand-black px-4 py-2 font-semibold z-[100] clip-notch"
      >
        Skip to Content
      </a>

      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
          scrolled
            ? 'bg-white/80 dark:bg-brand-bgDark/80 backdrop-blur-md py-4 border-neutral-200/50 dark:border-neutral-800/50 shadow-sm'
            : 'bg-transparent py-6 border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="focus:outline-none"
            aria-label="ZAPPYTECH Home"
          >
            <Logo />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Desktop navigation">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={cn(
                      'text-sm font-heading font-medium tracking-wide transition-colors duration-200 relative py-1.5 px-0.5 outline-none',
                      activeSection === link.id
                        ? 'text-brand-emerald'
                        : 'text-neutral-600 dark:text-neutral-400 hover:text-brand-emerald dark:hover:text-brand-emerald'
                    )}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-emerald clip-notch-sm" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919344106263" className="flex items-center gap-2 text-sm font-mono text-neutral-600 dark:text-neutral-400 hover:text-brand-emerald transition-colors duration-200">
              <PhoneCall className="w-4 h-4 text-brand-emerald" />
              <span>+91 93441 06263</span>
            </a>
            <Button
              variant="accent"
              size="sm"
              onClick={() => handleLinkClick('support')}
              className="text-xs uppercase tracking-wider"
            >
              Get Support
            </Button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-neutral-600 dark:text-neutral-400 focus:outline-none focus:ring-1 focus:ring-brand-emerald rounded"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={cn(
            'lg:hidden fixed inset-x-0 top-[73px] bg-white dark:bg-brand-bgDark border-b border-neutral-200 dark:border-neutral-800 py-6 px-6 transition-all duration-300 ease-in-out origin-top shadow-lg overflow-y-auto max-h-[calc(100vh-73px)]',
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          )}
        >
          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.id);
                    }}
                    className={cn(
                      'block py-2 text-base font-heading font-medium transition-colors duration-200 border-l-2 pl-3',
                      activeSection === link.id
                        ? 'border-brand-emerald text-brand-emerald bg-brand-emerald/5'
                        : 'border-transparent text-neutral-600 dark:text-neutral-400'
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex flex-col gap-4">
                <a
                  href="tel:+919344106263"
                  className="flex items-center gap-2 text-sm font-mono text-neutral-600 dark:text-neutral-400 py-2"
                >
                  <PhoneCall className="w-4 h-4 text-brand-emerald" />
                  <span>+91 93441 06263</span>
                </a>
                <Button
                  variant="accent"
                  size="md"
                  onClick={() => handleLinkClick('support')}
                  className="w-full uppercase tracking-wider text-xs"
                >
                  Request Technical Support
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
