import React, { useState } from 'react';
import { 
  PhoneCall, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Send, 
  Lock, 
  Sparkles,
  Check
} from 'lucide-react';

interface RequestCallBackSectionProps {
  id?: string;
  bgColor?: string;
  badge?: string;
  titlePart1?: string;
  titleHighlight?: string;
  subtitle?: string;
  defaultService?: string;
}

export default function RequestCallBackSection({
  id = "callback-section",
  bgColor = "bg-white",
  badge = "FAST RESPONSE GUARANTEED",
  titlePart1 = "Request a ",
  titleHighlight = "Call Back",
  subtitle = "Speak with our healthcare staffing specialists today to discuss your practice's specific billing or virtual assistant needs. We'll show you how to streamline operations and cut costs within 48 hours.",
  defaultService = "Home Healthcare Billing Services"
}: RequestCallBackSectionProps) {

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    agencyName: '',
    serviceNeeded: defaultService,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const benefits = [
    {
      icon: PhoneCall,
      title: "15-Minute Strategy Call",
      description: "Quick, focused evaluation of your current referral volume, EMR software, and operational bottlenecks."
    },
    {
      icon: ShieldCheck,
      title: "100% HIPAA & BAA Protected",
      description: "Comprehensive Business Associate Agreement and end-to-end encrypted communication from day one."
    },
    {
      icon: Zap,
      title: "Rapid 48-Hour Matching",
      description: "Get paired with certified billing coders and experienced medical virtual assistants immediately."
    },
    {
      icon: CheckCircle2,
      title: "Zero Long-Term Lock-In",
      description: "Flexible monthly agreements that give you total peace of mind and scale as your agency grows."
    }
  ];

  return (
    <section id={id} className={`py-[30px] ${bgColor} border-b border-slate-100 overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading and Value Proposition Cards */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
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

            {/* Benefit Cards - Global UI Rule: flex items-center gap-4 for Icon & Heading */}
            <div className="space-y-3.5 pt-2">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-section-bg border border-slate-200/80 shadow-xs hover:border-primary/40 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-1.5">
                      <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold text-navy-dark leading-tight">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 pl-13 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Fast Response Badge */}
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-teal-soft/60 border border-primary/20 text-xs text-navy-dark font-medium">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>We usually call back within <strong className="font-bold text-primary">15 minutes</strong> during standard business hours (EST).</span>
            </div>
          </div>

          {/* Right Column: Callback Request Form Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
              
              {/* Form Card Top Header */}
              <div className="bg-gradient-to-r from-navy-dark to-[#1E3A60] p-6 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary bg-white/10 px-2.5 py-0.5 rounded-full inline-block mb-2">
                  Direct Coordinator Connect
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                  Request a Call Back
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1">
                  Fill out your details below and a healthcare practice advisor will contact you shortly.
                </p>
              </div>

              {/* Form Content / Success state */}
              {formSubmitted ? (
                <div className="p-8 sm:p-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#00B67A]/15 text-[#00B67A] flex items-center justify-center mx-auto shadow-inner">
                    <Check className="w-8 h-8 stroke-[3px]" />
                  </div>
                  <h4 className="text-xl font-black text-navy-dark">Call Back Request Received!</h4>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-navy-dark">{formData.firstName}</strong>. One of our dedicated healthcare staffing specialists is reviewing your agency details and will call you at <strong className="text-navy-dark">{formData.phone || "your number"}</strong> within 15 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs font-bold text-primary hover:underline cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
                  
                  {/* Name Fields (2 Col) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-dark mb-1.5">
                        First Name <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Robert"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy-dark mb-1.5">
                        Last Name <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="text"
                        required
                        placeholder="e.g. Sterling"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Work Email & Phone Number (2 Col) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-dark mb-1.5">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="email"
                        required
                        placeholder="robert@youragency.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy-dark mb-1.5">
                        Direct Phone <span className="text-rose-500">*</span>
                      </label>
                      <input 
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Agency Name & Service Selection (2 Col) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-navy-dark mb-1.5">
                        Practice / Agency Name
                      </label>
                      <input 
                        type="text"
                        placeholder="e.g. CareFirst Home Health"
                        value={formData.agencyName}
                        onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-navy-dark mb-1.5">
                        Service Needed
                      </label>
                      <select 
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white"
                      >
                        <option value="Home Healthcare Billing Services">Home Healthcare Billing Services</option>
                        <option value="Virtual Assistant Services">Home Health Virtual Assistant Services</option>
                        <option value="Combined Billing & VA Support">Combined Billing & VA Support</option>
                        <option value="Aging A/R Recovery Specialist">Aging A/R Recovery Specialist</option>
                      </select>
                    </div>
                  </div>

                  {/* Note / Challenge textarea */}
                  <div>
                    <label className="block text-xs font-bold text-navy-dark mb-1.5">
                      Current Challenge or Questions (Optional)
                    </label>
                    <textarea 
                      rows={2}
                      placeholder="e.g. We need help with delayed intake and Medicare NOA submissions in WellSky..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-slate-800 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-primary hover:bg-primary-dark text-white font-bold text-sm tracking-wide shadow-primary hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Request a Call Back Now</span>
                  </button>

                  {/* Security Reassurance */}
                  <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500">
                    <Lock className="w-3.5 h-3.5 text-[#00B67A]" />
                    <span>Your data is confidential, HIPAA-compliant, and will never be shared.</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
