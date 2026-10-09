import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface BillingFAQSectionProps {
  id?: string;
  bgColor?: string;
  badge?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
}

export default function BillingFAQSection({
  id = "faq",
  bgColor = "bg-section-bg",
  badge = "FREQUENTLY ASKED QUESTIONS",
  titlePart1 = "Common Questions ",
  titleHighlight = "Answered",
  subtitle = "Everything you need to know about partnering with our dedicated medical billing specialists, virtual assistants, and HIPAA protocols."
}: BillingFAQSectionProps) {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  // Exact 6 questions from the screenshot
  const faqs: FAQItem[] = [
    {
      question: "Can we hire a dedicated medical billing manager for our practice?",
      answer: "Yes, absolutely. You can hire a dedicated full-time medical billing manager who works exclusively for your practice. Your assigned billing manager oversees your end-to-end revenue cycle, coordinates directly with Medicare and commercial payers, tracks Notice of Admission (NOA) timeliness, resolves complex denials, and delivers comprehensive daily and weekly financial collections reporting to your agency leadership."
    },
    {
      question: "What qualifications and experience do your medical billing specialists have?",
      answer: "Our medical billing specialists have an average of 4 to 8 years of specialized healthcare RCM experience. They hold industry credentials including AAPC (CPC, CPB) and AHIMA certifications, with deep expertise in Home Health PDGM guidelines, OASIS-E reviews, ICD-10 coding, and Medicare claims adjudication. They are 100% pre-trained across major software platforms such as WellSky, Axxess, HCHB, KanTime, and Alora."
    },
    {
      question: "Do medical billers have to talk to patients?",
      answer: "Only if you want them to. Our specialists can handle patient-facing financial calls—such as explaining Explanation of Benefits (EOB), verifying copays, clarifying deductible balances, and establishing payment plans with utmost empathy and professionalism. If you prefer your billers to focus purely on backend payer follow-ups, claims clearing, and denial appeals, we configure their scope accordingly."
    },
    {
      question: "Can we hire a medical biller on a full-time or part-time basis?",
      answer: "Yes. We offer flexible hiring models including full-time dedicated specialists (40 hours/week), part-time support (20 hours/week), or percentage-of-collections models. Whether you are a boutique agency needing targeted help for aging A/R cleanups or an expanding multi-branch enterprise requiring a full revenue cycle team, our arrangements scale seamlessly to match your census."
    },
    {
      question: "How do your medical billing solutions address common billing problems?",
      answer: "We resolve common billing bottlenecks with proactive prevention and persistent follow-up. For delayed intakes and NOAs, our team guarantees transmission within 24-48 hours to avoid Medicare non-timely penalties. For claim denials, our multi-tier scrubber audits clinical documentation before submission, achieving a 98.4% first-pass clean claim rate. For aging A/R, our dedicated recovery team systematically pursues unpaid claims past 60 and 90 days."
    },
    {
      question: "How do you ensure data security and HIPAA?",
      answer: "We treat patient data security as our highest priority. We execute a comprehensive Business Associate Agreement (BAA) with every healthcare partner before work commences. Our specialists operate exclusively through encrypted virtual desktop environments (VDI) or secure VPN tunnels with multi-factor authentication (MFA). Workstations are strictly locked down with disabled USB ports, print restrictions, and continuous security monitoring."
    }
  ];

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white border border-slate-200 text-primary text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>{badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-navy-dark tracking-tight mb-3">
            {titlePart1}
            <span className="text-primary italic">{titleHighlight}</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all hover:border-primary/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors hover:bg-slate-50/50"
                >
                  {/* Single-row icon and question title matching Global UI Rule */}
                  <div className="flex items-center gap-4">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-primary text-white shadow-xs' : 'bg-primary/10 text-primary'
                    }`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-navy-dark leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? 'bg-primary/10 text-primary rotate-180' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 pt-1 text-slate-600 text-sm sm:text-[15px] leading-relaxed border-t border-slate-100/80 bg-slate-50/30">
                    <p className="pl-13">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-8 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-navy-dark text-base">Have a question not listed here?</h4>
              <p className="text-xs text-slate-500 mt-0.5">Our practice advisors are available to review your agency's exact requirements.</p>
            </div>
          </div>
          <a
            href="#callback-section"
            className="px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-primary flex items-center gap-1.5 cursor-pointer"
          >
            <span>Ask an Advisor</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
