import { motion } from 'motion/react';
import { ClipboardList, UserMinus, ShieldAlert, TrendingDown, ArrowDown } from 'lucide-react';

const challenges = [
  {
    title: "Drowning in Admin Tasks",
    description: "Phone calls, scheduling, documentation—admin work takes hours away from patient care every single day.",
    icon: ClipboardList,
    color: "bg-primary/10",
    iconColor: "text-primary",
    animation: { y: [0, -4, 0] }
  },
  {
    title: "Staff Turnover & Training",
    description: "High turnover means constant hiring and training. Every departure costs you time and money.",
    icon: UserMinus,
    color: "bg-primary/10",
    iconColor: "text-primary",
    animation: { x: [-2, 2, -2] }
  },
  {
    title: "Compliance Risks",
    description: "Keeping up with HIPAA and changing regulations is a constant stress for busy practice owners.",
    icon: ShieldAlert,
    color: "bg-primary/10",
    iconColor: "text-primary",
    animation: { scale: [1, 1.1, 1] }
  },
  {
    title: "Revenue Leakage",
    description: "Missed calls and slow follow-ups mean lost patients and declining revenue. Your front desk is your bottom line.",
    icon: TrendingDown,
    color: "bg-primary/10",
    iconColor: "text-primary",
    animation: { y: [0, 5, 0] }
  }
];

interface Props {
  bgColor?: string;
}

export default function Challenges({ bgColor = "bg-white" }: Props) {
  return (
    <section id="challenges-section" className={`py-[30px] overflow-hidden ${bgColor}`}>
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-navy-dark mb-6">
              Proven <span className="italic text-primary">Healthcare Virtual Assistant</span> Solutions
            </h2>
            <p className="text-lg text-slate-muted max-w-[1000px] mx-auto leading-relaxed">
              In today's complex landscape, <span className="font-semibold text-navy-dark">virtual assistants for healthcare</span> are essential to overcome the real operational struggles that frequently hinder practices from achieving sustainable clinical growth.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {challenges.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-lg shadow-slate-100/50 hover:shadow-xl transition-all group h-full flex flex-col"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    whileHover={item.animation}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center ${item.iconColor} flex-shrink-0 transition-transform`}
                  >
                    <item.icon className="w-6 h-6" />
                  </motion.div>
                  <h3 className="text-navy-dark font-bold leading-tight group-hover:text-primary transition-colors mb-0">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-muted leading-relaxed card-p">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button 
              onClick={() => document.getElementById('next-step-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-primary-dark text-white font-bold h-[51px] px-12 rounded-full shadow-lg shadow-primary/30 transition-all hover:scale-105 shine-button flex items-center justify-center gap-3 mx-auto group"
            >
              Let's Get Your Practice Management Next Level
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
