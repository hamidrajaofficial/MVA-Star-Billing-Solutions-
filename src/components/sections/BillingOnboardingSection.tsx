import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  UserCheck, 
  Zap, 
  Leaf, 
  ArrowRight, 
  ShieldCheck, 
  BadgePercent, 
  FileCheck2, 
  Clock,
  Sparkles
} from 'lucide-react';

export interface ProcessStep {
  stepNumber: string;
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: string;
}

interface BillingOnboardingSectionProps {
  id?: string;
  bgColor?: string;
  badge?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  showCta?: boolean;
}

export default function BillingOnboardingSection({
  id = "how-it-works",
  bgColor = "bg-section-bg",
  badge = "How It Works",
  titlePart1 = "Efficient Billing Team Onboarding for ",
  titleHighlight = "Maximized Reimbursements",
  subtitle = "We start by understanding your needs, matching you with pre-vetted professionals, and conducting consulted onboarding using our signature framework, ensuring long-term success and improved focus for your practice.",
  steps,
  showCta = true
}: BillingOnboardingSectionProps) {
  // Exact 4 steps matching the Onboarding framework & screenshot
  const defaultSteps: ProcessStep[] = [
    {
      stepNumber: "01",
      icon: Users,
      title: "Meet With Our Team",
      description: "We start by understanding exactly what you need, your patient intake workflows, software systems, and growth goals.",
      highlight: "Workflow Assessment"
    },
    {
      stepNumber: "02",
      icon: UserCheck,
      title: "Get Matched",
      description: "We search our talent pool of 200,000+ vetted specialists to find your perfect match with verified healthcare billing experience.",
      highlight: "Certified Match"
    },
    {
      stepNumber: "03",
      icon: Zap,
      title: "Consulted Onboarding",
      description: "We ensure a smooth start with accountability built in, setting up secure HIPAA-compliant access and communication channels.",
      highlight: "HIPAA-Compliant Setup"
    },
    {
      stepNumber: "04",
      icon: Leaf,
      title: "What Makes Us Different",
      description: "Every client gets access to our signature BootCamp — an 8-hour intensive that sets you and your billing team up for long-term success.",
      highlight: "Signature BootCamp"
    }
  ];

  const displaySteps = steps || defaultSteps;

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Screenshot & Branding */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#E0F2FE] text-[#00A3E0] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#00A3E0]" />
            <span>{badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B2A4A] tracking-tight mb-4">
            {titlePart1}
            <span className="text-[#00A3E0]">{titleHighlight}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* 4 Process Cards - following Global UI Rule: flex items-center gap-4 for Icon and Heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displaySteps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00A3E0]/50 transition-all flex flex-col justify-between overflow-hidden group min-h-[220px]"
              >
                {/* Background Step Number Watermark matching Screenshot */}
                <div className="absolute right-4 bottom-2 text-6xl sm:text-7xl font-black text-slate-100 pointer-events-none select-none transition-colors group-hover:text-slate-200/80 -z-0">
                  {step.stepNumber}
                </div>

                <div className="relative z-10">
                  {/* Single row icon and heading following Global UI Rule: flex items-center gap-4 */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#00A3E0] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                      <IconComponent className="w-6 h-6 stroke-[2]" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1B2A4A] leading-snug">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Step Indicator matching Screenshot */}
                <div className="relative z-10 pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-semibold text-[#00A3E0]">Step {step.stepNumber}</span>
                  <span className="w-2 h-2 rounded-full bg-[#00A3E0]/40 group-hover:bg-[#00A3E0] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Optional Clean Bottom Conversion Banner */}
        {showCta && (
          <div className="mt-8 bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#00A3E0] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-[#1B2A4A]">
                  Zero Billing Disruption Guarantee
                </p>
                <p className="text-xs text-slate-500">
                  Dedicated PDGM billing specialists integrated into WellSky, Axxess, or HCHB within 5 business days.
                </p>
              </div>
            </div>

            <a
              href="#consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#00A3E0] text-white text-xs sm:text-sm font-bold shadow-sm hover:bg-[#0090C7] transition-all shrink-0 cursor-pointer"
            >
              <span>Schedule Onboarding Call</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
