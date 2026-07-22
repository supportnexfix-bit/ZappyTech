import React, { useState } from 'react';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Card } from '../components/ui/Card';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Ramesh Kumar',
      role: 'Head of ECE Department',
      organization: 'RV College of Engineering',
      content: 'ZAPPYTECH successfully diagnosed and repaired 45 logic boards in our micro-controller laboratory. Their chip-level soldering and system configurations were performed with absolute precision. Truly professional engineers.',
      rating: 5,
      date: 'June 2026',
    },
    {
      name: 'Nisha Hegde',
      role: 'IT Operations Manager',
      organization: 'TechnoGrid Solutions',
      content: 'We set up an Annual Maintenance Contract (AMC) with ZAPPYTECH for our corporate office. Their preventive hardware cleanups, networking audits, and quick repair turnarounds have kept our employee down times to zero.',
      rating: 5,
      date: 'May 2026',
    },
    {
      name: 'Anish Shenoy',
      role: 'Home User / Gamer',
      organization: 'Custom Rig Client',
      content: 'I commissioned ZAPPYTECH to assemble a custom liquid-cooled desktop workstation for video rendering and gaming. The cable management, thermal profiling, and BIOS tuning were pristine. The system runs cool and stable.',
      rating: 5,
      date: 'July 2026',
    },
    {
      name: 'Sister Mary D\'Souza',
      role: 'Principal',
      organization: 'St. Jude School Lab',
      content: 'ZAPPYTECH restructured our school’s computer lab, installing stable Windows profiles and restoring several older systems. Their pricing was transparent, and their educational support program is excellent.',
      rating: 5,
      date: 'April 2026',
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-white dark:bg-brand-bgDark relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 dot-matrix opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Client Endorsements"
          title="What Our Clients Say"
          description="Read reviews from home users, educational institutions, and businesses who rely on our technology services."
        />

        {/* Desktop Carousel / Slider Layout (extremely premium) */}
        <div className="relative max-w-4xl mx-auto mt-6">
          <div className="absolute top-0 left-0 text-brand-emerald opacity-10 dark:opacity-5 pointer-events-none transform -translate-x-12 -translate-y-8">
            <Quote className="w-32 h-32" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card notched={true} className="p-8 md:p-12 text-left relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-dashed border-neutral-100 dark:border-neutral-800 pb-6">
                  <div>
                    <h3 className="text-lg md:text-xl font-heading font-extrabold text-brand-black dark:text-white">
                      {testimonials[activeIndex].name}
                    </h3>
                    <span className="text-xs md:text-sm text-neutral-400 dark:text-neutral-500 font-light block">
                      {testimonials[activeIndex].role} &bull; <span className="font-medium text-brand-emerald">{testimonials[activeIndex].organization}</span>
                    </span>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 text-brand-emerald">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-sm md:text-base text-neutral-600 dark:text-neutral-300 font-light leading-relaxed italic mb-6">
                  "{testimonials[activeIndex].content}"
                </p>

                <div className="flex justify-between items-center text-xs font-mono text-neutral-400">
                  <span>VERIFIED CLIENT // {testimonials[activeIndex].date}</span>
                  <span>ID: ZP-2026-T{activeIndex + 1}</span>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Slider controls */}
          <div className="flex justify-center md:justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={handlePrev}
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-brand-emerald/30 text-neutral-500 dark:text-neutral-400 hover:text-brand-emerald dark:hover:text-brand-emerald transition-all duration-200 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:border-brand-emerald/30 text-neutral-500 dark:text-neutral-400 hover:text-brand-emerald dark:hover:text-brand-emerald transition-all duration-200 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
