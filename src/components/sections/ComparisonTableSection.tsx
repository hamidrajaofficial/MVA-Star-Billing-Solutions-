import React from 'react';
import { 
  BadgeDollarSign, 
  Clock, 
  Laptop, 
  Users, 
  ShieldCheck, 
  ClipboardCheck, 
  X, 
  Check, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ComparisonRow {
  icon: React.ElementType;
  feature: string;
  inHouse: string;
  inHouseDetail: string;
  starBilling: string;
  starBillingDetail: string;
}

interface ComparisonTableSectionProps {
  id?: string;
  bgColor?: string;
  badge?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function ComparisonTableSection({
  id = "comparison",
  bgColor = "bg-section-bg",
  badge = "THE SMARTER ALTERNATIVE",
  titlePart1 = "In-House Staff vs. ",
  titleHighlight = "Star Dedicated Specialists",
  subtitle = "Compare the real cost, ramp-up time, EHR software mastery, and operational overhead between traditional in-house staff and our dedicated healthcare teams.",
  ctaText = "Start Saving Up to 70%",
  ctaLink = "#callback-section"
}: ComparisonTableSectionProps) {

  const comparisonRows: ComparisonRow[] = [
    {
      icon: BadgeDollarSign,
      feature: "Total Cost & Overhead",
      inHouse: "$55,000 – $75,000+ / yr",
      inHouseDetail: "Salary, health benefits, payroll taxes, PTO, workers comp, equipment & software licenses.",
      starBilling: "Save Up to 70%",
      starBillingDetail: "Flat, predictable monthly rate with zero benefits, payroll taxes, or hidden equipment fees."
    },
    {
      icon: Clock,
      feature: "Ramp-Up & Onboarding Time",
      inHouse: "4 to 8 Weeks",
      inHouseDetail: "Lengthy hiring postings, candidate screening, interviews, background checks, and workflow training.",
      starBilling: "Day-1 Ready (48-72 Hours)",
      starBillingDetail: "Pre-vetted, certified specialists ready to integrate directly into your agency within 48 to 72 hours."
    },
    {
      icon: Laptop,
      feature: "Home Health EMR Mastery",
      inHouse: "Requires In-House Training",
      inHouseDetail: "Agency supervisors must spend clinical hours teaching EMR modules, NOA submissions, and task logs.",
      starBilling: "100% Pre-Trained",
      starBillingDetail: "Fluent in WellSky, Axxess, Homecare Homebase, KanTime, Alora, ClearCare, and MatrixCare."
    },
    {
      icon: Users,
      feature: "Turnover & Absenteeism",
      inHouse: "High Turnover Risk",
      inHouseDetail: "Unplanned sick leaves or sudden resignations halt billing queues and patient intake calls.",
      starBilling: "Guaranteed Continuity",
      starBillingDetail: "Dedicated cross-trained backup specialists ensure zero operational disruption or downtime."
    },
    {
      icon: ShieldCheck,
      feature: "HIPAA & Security Compliance",
      inHouse: "Agency Carries 100% Liability",
      inHouseDetail: "Ongoing internal device audits, employee privacy training, and workstation monitoring burden.",
      starBilling: "100% HIPAA & BAA Protected",
      starBillingDetail: "Executed BAA, encrypted virtual desktop environments, multi-factor authentication, and strict compliance."
    },
    {
      icon: ClipboardCheck,
      feature: "Supervisory Overhead",
      inHouse: "10-15 Hours / Week",
      inHouseDetail: "Heavy daily micro-management of attendance, intake error corrections, and task assignments.",
      starBilling: "Managed by Dedicated Lead",
      starBillingDetail: "Includes a dedicated Account Manager, daily task activity logs, and transparent KPI reporting."
    }
  ];

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white border border-slate-200 text-primary text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>{badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-3">
            {titlePart1}
            <span className="text-primary italic">{titleHighlight}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Desktop Comparison Table (Hidden on small screens) */}
        <div className="hidden lg:block bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden mb-8">
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-sm font-bold text-navy-dark">
            <div className="col-span-4 p-5 flex items-center">
              <span>Operational Metric</span>
            </div>
            <div className="col-span-4 p-5 border-l border-slate-200 bg-slate-100/60 text-slate-700 flex items-center justify-between">
              <span>Traditional In-House Hire</span>
              <span className="text-xs font-medium text-rose-500 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                High Overhead
              </span>
            </div>
            <div className="col-span-4 p-5 border-l border-slate-200 bg-primary/5 text-navy-dark flex items-center justify-between">
              <span className="text-primary font-black">Star Dedicated Specialist</span>
              <span className="text-xs font-bold text-[#00B67A] bg-[#00B67A]/10 px-2.5 py-0.5 rounded-full border border-[#00B67A]/20">
                Recommended
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonRows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div key={idx} className="grid grid-cols-12 text-sm hover:bg-slate-50/50 transition-colors">
                  {/* Feature & Icon - single row per Global UI Rule */}
                  <div className="col-span-4 p-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-dark text-base">{row.feature}</h4>
                    </div>
                  </div>

                  {/* In-House Column */}
                  <div className="col-span-4 p-5 border-l border-slate-100 bg-slate-50/30">
                    <div className="flex items-center gap-2 mb-1.5 text-slate-800 font-bold">
                      <div className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                        <X className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <span>{row.inHouse}</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-7 leading-relaxed">
                      {row.inHouseDetail}
                    </p>
                  </div>

                  {/* Star Billing Column */}
                  <div className="col-span-4 p-5 border-l border-slate-100 bg-primary/5">
                    <div className="flex items-center gap-2 mb-1.5 text-navy-dark font-black">
                      <div className="w-5 h-5 rounded-full bg-[#00B67A] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check className="w-3.5 h-3.5 stroke-[3px]" />
                      </div>
                      <span className="text-primary font-bold">{row.starBilling}</span>
                    </div>
                    <p className="text-xs text-slate-600 pl-7 leading-relaxed font-medium">
                      {row.starBillingDetail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Cards View */}
        <div className="lg:hidden space-y-4 mb-8">
          {comparisonRows.map((row, idx) => {
            const Icon = row.icon;
            return (
              <div 
                key={idx} 
                className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm"
              >
                {/* Feature Header: Single row icon and heading */}
                <div className="flex items-center gap-4 mb-4 pb-3 border-b border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-navy-dark text-base">{row.feature}</h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  {/* In House Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 mb-1">
                      <X className="w-3.5 h-3.5 text-rose-500" />
                      <span>In-House Hire</span>
                    </div>
                    <p className="text-sm font-bold text-slate-800 mb-1">{row.inHouse}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{row.inHouseDetail}</p>
                  </div>

                  {/* Star Billing Box */}
                  <div className="p-3.5 rounded-xl bg-primary/10 border border-primary/20">
                    <div className="flex items-center gap-1.5 text-xs font-black text-primary mb-1">
                      <Check className="w-3.5 h-3.5 text-[#00B67A]" />
                      <span>Star Dedicated Specialist</span>
                    </div>
                    <p className="text-sm font-black text-navy-dark mb-1">{row.starBilling}</p>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">{row.starBillingDetail}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-navy-dark">
              Ready to eliminate administrative bottlenecks and cut agency overhead?
            </h3>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Connect with our staffing specialists today for a custom scope of work.
            </p>
          </div>
          <a
            href={ctaLink}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm tracking-wide shadow-primary hover:shadow-lg transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
