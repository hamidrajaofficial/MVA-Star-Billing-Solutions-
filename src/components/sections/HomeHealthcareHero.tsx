import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeHealthcareHeroProps {
  highlightHeading: string;
  mainHeading: string;
  description: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  imageSrc: string;
  imageAlt: string;
  features?: string[];
  flipImage?: boolean;
  transparentImage?: boolean;
}

export default function HomeHealthcareHero({
  highlightHeading,
  mainHeading,
  description,
  primaryBtnText = "Hire This Service",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Explore Solutions",
  secondaryBtnLink = "#solutions",
  imageSrc,
  imageAlt,
  features = ["100% HIPAA Compliant", "Trained in Home Health Workflows", "Dedicated Account Manager"],
  flipImage = false,
  transparentImage = true
}: HomeHealthcareHeroProps) {
  return (
    <section className="relative pt-[110px] lg:pt-[130px] pb-12 lg:pb-16 overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white border-b border-slate-100">
      {/* Subtle clinical background watermark */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none bg-repeat bg-[radial-gradient(#00A3E0_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A3E0]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Title exact to screenshot styling */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight leading-[1.18]">
                <span className="text-[#00A3E0] block font-bold mb-1">
                  {highlightHeading}
                </span>
                <span className="text-[#1B2A4A] block font-extrabold">
                  {mainHeading}
                </span>
              </h1>
            </div>

            {/* Description Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {description}
            </p>

            {/* CTAs matching screenshot buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={primaryBtnLink}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#00A3E0] hover:bg-[#0092ca] text-white font-bold rounded-xl shadow-lg shadow-[#00A3E0]/25 transition-all duration-200 text-sm sm:text-base group"
              >
                <span>{primaryBtnText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={secondaryBtnLink}
                className="inline-flex items-center justify-center px-7 py-3.5 bg-white hover:bg-slate-50 text-[#1B2A4A] font-bold rounded-xl border border-slate-200/90 shadow-sm transition-all duration-200 text-sm sm:text-base hover:border-slate-300"
              >
                {secondaryBtnText}
              </a>
            </div>

            {/* Trust feature points */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 font-medium">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00A3E0]" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Healthcare Specialist Image matching screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-[460px] lg:max-w-none">
              {/* Soft decorative backdrop glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00A3E0]/15 via-blue-100/40 to-transparent rounded-3xl transform -rotate-1 scale-105 filter blur-lg -z-10" />

              {/* Main Photo Card - Transparent Cutout */}
              <div className="relative group">
                <div className="relative w-full flex justify-center items-end overflow-visible">
                  <img 
                    src={imageSrc} 
                    alt={imageAlt}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== 'https://wingassistant.com/wp-content/uploads/2026/09/virtual-assistant-for-healthcare.webp') {
                        target.src = 'https://wingassistant.com/wp-content/uploads/2026/09/virtual-assistant-for-healthcare.webp';
                      }
                    }}
                    className={`w-full max-h-[480px] sm:max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02] ${
                      transparentImage 
                        ? 'drop-shadow-2xl' 
                        : 'rounded-2xl bg-white shadow-xl border border-slate-100 object-cover object-top h-[360px] sm:h-[440px] lg:h-[480px]'
                    } ${
                      flipImage ? '-scale-x-100' : ''
                    }`}
                  />
                </div>

                {/* Floating Micro Badge */}
                <div className="mt-3 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#00A3E0]/10 flex items-center justify-center text-[#00A3E0]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1B2A4A] leading-tight">HIPAA Certified Staff</p>
                      <p className="text-[11px] text-slate-500">Dedicated Home Health Support</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full text-[11px] font-semibold border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available Now
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
