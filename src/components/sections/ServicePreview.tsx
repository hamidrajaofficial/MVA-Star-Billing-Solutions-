import React from 'react';
import { motion } from 'motion/react';
import { Clock, Users, CheckCircle2, ShieldCheck } from 'lucide-react';

interface Props {
  bgColor?: string;
}

export default function ServicePreview({ bgColor = "bg-white" }: Props) {
  const cards = [
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Our VirtualCare Assistants are available around the clock, ensuring you never miss support. Get instant responses and reliable assistance anytime.",
      bg: "bg-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: Users,
      title: "Personalized Support",
      description: "Experience tailored healthcare assistance designed to meet your unique needs. Our assistants learn your preferences and provide customized reminders.",
      bg: "bg-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: CheckCircle2,
      title: "Efficient Task Management",
      description: "Simplify your daily routine with smart scheduling and medication tracking. Our assistants help you stay organized and reduce stress.",
      bg: "bg-primary/5",
      iconColor: "text-primary"
    },
    {
      icon: ShieldCheck,
      title: "Secure & Confidential",
      description: "Your privacy is our priority. We use advanced security measures to protect your data, ensuring all personal information remains safe.",
      bg: "bg-primary/5",
      iconColor: "text-primary"
    }
  ];

  return (
    <section className={`py-[30px] ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-navy-dark mb-6">
              Clinical Support That <span className="text-primary">Actually Scales</span>
            </h2>
            <p className="text-slate-muted max-w-3xl mx-auto text-lg leading-relaxed">
              From solo providers to multi-location group practices, we have packages designed for your stage of growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col text-left group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${card.bg} w-12 h-12 rounded-xl flex items-center justify-center ${card.iconColor} flex-shrink-0`}>
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="leading-tight font-bold text-navy-dark">
                  {card.title}
                </h3>
              </div>
              <p className="text-slate-muted leading-relaxed card-p">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
