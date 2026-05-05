import { motion } from 'motion/react';
import { FileText, ClipboardCheck, Hospital, ChevronDown } from 'lucide-react';

const solutions = [
  {
    icon: FileText,
    title: "Medical Billing Services for Physicians",
    description: "Tailored billing support for individual providers and specialty physicians, whether independent or part of small groups."
  },
  {
    icon: ClipboardCheck,
    title: "Medical Billing Services for Small Practices",
    description: "As a best medical billing company for small practices in 2026, offering affordable pricing and comprehensive support throughout the entire payer reimbursement cycle."
  },
  {
    icon: Hospital,
    title: "Medical Billing Services for Hospitals and Large Healthcare Systems",
    description: "Comprehensive revenue cycle management for complex organizations with broader administrative requirements."
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-[30px] bg-section-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="badge-teal">
          Serving Healthcare Practices Of All Sizes
        </div>
        <h2 className="mb-6 max-w-4xl mx-auto">
          Medical Virtual Assistant Services Focused on <span className="text-primary">Efficient Clinic Operations</span>
        </h2>
        <p className="text-slate-muted text-lg">
          We manage administrative tasks from scheduling to billing using specialized virtual assistants, supporting practices across every stage of growth with scalable solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-lg font-bold text-navy-dark leading-tight flex-1 text-left">
                  {item.title}
                </h4>
              </div>
              
              <p className="text-slate-muted text-[15px] leading-relaxed mb-8 text-left">
                {item.description}
              </p>

              <button className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider group-hover:gap-3 transition-all">
                Read More <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
