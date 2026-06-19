import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, HeartHandshake, TrendingDown, Target } from 'lucide-react';

const stats = [
  { value: '10+', label: 'Years Industry Experience', icon: Award },
  { value: '100%', label: 'HIPAA Compliant', icon: ShieldCheck },
  { value: '100%', label: 'Client Satisfaction', icon: HeartHandshake },
  { value: '25%', label: 'Cost Reduction', icon: TrendingDown },
  { value: '99%', label: 'Accuracy', icon: Target },
];

export default function Stats() {
  return (
    <section id="stats" className="relative z-20 pt-10 md:pt-16 pb-[30px]">
      {/* Background Section (Balanced blue bar) */}
      <div className="bg-primary h-[100px] flex flex-col items-center justify-center text-center px-4 shadow-sm">
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="flex flex-wrap justify-center gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white w-[175px] h-[185px] rounded-xl shadow-xl border border-slate-50 flex flex-col items-center justify-center p-4 text-center group hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-center gap-2 mb-3 w-full">
                  <Icon className="w-12 h-12 text-primary shrink-0" strokeWidth={1.5} />
                  <div className="text-4xl font-black text-primary tracking-tighter truncate leading-none">
                    {stat.value}
                  </div>
                </div>
                <div className="text-[12px] font-bold text-slate-muted uppercase leading-tight px-1 max-w-[140px]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
