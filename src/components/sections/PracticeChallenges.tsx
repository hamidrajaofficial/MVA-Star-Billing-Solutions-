import { motion } from 'motion/react';
import { FileText, UserPlus, ShieldAlert, TrendingDown } from 'lucide-react';

const challenges = [
  {
    icon: FileText,
    title: "Drowning in Admin Tasks",
    description: "Phone calls, scheduling, documentation—admin work takes hours away from patient care every single day."
  },
  {
    icon: UserPlus,
    title: "Staff Turnover & Training",
    description: "High turnover means constant hiring and training. Every departure costs you time and money."
  },
  {
    icon: ShieldAlert,
    title: "Compliance Risks",
    description: "Keeping up with HIPAA and changing regulations is a constant stress for busy practice owners."
  },
  {
    icon: TrendingDown,
    title: "Revenue Leakage",
    description: "Missed calls and slow follow-ups mean lost patients and declining revenue. Your front desk is your bottom line."
  }
];

interface Props {
  bgColor?: string;
}

export default function PracticeChallenges({ bgColor = "bg-white" }: Props) {
  return (
    <section className={`py-[30px] relative ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="mb-6">
          Is Your Practice <span className="text-primary">Struggling With...</span>
        </h2>
        <p className="text-slate-muted text-lg max-w-3xl mx-auto">
          In today's complex healthcare landscape, these operational challenges frequently hinder practices from achieving sustainable growth and excellence.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box-styled shrink-0">
                  <challenge.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-bold text-navy-dark leading-tight text-left">
                  {challenge.title}
                </h4>
              </div>
              <p className="text-slate-muted text-[15px] leading-relaxed text-left">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
