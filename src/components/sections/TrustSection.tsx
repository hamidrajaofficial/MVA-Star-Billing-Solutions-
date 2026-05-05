import { motion } from 'motion/react';
import { ShieldCheck, Cpu, Zap, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: Cpu,
    title: "Deep Expertise in eCW",
    description: "Our teams are highly specialized in eClinicalWorks, ensuring peak efficiency and accurate data management within your EHR system."
  },
  {
    icon: Zap,
    title: "Seamless Workflow Integration",
    description: "We don't just use the software; we optimize your workflows to reduce clicks, save time, and eliminate administrative bottlenecks."
  },
  {
    icon: ShieldCheck,
    title: "HIPAA-Compliant Security",
    description: "Patient data security is our top priority. We use secure VPNs and strictly follow HIPAA protocols for all EHR interactions."
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description: "Experience uninterrupted productivity with reliable assistance that scales with your practice's demands."
  }
];

interface Props {
  bgColor?: string;
}

export default function TrustSection({ bgColor = "bg-section-bg" }: Props) {
  return (
    <section className={`py-[30px] ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="badge-teal">
            Scaling Support
          </div>
          <h2 className="mb-6">
            Clinical Support That <span className="text-primary">Actually Scales</span>
          </h2>
          <p className="text-slate-muted text-lg max-w-3xl mx-auto">
            From solo providers to multi-location group practices, we have packages designed for your stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[24px] border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark">{point.title}</h3>
              </div>
              <p className="text-slate-muted leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
