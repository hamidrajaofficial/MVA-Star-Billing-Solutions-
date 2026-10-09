import React from 'react';
import { motion } from 'motion/react';
import { 
  Laptop, 
  RotateCcw, 
  FileCheck2, 
  Receipt,
  ThumbsUp, 
  Heart, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';
import billingSpecialistImg from '../../assets/images/billing_specialist_hero_1791479968609.jpg';

interface DedicatedRCMSupportSectionProps {
  id?: string;
  bgColor?: string;
  eyebrow?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  imageSrc?: string;
}

export default function DedicatedRCMSupportSection({
  id = "rcm-support",
  bgColor = "bg-white",
  eyebrow = "Dedicated RCM Support",
  title = "Get a Dedicated Billing Coordinator",
  titleHighlight = "For Your Practice",
  description = "Take the friction out of revenue cycle operations. Our pre-vetted, HIPAA-trained billing coordinators seamlessly embed into your existing EHR workflows to handle clinical documentation, scrubbing, submissions, and aggressive denial recovery.",
  ctaText = "Get a Dedicated Specialist",
  ctaLink = "/contact",
  imageSrc = billingSpecialistImg
}: DedicatedRCMSupportSectionProps) {

  // 4 Pill elements with light green icon and dark navy uppercase text
  const featurePills = [
    {
      icon: Laptop,
      label: "DATA ENTRY"
    },
    {
      icon: FileCheck2,
      label: "CLAIM SUBMISSION"
    },
    {
      icon: Receipt,
      label: "PAYMENT POSTING"
    },
    {
      icon: RotateCcw,
      label: "FOLLOW-UPS"
    }
  ];

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Heading, Underline, Description, 4 Pills, CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Eyebrow Badge with green outline shield / handshake icon & accent details */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300/80 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2.2]" />
              <span>{eyebrow}</span>
            </div>

            {/* Main Heading with dark slate/navy text */}
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#1B2A4A] tracking-tight leading-[1.18] mb-3">
                {title} <span className="text-[#00A3E0]">{titleHighlight}</span>
              </h2>
              {/* Short green underline accent matching screenshot */}
              <div className="w-16 h-1.5 bg-emerald-500 rounded-full" />
            </div>

            {/* Description text */}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
              {description}
            </p>

            {/* Four "Pill" elements: light green icon + dark navy text in uppercase (flex items-center gap-4 single row) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {featurePills.map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                    className="bg-white rounded-full px-5 py-3 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex items-center gap-4 group"
                  >
                    {/* Light green icon box */}
                    <div className="w-9 h-9 rounded-full bg-emerald-100/90 text-emerald-600 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4 stroke-[2.3]" />
                    </div>
                    {/* Dark navy uppercase heading */}
                    <h4 className="text-xs sm:text-sm font-extrabold text-[#1B2A4A] tracking-wider uppercase m-0 leading-none">
                      {pill.label}
                    </h4>
                  </motion.div>
                );
              })}
            </div>

            {/* Primary Action Button & Trust Point */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to={ctaLink}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#00A3E0] hover:bg-[#0090C7] text-white text-sm sm:text-base font-bold rounded-full shadow-lg shadow-[#00A3E0]/25 transition-all group cursor-pointer"
              >
                <span>{ctaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>HIPAA-Certified • Ready in 48 Hours</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image Card with Floating Badges & Bright Lime Banner */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 relative flex justify-center pb-6 sm:pb-8"
          >
            {/* Main Image Container Card */}
            <div className="relative w-full max-w-md lg:max-w-none bg-white rounded-[32px] p-3 sm:p-4 shadow-xl border border-slate-100 overflow-visible">
              
              {/* Central Billing Specialist Image */}
              <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] sm:aspect-[5/4] bg-slate-100 shadow-inner">
                <img 
                  src={imageSrc} 
                  alt="Dedicated Healthcare Medical Billing Specialist"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Subtle dark gradient overlay at top/bottom for card depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-slate-900/10 pointer-events-none" />
              </div>

              {/* Floating Green Circle Badge 1: Thumbs Up */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.25 }}
                className="absolute -top-4 -left-3 sm:-top-5 sm:-left-4 w-13 h-13 sm:w-15 sm:h-15 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/35 border-4 border-white z-20 hover:scale-110 transition-transform"
                title="Top Quality Verified"
              >
                <ThumbsUp className="w-6 h-6 stroke-[2.2] fill-white" />
              </motion.div>

              {/* Floating Green Circle Badge 2: Heart */}
              <motion.div
                initial={{ scale: 0, rotate: 20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.35 }}
                className="absolute top-1/3 -right-3 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/35 border-4 border-white z-20 hover:scale-110 transition-transform"
                title="Client Recommended"
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2] fill-white" />
              </motion.div>

              {/* Bright Lime-Green Banner at the bottom of the image card matching screenshot */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute -bottom-4 sm:-bottom-5 left-4 right-4 sm:left-6 sm:right-6 z-20"
              >
                <div className="bg-emerald-500 text-white rounded-full py-3 px-5 sm:px-6 shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-3 border-2 border-white text-center">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <Handshake className="w-3.5 h-3.5 text-white" />
                  </div>
                  <p className="text-xs sm:text-sm font-extrabold tracking-wide uppercase truncate">
                    Dedicated RCM Specialist • Seamless 48-Hour Start
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

