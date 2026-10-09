import React from 'react';
import { Star, ShieldCheck, CheckCircle2, Quote, TrendingUp, Clock, FileCheck } from 'lucide-react';

interface Review {
  name: string;
  role: string;
  organization: string;
  avatar: string;
  title: string;
  quote: string;
  metric: string;
  metricIcon: React.ElementType;
  tag: string;
}

interface ClientReviewsSectionProps {
  id?: string;
  bgColor?: string;
  badge?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function ClientReviewsSection({
  id = "reviews",
  bgColor = "bg-white",
  badge = "CLIENT REVIEWS & PROOF",
  titlePart1 = "Trusted by Over 500+ ",
  titleHighlight = "Healthcare Providers",
  subtitle = "See how our dedicated virtual assistants and medical billing specialists help agencies accelerate cash flow, clear claims, and deliver better patient care."
}: ClientReviewsSectionProps) {

  const reviews: Review[] = [
    {
      name: "Dr. Robert Sterling, MD",
      role: "Medical Director",
      organization: "Sterling Family Medicine & Home Health",
      avatar: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=160&h=160",
      title: "Cash Flow Recovered in 30 Days",
      quote: "Their billing team transformed our cash flow within 30 days. Prior authorization turnaround dropped by 60%, and our claims rejection rate is consistently under 2%. Truly an indispensable revenue cycle partner.",
      metric: "+42% Collection Velocity",
      metricIcon: TrendingUp,
      tag: "Home Health Billing"
    },
    {
      name: "Sarah Jenkins, RN",
      role: "Clinical Operations Director",
      organization: "Compassionate Home Care Agency",
      avatar: "https://images.unsplash.com/photo-1594824813583-a4428987489f?auto=format&fit=crop&q=80&w=160&h=160",
      title: "Seamless Referral Intake & Scheduling",
      quote: "The virtual assistants are prompt, compassionate, and handle our patient scheduling seamlessly. We can focus 100% on bedside patient care now without worrying about missed intake calls or delayed admissions.",
      metric: "< 3 Min Intake Response",
      metricIcon: Clock,
      tag: "Virtual Assistant & Intake"
    },
    {
      name: "Mark Alvarez",
      role: "Chief Operating Officer",
      organization: "Horizon Health Network",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=160&h=160",
      title: "Flawless Onboarding & EMR Mastery",
      quote: "Onboarding was flawless. The dedicated account manager keeps us updated daily with transparent A/R reports. Outstanding command of WellSky and Axxess EHRs. Best operational decision we made this year.",
      metric: "98.4% Clean Claims Rate",
      metricIcon: FileCheck,
      tag: "RCM & EMR Operations"
    }
  ];

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Trustpilot proof banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          
          {/* Trustpilot 4.9 rating banner */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#F4F9F9] border border-slate-200/80 mb-4 shadow-xs">
            <div className="flex items-center gap-1 bg-[#00B67A] text-white px-2 py-0.5 rounded text-xs font-black tracking-wider">
              <span>★</span>
              <span>Trustpilot</span>
            </div>
            <div className="flex items-center text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current text-amber-400" />
              ))}
            </div>
            <span className="text-xs font-bold text-navy-dark">
              Rated <span className="text-primary font-black">4.9/5</span> by 500+ Providers
            </span>
          </div>

          <p className="text-primary font-bold uppercase tracking-wider text-xs sm:text-sm mb-2">
            {badge}
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-3">
            {titlePart1}
            <span className="text-primary italic">{titleHighlight}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 3 Review Cards - Following Global UI Rule: flex items-center gap-4 for Icon and Heading */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => {
            const MetricIcon = review.metricIcon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header: 5 Stars + Tag */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      {review.tag}
                    </span>
                  </div>

                  {/* Single-row Icon & Heading matching Global UI Rule */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <Quote className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-navy-dark leading-snug">
                      {review.title}
                    </h3>
                  </div>

                  {/* Review Quote */}
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 italic">
                    "{review.quote}"
                  </p>
                </div>

                <div>
                  {/* Metric Highlight Card */}
                  <div className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-section-bg border border-slate-200/80 mb-5">
                    <span className="text-xs font-semibold text-slate-500">Key Outcome:</span>
                    <div className="flex items-center gap-1.5 text-xs font-black text-navy-dark">
                      <MetricIcon className="w-3.5 h-3.5 text-primary" />
                      <span>{review.metric}</span>
                    </div>
                  </div>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-primary/20 shrink-0" 
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="text-sm font-bold text-navy-dark truncate">
                          {review.name}
                        </p>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00B67A] shrink-0" />
                      </div>
                      <p className="text-xs text-slate-500 truncate">
                        {review.role} • {review.organization}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-500 text-xs sm:text-sm font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span>Verified Healthcare Agency Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>100% HIPAA & BAA Protected Partnerships</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>Average 98.4% Clean Claim Success Rate</span>
          </div>
        </div>

      </div>
    </section>
  );
}
