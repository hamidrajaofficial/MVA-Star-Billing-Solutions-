import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check } from 'lucide-react';

export interface ChallengeItem {
  icon: React.ElementType;
  title: string;
  challengeText: string;
  solutionText: string;
}

interface ChallengesToggleSectionProps {
  eyebrow?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  items: ChallengeItem[];
  ctaText?: string;
  ctaLink?: string;
  bgColor?: string;
}

export default function ChallengesToggleSection({
  eyebrow = "Common Agency Challenges",
  titlePart1 = "Common Challenges: ",
  titleHighlight = "Issues We Cover",
  subtitle = "Delayed intake, missed calls, and scheduling pressures can severely hurt patient care and agency cash flow. Explore how our dedicated team solves these everyday hurdles.",
  items,
  ctaText = "Get a Free Operational Audit",
  ctaLink = "#consultation",
  bgColor = "bg-section-bg"
}: ChallengesToggleSectionProps) {
  const [activeTab, setActiveTab] = useState<'challenge' | 'solution'>('challenge');

  return (
    <section className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-[#00A3E0] font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B2A4A] tracking-tight mb-3">
            {titlePart1}
            <span className="text-[#00A3E0]">{titleHighlight}</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Toggle Pill Buttons matching Screenshot */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center bg-white p-1.5 rounded-full border border-slate-200/90 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab('challenge')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'challenge'
                  ? 'bg-[#B91C1C] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              YOUR CHALLENGE
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('solution')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'solution'
                  ? 'bg-[#00A3E0] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Check className="w-4 h-4" />
              OUR SOLUTION
            </button>
          </div>
        </div>

        {/* 5 Columns with vertical dividers matching Screenshot */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
            {items.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 flex flex-col justify-start hover:bg-slate-50/60 transition-colors"
                >
                  {/* Single row icon and heading following rule */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`p-2 rounded-xl shrink-0 transition-colors ${
                      activeTab === 'challenge' 
                        ? 'bg-rose-50 text-rose-600' 
                        : 'bg-[#00A3E0]/10 text-[#00A3E0]'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-[#1B2A4A] leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="text-xs sm:text-sm text-slate-600 leading-relaxed"
                    >
                      {activeTab === 'challenge' ? (
                        <p className="border-l-2 border-rose-400 pl-2.5 py-0.5 text-slate-700">
                          {item.challengeText}
                        </p>
                      ) : (
                        <p className="border-l-2 border-[#00A3E0] pl-2.5 py-0.5 text-slate-800 font-medium">
                          {item.solutionText}
                        </p>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Button with circular arrow */}
        <div className="text-center">
          <a
            href={ctaLink}
            className="inline-flex items-center gap-3 px-6 py-3 bg-white hover:bg-slate-50 text-[#1B2A4A] font-bold rounded-full border border-slate-200/90 shadow-sm hover:shadow transition-all group text-sm sm:text-base cursor-pointer"
          >
            <span>{ctaText}</span>
            <span className="w-7 h-7 rounded-full bg-[#00A3E0] text-white flex items-center justify-center transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
