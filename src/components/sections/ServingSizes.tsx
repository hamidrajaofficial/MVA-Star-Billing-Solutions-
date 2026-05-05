import { motion } from 'motion/react';
import { User, Users, Building2, Landmark } from 'lucide-react';

const categories = [
  {
    icon: User,
    title: "Solo Practices",
    description: "Focus on your patients while we handle every administrative detail, from answering calls to filing claims."
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Scale your operations without the overhead of additional in-house staff or office space requirements."
  },
  {
    icon: Building2,
    title: "Large Clinics",
    description: "Streamline high-volume workflows with dedicated assistants who integrate seamlessly into your existing team."
  },
  {
    icon: Landmark,
    title: "Health Systems",
    description: "Customized enterprise solutions designed to reduce system-wide administrative burden and optimize revenue."
  }
];

interface Props {
  bgColor?: string;
}

export default function ServingSizes({ bgColor = "bg-section-bg" }: Props) {
  return (
    <section className={`py-[30px] ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-0.5 bg-primary rounded-full"></div>
            <span className="text-primary font-bold uppercase tracking-widest text-xs">
              Perfect Match For
            </span>
            <div className="w-10 h-0.5 bg-primary rounded-full"></div>
          </div>
          <h2 className="mb-6 max-w-3xl mx-auto">
            Superior <span className="text-primary">Healthcare Virtual Assistant</span> Packages for Every Organization
          </h2>
          <p className="text-slate-muted text-lg max-w-3xl mx-auto">
            We provide <span className="font-semibold text-navy-dark">affordable virtual healthcare assistants</span> specialized in manage administrative tasks from scheduling to billing, reducing overhead with scalable support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-navy-dark">{item.title}</h3>
              </div>
              <p className="text-slate-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
