import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';

interface WhatYouWillGetProps {
  title?: string;
  description?: string;
  benefits?: string[];
  ctaText?: string;
}

interface WhatYouWillGetProps {
  title?: string;
  description?: string;
  benefits?: string[];
  ctaText?: string;
  bgColor?: string;
}

export default function WhatYouWillGet({ 
  title = "Your Partner in Clinical Growth", 
  description = "We are more than just a service provider; we are your strategic partner in the medical landscape. We combine healthcare expertise with technology to deliver a holistic support engine that drives patient satisfaction.",
  benefits = [
    "Integrated HIPAA-compliant workflows for maximum security",
    "Data-driven practice management across all touchpoints",
    "Scalable staffing infrastructure built for long-term ROI",
    "Dedicated team of medical specialists focused on your goals"
  ],
  ctaText = "Let's Get On a Discovery Call",
  bgColor = "bg-section-bg"
}: WhatYouWillGetProps) {
  return (
    <section className={`py-[120px] relative ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[4fr_6fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Illustration (Screenshot Style) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1 z-10"
          >
            {/* Background Decorative Shapes - Top Left Dark Block */}
            <div className="absolute -top-12 -left-8 w-[85%] h-[85%] bg-[#2D3E50] rounded-[40px] -z-10 shadow-2xl" />
            
            {/* Background Bleed Shape - Bottom Right Light Blue */}
            <div className="absolute -bottom-12 -right-12 w-[75%] h-[75%] bg-primary rounded-[40px] -z-20 shadow-2xl" />
 
            {/* Main White Card Container */}
            <div className="bg-white rounded-[40px] shadow-xl p-6 border border-slate-100 relative overflow-visible">
              {/* Dashed Circular Stroke */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-dashed border-primary/30 rounded-full" />
              
              <div className="relative z-10 flex flex-col items-center py-4">
                {/* Central Hero Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="relative group w-full"
                >
                  <img 
                    src="https://medicalstaffrelief.com/wp-content/uploads/2024/07/billing-300x300.png" 
                    alt="Medical Billing Illustration"
                    className="w-full h-auto object-contain drop-shadow-2xl transition-transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Med-Card 1: Provider Info */}
                  <div className="absolute -top-6 -left-12 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 border border-slate-100 flex items-center gap-3 min-w-[180px]">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <img src="https://i.pravatar.cc/100?u=doc2" alt="Doc" className="rounded-full" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-navy-dark">Wellness Clinic</h4>
                      <p className="text-[8px] text-teal-600">Verification Active</p>
                    </div>
                  </div>

                  {/* Floating Med-Card 2: Mini Graph */}
                  <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-white/95 backdrop-blur shadow-xl rounded-2xl p-4 border border-slate-100 min-w-[140px]">
                    <p className="text-[9px] font-bold text-navy-dark mb-2">Revenue Growth</p>
                    <div className="flex items-end gap-1 h-12">
                      {[40, 70, 45, 90, 60, 85].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 rounded-t-sm group" style={{ height: `${h}%` }}>
                          <div className="h-full w-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity rounded-t-sm" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Med-Card 3: Status Check */}
                  <div className="absolute -bottom-4 -left-6 bg-white/95 backdrop-blur shadow-xl rounded-full px-5 py-2 border border-slate-100 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-navy-dark">Billing Synced</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Side: Content (Screenshot Style) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="uppercase tracking-widest text-primary font-extrabold text-sm mb-4">
              WHY CHOOSE GLOBAL MEDICAL VA?
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-navy-dark leading-tight mb-6">
              {title.split(' ').slice(0, -2).join(' ')} <span className="text-primary italic">{title.split(' ').slice(-2).join(' ')}</span>
            </h2>

            <p className="text-slate-muted text-lg leading-relaxed mb-8">
              {description}
            </p>

            <h3 className="text-xl font-bold text-navy-dark mb-6">
              Benefits of a Holistic Support Strategy:
            </h3>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 bg-primary/10 rounded-md flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                  </div>
                  <p className="text-navy-dark font-medium leading-tight">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:bg-primary/90 flex items-center gap-3 transition-shadow"
            >
              {ctaText}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
