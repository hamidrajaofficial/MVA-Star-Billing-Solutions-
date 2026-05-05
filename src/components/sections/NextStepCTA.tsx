import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Props {
  bgColor?: string;
}

export default function NextStepCTA({ bgColor = "bg-teal-soft" }: Props) {
  return (
    <section className={`py-[80px] relative overflow-hidden ${bgColor}`}>
      {/* Decorative Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[100px] -ml-48 -mb-48" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="badge-teal mb-6">
              Your Next Step
            </div>
            <h2 className="mb-6">
              Tired of Administrative Burden and <span className="text-primary italic">Not Knowing How to Scale?</span>
            </h2>
            <p className="text-slate-muted text-lg leading-relaxed max-w-xl">
              Unlock the full potential of your practice with a dedicated Medical Virtual Assistant. We handle the paperwork so you can focus on what matters most—your patients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 lg:justify-end"
          >
            <Link
              to="/contact"
              className="btn-primary shadow-xl"
            >
              Hire a MVA Now <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="btn-secondary bg-white/50 backdrop-blur-sm shadow-sm"
            >
              <Calendar className="w-5 h-5" /> Schedule a Call
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
