import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Check, ClipboardList } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Zod validation schema
const supportFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^[6-9]\d{9}$/, { message: 'Enter a valid 10-digit Indian phone number.' }),
  email: z.string().email({ message: 'Enter a valid email address.' }),
  deviceType: z.string().min(1, { message: 'Please select a device class.' }),
  brand: z.string().min(1, { message: 'Specify the device brand/model.' }),
  problemDescription: z.string().min(10, { message: 'Provide a brief description of at least 10 characters.' }),
  preferredContactTime: z.string().min(1, { message: 'Please select your preferred contact window.' }),
});

type SupportFormValues = z.infer<typeof supportFormSchema>;

export const SupportForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SupportFormValues>({
    resolver: zodResolver(supportFormSchema),
    mode: 'onChange', // Real-time validation
  });

  const onSubmit = (data: SupportFormValues) => {
    setIsSubmitting(true);
    // Mock API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      console.log('Ticket registered:', data);
    }, 1800);
  };

  const handleCloseSuccess = () => {
    setSubmitSuccess(false);
    reset();
  };

  return (
    <section id="support" className="py-24 bg-white dark:bg-brand-bgDark relative transition-colors duration-300">
      <div className="absolute inset-0 blueprint-grid opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeading
          tag="Engineering Desk"
          title="Request Technical Support"
          description="Register your hardware/software issues. Our engineers will audit your details and contact you within your preferred window."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Left instructions block */}
          <div className="lg:col-span-4 text-left">
            <h3 className="text-xl font-heading font-extrabold text-brand-black dark:text-white mb-4">
              Ticket Submission Instructions
            </h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-6">
              Ensure you provide accurate details. Your phone number will be used to verify the registration. In case of urgent system failures, our support desk will override scheduling settings.
            </p>

            <ul className="flex flex-col gap-4">
              {[
                { title: 'Diagnosis Standard', desc: 'No charges are applied if diagnostic inspection is unsuccessful.' },
                { title: 'Security Assurance', desc: 'All personal drives are handled in ESD-safe clean rooms.' },
                { title: 'Warranty Lock', desc: 'A minimum 90-day hardware repair warranty applies.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-emerald/10 text-brand-emerald flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="block text-xs font-heading font-bold text-brand-black dark:text-white uppercase tracking-wider">
                      {item.title}
                    </span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500">
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right form block */}
          <div className="lg:col-span-8 w-full relative">
            <Card notched={true} className="p-6 md:p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <Input
                    label="Customer Name"
                    placeholder="Enter full name"
                    error={errors.name?.message}
                    {...register('name')}
                  />

                  {/* Phone */}
                  <Input
                    label="Phone Number"
                    placeholder="e.g. 9876543210"
                    type="tel"
                    error={errors.phone?.message}
                    {...register('phone')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Email */}
                  <Input
                    label="Email Address"
                    placeholder="e.g. customer@example.com"
                    type="email"
                    error={errors.email?.message}
                    {...register('email')}
                  />

                  {/* Device Type Select */}
                  <div className="w-full flex flex-col gap-1.5 text-left">
                    <label
                      htmlFor="deviceType"
                      className="font-heading font-medium text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider"
                    >
                      Device Class
                    </label>
                    <select
                      id="deviceType"
                      aria-invalid={errors.deviceType ? 'true' : 'false'}
                      className="w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border text-brand-black dark:text-white transition-all duration-200 outline-none clip-notch-sm rounded-sm border-neutral-200 dark:border-neutral-800 focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
                      {...register('deviceType')}
                    >
                      <option value="">Select device...</option>
                      <option value="desktop">Desktop Computer</option>
                      <option value="laptop">Laptop / Notebook</option>
                      <option value="mobile">Smartphone / Mobile</option>
                      <option value="tablet">iPad / Tablet</option>
                      <option value="printer">Laser Printer / Plotter</option>
                      <option value="networking">Networking Infrastructure</option>
                      <option value="electronics">Custom Electronic Board</option>
                    </select>
                    {errors.deviceType && (
                      <span className="text-xs text-red-500 font-medium" role="alert">
                        {errors.deviceType.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Brand */}
                  <Input
                    label="Device Brand & Model"
                    placeholder="e.g. Dell Latitude 7420 / Custom Build"
                    error={errors.brand?.message}
                    {...register('brand')}
                  />

                  {/* Preferred Contact Time Select */}
                  <div className="w-full flex flex-col gap-1.5 text-left">
                    <label
                      htmlFor="preferredContactTime"
                      className="font-heading font-medium text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-wider"
                    >
                      Preferred Contact Time
                    </label>
                    <select
                      id="preferredContactTime"
                      aria-invalid={errors.preferredContactTime ? 'true' : 'false'}
                      className="w-full px-4 py-3 bg-neutral-50 dark:bg-zinc-900 border text-brand-black dark:text-white transition-all duration-200 outline-none clip-notch-sm rounded-sm border-neutral-200 dark:border-neutral-800 focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald"
                      {...register('preferredContactTime')}
                    >
                      <option value="">Select time slot...</option>
                      <option value="morning">Morning (09:00 AM - 12:00 PM)</option>
                      <option value="afternoon">Afternoon (12:00 PM - 04:00 PM)</option>
                      <option value="evening">Evening (04:00 PM - 07:00 PM)</option>
                    </select>
                    {errors.preferredContactTime && (
                      <span className="text-xs text-red-500 font-medium" role="alert">
                        {errors.preferredContactTime.message}
                      </span>
                    )}
                  </div>
                </div>

                {/* Problem Description */}
                <Textarea
                  label="Detailed Fault Description"
                  placeholder="Explain system behavior, hardware errors, liquid exposure, or setup issues..."
                  error={errors.problemDescription?.message}
                  {...register('problemDescription')}
                />

                <Button
                  variant="primary"
                  type="submit"
                  loading={isSubmitting}
                  className="w-full uppercase tracking-widest text-xs py-3.5 mt-2"
                >
                  File Technical Ticket
                </Button>
              </form>
            </Card>

            {/* Success Modal Confirmation Overlay */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 dark:bg-[#0E1012]/95 backdrop-blur-sm z-50 flex items-center justify-center p-6 rounded-lg border border-brand-emerald/30"
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ type: 'spring', damping: 20 }}
                    className="max-w-md text-center flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-brand-emerald/10 border border-brand-emerald/40 text-brand-emerald flex items-center justify-center mb-6 shadow-inner">
                      <ClipboardList className="w-8 h-8" />
                    </div>

                    <h3 className="text-2xl font-heading font-extrabold text-brand-black dark:text-white mb-3">
                      Ticket Registered Successfully
                    </h3>
                    
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light leading-relaxed mb-6">
                      System generated ID: <span className="font-mono font-bold text-brand-emerald">ZT-{Math.floor(100000 + Math.random() * 900000)}</span>. Our engineers are reviewing your diagnostics report. We will contact you shortly.
                    </p>

                    <Button variant="accent" size="md" onClick={handleCloseSuccess}>
                      Acknowledge & Close
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
