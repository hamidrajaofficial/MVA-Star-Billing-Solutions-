import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, 
  Clipboard, 
  Activity, 
  HeartHandshake, 
  Receipt, 
  FileSearch, 
  Smartphone 
} from 'lucide-react';

const offeringItems = [
  {
    icon: Users,
    name: "Medical Virtual Receptionist",
    description: "Expert handling of patient calls, appointment scheduling, and front-desk coordination for seamless operations.",
  },
  {
    icon: Clipboard,
    name: "Virtual Medical Administrative Assistant",
    description: "Streamlining documentation, insurance verification, and daily operational tasks to enhance efficiency.",
  },
  {
    icon: Activity,
    name: "Remote Patient Monitoring Services",
    description: "Efficient tracking of patient health data and proactive care management using modern digital tools.",
  },
  {
    icon: HeartHandshake,
    name: "Remote Patient Care Coordinator",
    description: "Bridging the gap between patients and providers for improved care outcomes and support.",
  },
  {
    icon: Receipt,
    name: "Medical Billing Virtual Assistant",
    description: "Optimized claim submissions, denial management, and comprehensive revenue cycle support.",
  },
  {
    icon: FileSearch,
    name: "Medical Coder Virtual Assistant",
    description: "Accurate ICD-10 and CPT coding to ensure full reimbursement and strict regulatory compliance.",
  },
  {
    icon: Smartphone,
    name: "Digital Marketing Virtual Assistant",
    description: "Growing your practice's online presence and attracting more patients through targeted campaigns.",
  }
];

interface Props {
  bgColor?: string;
  badge?: string;
  title?: React.ReactNode;
  description?: string;
  items?: { title: string; description: string; icon: any }[];
}

export default function WhatWeDoServices({ 
  bgColor = "bg-section-bg",
  badge = "The Virtual Medical Assistant Services We Offer!",
  title = <>Comprehensive Medical Virtual Assistant Services for <span className="text-primary">Clinics and Hospitals</span></>,
  description = "We manage administrative tasks from scheduling to billing using specialized virtual assistants, reducing overhead and ensuring seamless patient care for private clinics and specialty practices.",
  items
}: Props) {
  const displayItems = items || offeringItems.map(i => ({ title: i.name, description: i.description, icon: i.icon }));

  return (
    <section className={`py-[30px] ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge-teal">
            {badge}
          </div>
          <h2 className="mb-6 max-w-4xl mx-auto">
            {title}
          </h2>
          <p className="text-slate-muted text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {displayItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] bg-white p-8 rounded-[8px] border border-slate-100 hover:shadow-lg transition-all group flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-box-styled shrink-0">
                  <item.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="text-[#0077C8] font-bold text-xl leading-tight group-hover:text-primary transition-colors text-left">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#425466] text-[15px] leading-relaxed text-left">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
