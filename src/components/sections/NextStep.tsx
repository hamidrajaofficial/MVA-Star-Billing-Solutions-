import React from 'react';
import { motion } from 'motion/react';
import { HelpCircle, ShieldCheck, Zap, MessageSquare, Shield, Clock, Calendar, FileText, ChevronDown, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface Props {
  bgColor?: string;
}

export default function NextStep({ bgColor = "bg-section-bg" }: Props) {
  return (
    <section id="next-step-section" className={`py-[30px] border-t border-slate-100 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-bold uppercase tracking-wider text-sm mb-4">YOUR NEXT STEP</p>
              <h2 className="mb-6 text-navy-dark">
                Remarkable <span className="text-primary italic">Healthcare Virtual Assistant</span> Success
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                If you're tired of administrative burden, our specialized <span className="font-bold text-navy-dark underline decoration-primary/30">healthcare virtual assistant for doctors</span> framework ensures you transition from burnout to streamlined practice growth.
              </p>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-navy-dark">Most practice owners come to us feeling:</p>
              
              <div className="space-y-3">
                {[
                  { icon: HelpCircle, text: "Unsure about how to integrate virtual support into their workflow" },
                  { icon: Shield, text: "Worried about HIPAA compliance, security, or reliability" },
                  { icon: Zap, text: "Frustrated after trying staffing solutions that didn't work" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm items-center">
                    <div className="text-primary bg-primary/10 p-2 rounded-lg">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-slate-700 font-medium">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8">
              <h3 className="text-2xl font-bold text-navy-dark mb-4">Here's Exactly What Happens Next</h3>
              <p className="text-slate-600 leading-relaxed max-w-xl">
                That's why we take a different approach — we listen carefully, guide you step-by-step, and create a clear, personalized medical support plan.
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
              <div className="bg-[#1E88E5] py-5 px-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Request a consultation</h3>
              </div>
              
              <form className="p-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/50 transition-all text-sm font-medium"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/50 transition-all text-sm font-medium"
                  />
                </div>
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/50 transition-all text-sm font-medium"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/50 transition-all text-sm font-medium"
                />
                <div className="relative group">
                  <select className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-500 placeholder-slate-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/50 transition-all text-sm font-medium appearance-none cursor-pointer">
                    <option value="">Select a service</option>
                    <option value="medical_scribe">Medical Scribe</option>
                    <option value="billing_coding">Billing & Coding</option>
                    <option value="patient_coordination">Patient Coordination</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-450 group-hover:text-[#1E88E5] pointer-events-none transition-colors" />
                </div>

                <textarea 
                  placeholder="Your Business description"
                  rows={4}
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:border-[#1E88E5] focus:ring-1 focus:ring-[#1E88E5]/50 transition-all text-sm font-medium resize-none"
                />
                
                <button className="w-full py-4 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-1 mt-6 shadow-blue-500/20">
                  <span className="opacity-60 text-[10px] mr-1.5 font-normal tracking-tighter">»»»</span>
                  Let's Get Digital Now
                  <span className="opacity-60 text-[10px] ml-1.5 font-normal tracking-tighter">«««</span>
                </button>

                <div className="pt-6 border-t border-slate-100 text-center space-y-4 mt-6">
                  <p className="text-xs text-slate-500 font-medium">Connect with us through your favourite social media</p>
                  <div className="flex items-center justify-center gap-4">
                    {[
                      { icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-600 hover:border-blue-600 text-blue-500" },
                      { icon: Twitter, href: "https://twitter.com", color: "hover:text-sky-400 hover:border-sky-400 text-sky-400" },
                      { icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-500 hover:border-pink-500 text-pink-500" },
                      { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-700 hover:border-blue-700 text-blue-600" }
                    ].map((item, i) => (
                      <a 
                        key={i} 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`w-9 h-9 rounded-full border border-slate-100 flex items-center justify-center transition-all bg-white shadow-sm hover:scale-105 ${item.color}`}
                      >
                        <item.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Process Steps */}
        <div className="mt-24">
          <div className="relative">
            {/* Connector Line */}
            <div className="absolute top-8 left-[12.5%] w-[75%] h-[1px] bg-slate-200 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-8 relative z-10">
              {[
                { 
                  icon: MessageSquare, 
                  step: "STEP 1", 
                  title: "We understand what's going on", 
                  color: "text-primary"
                },
                { 
                  icon: ShieldCheck, 
                  step: "STEP 2", 
                  title: "We verify your needs and explain our services", 
                  color: "text-primary"
                },
                { 
                  icon: Calendar, 
                  step: "STEP 3", 
                  title: "We schedule your introduction call quickly", 
                  color: "text-primary"
                },
                { 
                  icon: Zap, 
                  step: "STEP 4", 
                  title: "We build a plan to get you back to normal", 
                  color: "text-primary"
                }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="inline-flex items-center justify-center p-5 bg-white rounded-xl border border-slate-100 shadow-sm mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className={`w-8 h-8 ${item.color}`} />
                  </div>
                  <div className="space-y-2">
                    <p className={`text-xs font-bold tracking-widest uppercase ${item.color}`}>{item.step}</p>
                    <h4 className="text-sm font-bold text-navy-dark max-w-[180px] mx-auto leading-relaxed">{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
