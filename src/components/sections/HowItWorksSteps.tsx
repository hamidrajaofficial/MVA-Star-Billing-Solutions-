import { motion } from 'motion/react';
import { Globe, Users, Zap, Leaf, ChevronDown } from 'lucide-react';

const steps = [
  {
    icon: Globe,
    title: "Meet With Our Team",
    description: "We start by understanding exactly what you need.",
    number: "01",
    color: "bg-blue-500",
    iconBg: "bg-blue-50 text-blue-500"
  },
  {
    icon: Users,
    title: "Get Matched",
    description: "We search our talent pool of 200,000+ vetted VAs to find your perfect match.",
    number: "02",
    color: "bg-green-500",
    iconBg: "bg-green-50 text-green-500"
  },
  {
    icon: Zap,
    title: "Consulted Onboarding",
    description: "We ensure a smooth start with accountability built in.",
    number: "03",
    color: "bg-blue-500",
    iconBg: "bg-blue-50 text-blue-500"
  },
  {
    icon: Leaf,
    title: "What Makes Us Different",
    description: "Every client gets access to our signature BootCamp — an 8-hour intensive that sets you and your VA up for long-term success.",
    number: "04",
    color: "bg-green-500",
    iconBg: "bg-green-50 text-green-500"
  }
];

interface Props {
  bgColor?: string;
}

export default function HowItWorksSteps({ bgColor = "bg-section-bg" }: Props) {
  return (
    <section className={`py-[30px] relative overflow-hidden ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <div className="badge-teal">
          How It Works
        </div>
        <h2 className="mb-6">
          Efficient Virtual Assistant Onboarding for <span className="text-primary">Reduced Professional Overhead</span>
        </h2>
        <p className="text-slate-muted text-lg max-w-3xl mx-auto">
          We start by understanding your needs, matching you with pre-vetted professionals, and conducting consulted onboarding using our signature framework, ensuring long-term success and improved focus for your practice.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Horizontal Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-blue-100 hidden lg:block -translate-y-[100px]" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden flex flex-col h-full"
              >
                {/* Large Background Number */}
                <div className="absolute -bottom-4 -right-2 text-[100px] font-black text-slate-50 leading-none select-none group-hover:text-slate-100 transition-colors">
                  {step.number}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="icon-box-styled shrink-0">
                      <step.icon className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    
                    <h4 className="text-lg font-bold text-navy-dark leading-tight">
                      {step.title}
                    </h4>
                  </div>
                  
                  <p className="text-slate-muted text-[15px] leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
