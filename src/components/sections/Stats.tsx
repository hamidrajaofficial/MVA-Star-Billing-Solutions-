import React from 'react';
import { motion } from 'motion/react';

const statsData = [
  { number: '25', suffix: 'Days', label: 'RAPID REVENUE RECOVERY' },
  { number: '2', suffix: '%', label: 'REJECTIONS' },
  { number: '98', suffix: '%', label: 'ELECTRONIC PAYMENT' },
  { number: '100', suffix: '%', label: 'CLIENT RETENTION' }
];

export default function Stats() {
  return (
    <section id="stats" className="relative z-20 pt-0 pb-[30px]">
      {/* Background Section (Balanced blue bar) */}
      <div className="bg-primary h-[100px] flex flex-col items-center justify-center text-center px-4 shadow-sm">
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 justify-center">
          {/* Performance Statement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-[#0B2545] w-full md:col-span-2 lg:col-span-1 h-[150px] rounded-none shadow-lg flex flex-col items-center justify-center p-5 text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-[13px] md:text-sm font-black text-white leading-tight mb-2 uppercase tracking-wide">
              Transform your financial performance
            </h3>
            <p className="text-[11px] text-slate-300 leading-normal font-normal">
              With up to <span className="text-[#02ADF1] font-bold">98% fewer denials</span>, 30% increased revenue, and 45% savings in operational costs.
            </p>
          </motion.div>

          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.4 }}
              className="bg-white w-full h-[150px] rounded-none shadow-lg border border-slate-100 flex flex-col items-center justify-center p-4 text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-baseline justify-center mb-2">
                <span className="text-4xl font-black text-[#02ADF1] tracking-tighter leading-none">
                  {stat.number}
                </span>
                <span className="text-lg font-bold text-[#02ADF1] ml-0.5 leading-none">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-[11px] font-extrabold text-[#0B2545] tracking-wider uppercase leading-tight max-w-[170px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

