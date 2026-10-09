import React from 'react';
import { 
  HeartPulse, 
  Home, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  FileCheck, 
  PhoneCall, 
  Calendar, 
  UserCheck, 
  Layers,
  ClipboardList,
  Stethoscope,
  Database,
  Users,
  MessageSquare,
  Share2,
  FolderCheck
} from 'lucide-react';

interface WhatWeDoTablesSectionProps {
  bgColor?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function WhatWeDoTablesSection({
  bgColor = "bg-white",
  eyebrow = "OPERATIONAL TASK COVERAGE",
  title = "What We Do",
  subtitle = "Whether you manage a Medicare-certified skilled home health agency or a private-duty home care agency, our dedicated specialists seamlessly integrate into your daily workflow to handle essential administrative and coordination tasks.",
  ctaText = "Hire This Service",
  ctaLink = "#consultation"
}: WhatWeDoTablesSectionProps) {
  const homeHealthTasks = [
    {
      icon: ClipboardList,
      task: "Referral intake and status tracking.",
      detail: "Timely logging of new referrals, face-to-face requirements check, and referral source communication."
    },
    {
      icon: PhoneCall,
      task: "Patient calls, messages and nonclinical follow-ups.",
      detail: "Proactive outreach to patients and families for updates, inquiries, and routine administrative checks."
    },
    {
      icon: Calendar,
      task: "Visit scheduling, reminders and rescheduling.",
      detail: "Field clinician route optimization, visit calendar updates, patient reminder calls, and prompt rescheduling."
    },
    {
      icon: ShieldCheck,
      task: "Eligibility and benefits verification as assigned.",
      detail: "Real-time verification of primary and secondary insurance coverage, copays, deductibles, and network status."
    },
    {
      icon: FileCheck,
      task: "Authorization status follow-up within the agreed scope.",
      detail: "Prior authorization status monitoring, re-authorization reminders, and payer document submission."
    },
    {
      icon: Stethoscope,
      task: "Physician-office follow-up for orders and missing documents.",
      detail: "Aggressive follow-ups with MD offices to obtain signed 485 plans of care, face-to-face encounters, and clinical notes."
    },
    {
      icon: Clock,
      task: "Tracking unsigned orders, documentation gaps and due dates.",
      detail: "Daily audit of aging unsigned orders, tracking mandatory submission deadlines, and regulatory compliance logs."
    },
    {
      icon: Database,
      task: "EHR data entry, fax organization and task logs.",
      detail: "Accurate filing of incoming e-faxes, clinical note organization, and real-time task documentation in your EMR."
    }
  ];

  const homeCareTasks = [
    {
      icon: PhoneCall,
      task: "Inbound inquiry calls and client intake.",
      detail: "Warm, professional call handling for new prospective clients and gathering vital initial care details."
    },
    {
      icon: Calendar,
      task: "Assessment scheduling and reminders.",
      detail: "Coordinating initial in-home supervisory assessment visits and sending calendar confirmations to families."
    },
    {
      icon: Users,
      task: "Caregiver scheduling and shift coordination.",
      detail: "Matching qualified caregivers with client preferences, filling open shifts, and managing last-minute call-outs."
    },
    {
      icon: UserCheck,
      task: "Caregiver onboarding paperwork and checklist tracking.",
      detail: "Tracking background checks, TB clearances, certifications, training checklists, and credential renewal dates."
    },
    {
      icon: MessageSquare,
      task: "Client, family and caregiver communication.",
      detail: "Day-to-day messaging bridge between clients, designated family contacts, and assigned care staff."
    },
    {
      icon: Share2,
      task: "Referral-lead follow-up, including referral platforms where assigned.",
      detail: "Rapid response to inquiries from platforms like Care.com, Caring.com, hospital discharge coordinators, and web leads."
    },
    {
      icon: FolderCheck,
      task: "Document organization, data entry and general office support.",
      detail: "Digital client folder maintenance, shift notes verification, billing audit prep, and administrative data logging."
    }
  ];

  return (
    <section id="what-we-do" className={`py-[30px] ${bgColor} border-b border-slate-100`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-[#00A3E0] font-bold text-xs sm:text-sm tracking-wider uppercase mb-2">
            {eyebrow}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1B2A4A] tracking-tight mb-3">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* 2 Simple Cards side-by-side with radius 2px */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1: Home Health Tasks to Cover */}
          <div className="bg-white rounded-[2px] border border-slate-200 shadow-xs overflow-hidden flex flex-col">
            {/* Simple Card Header - Icon and Heading in single row (RULE[AGENTS_md]) */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[2px] bg-[#00A3E0]/10 text-[#00A3E0] flex items-center justify-center shrink-0 border border-[#00A3E0]/20">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-[#00A3E0] block mb-0.5">
                    Skilled & Clinical Agency
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1B2A4A]">
                    Home Health Tasks to Cover
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Comprehensive intake, visit scheduling, physician orders, and EMR documentation workflows.
              </p>
            </div>

            {/* Task Items List - Title and ptag, icon and heading in single row */}
            <div className="divide-y divide-slate-100 grow bg-white">
              {homeHealthTasks.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors"
                >
                  {/* Single row icon + heading */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-[2px] bg-blue-50 text-[#00A3E0] flex items-center justify-center shrink-0 border border-blue-100">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-[#1B2A4A] text-sm sm:text-base">
                      {item.task}
                    </h4>
                  </div>
                  {/* Paragraph tag description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-12 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Simple Card Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00A3E0]" />
                <span>Compatible with WellSky, Axxess, HCHB, KanTime & Alora</span>
              </div>
              <span className="font-semibold text-[#1B2A4A]">8 Tasks Included</span>
            </div>
          </div>

          {/* Card 2: Home Care Tasks to Cover */}
          <div className="bg-white rounded-[2px] border border-slate-200 shadow-xs overflow-hidden flex flex-col">
            {/* Simple Card Header - Icon and Heading in single row (RULE[AGENTS_md]) */}
            <div className="p-5 sm:p-6 bg-slate-50 border-b border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-[2px] bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-600 block mb-0.5">
                    Private Duty & Non-Medical
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1B2A4A]">
                    Home Care Tasks to Cover
                  </h3>
                </div>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm mt-3 leading-relaxed">
                Inbound inquiry triage, caregiver shift dispatch, client coordination, and office administration.
              </p>
            </div>

            {/* Task Items List - Title and ptag, icon and heading in single row */}
            <div className="divide-y divide-slate-100 grow bg-white">
              {homeCareTasks.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 sm:p-5 hover:bg-slate-50/70 transition-colors"
                >
                  {/* Single row icon + heading */}
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-[2px] bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <h4 className="font-bold text-[#1B2A4A] text-sm sm:text-base">
                      {item.task}
                    </h4>
                  </div>
                  {/* Paragraph tag description */}
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 pl-12 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Simple Card Footer */}
            <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Supports ClearCare / WellSky, AxisCare, eRSP & CareSmartz360</span>
              </div>
              <span className="font-semibold text-[#1B2A4A]">7 Tasks Included</span>
            </div>
          </div>

        </div>

        {/* Bottom Callout Banner with radius 2px */}
        <div className="mt-8 bg-section-bg rounded-[2px] p-5 sm:p-6 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-[2px] text-[#00A3E0] shadow-xs border border-slate-200 shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#1B2A4A]">
                Have Agency-Specific SOPs or Custom Software Workflows?
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                We adapt our daily task lists and protocols directly to your internal guidelines and software requirements.
              </p>
            </div>
          </div>

          <a
            href={ctaLink}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-2.5 bg-[#00A3E0] hover:bg-[#008ec4] text-white font-bold rounded-[2px] shadow-xs transition-all text-sm cursor-pointer"
          >
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
