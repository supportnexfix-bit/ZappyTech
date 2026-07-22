import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import { Hero } from './sections/Hero';
import { Devices } from './sections/Devices';
import { Expertise } from './sections/Expertise';
import { Process } from './sections/Process';
import { Industries } from './sections/Industries';
import { WhyChooseUs } from './sections/WhyChooseUs';
import { Testimonials } from './sections/Testimonials';
import { FAQSection } from './sections/FAQSection';
import { SupportForm } from './sections/SupportForm';
import { Contact } from './sections/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsConditions } from './pages/TermsConditions';

type Page = 'home' | 'privacy' | 'terms';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle nav clicks (scrolls to element if home, otherwise switches page)
  const handleNavClick = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Delay scroll to allow DOM mounting
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePageChange = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll spy to highlight active nav link
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = ['home', 'devices', 'solutions', 'process', 'support', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar onNavClick={handleNavClick} activeSection={activeSection} />

      {/* Main Pages Content */}
      <div className="flex-grow">
        {currentPage === 'home' && (
          <div id="main-content">
            <Hero onRequestSupport={() => handleNavClick('support')} />
            <Devices />
            <Expertise />
            <Process />
            <Industries />
            <WhyChooseUs />
            <Testimonials />
            <FAQSection />
            <SupportForm />
            <Contact />
          </div>
        )}

        {currentPage === 'privacy' && (
          <PrivacyPolicy onBackToHome={() => handlePageChange('home')} />
        )}

        {currentPage === 'terms' && (
          <TermsConditions onBackToHome={() => handlePageChange('home')} />
        )}
      </div>

      {/* Layout Footer */}
      <Footer onNavClick={handleNavClick} onPageChange={handlePageChange} />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
