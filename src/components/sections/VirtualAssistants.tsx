import { motion } from 'motion/react';
import { 
  FileText, 
  Settings, 
  Database, 
  DollarSign, 
  Wallet,
  CheckCircle2
} from 'lucide-react';

export default function WhyTrustUs() {
  const points = [
    { text: "Setting up and optimizing Superbill templates", icon: FileText },
    { text: "Managing claim edit rules and automation logic", icon: Settings },
    { text: "Cleaning up insurance databases for better eligibility verification", icon: Database },
    { text: "Posting ERAs directly through eCW's remittance module", icon: DollarSign },
    { text: "Syncing patient balances with your patient portal", icon: Wallet }
  ];

  return (
    <section className="py-[30px] bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Image with Decorative Shapes */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative px-8 py-8"
          >
            {/* Background Shape 1 (Navy) */}
            <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-navy-dark rounded-[40px] -z-10" />
            
            {/* Background Shape 2 (Cyan) */}
            <div className="absolute bottom-0 right-0 w-2/3 h-1/3 bg-primary rounded-[40px] -z-10" />

            {/* Main Image */}
            <div className="relative overflow-hidden group">
              <img 
                src="https://gmva.com/hubfs/Hero%20Blob%20Model%20v2.png" 
                alt="Virtual Medical Assistant"
                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 leading-tight">
              Trusted Medical Virtual Assistant Partner for <span className="text-primary">HIPAA Compliance</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="text-lg font-bold text-navy-dark leading-relaxed">
                Star Billing Solutions MVA combines industry expertise with advanced training tools to reduce errors, increase productivity, and provide transparent support — trusted by clinics nationwide.
              </p>
              
              <p className="text-slate-muted text-lg leading-relaxed">
                Our billing specialists are trained in eCW-specific workflows. That means we help in:
              </p>

              <div className="space-y-4">
                {points.map((point, i) => {
                  const Icon = point.icon;
                  return (
                    <motion.div 
                      key={i} 
                      className="flex items-center gap-4 group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <div className="text-primary p-2 bg-primary/5 rounded-lg group-hover:bg-primary/10 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-slate-muted font-medium leading-relaxed">
                        {point.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-navy-dark text-white px-10 py-4 rounded-xl font-bold hover:bg-navy-light transition-all shadow-xl shadow-navy-dark/20 text-lg shine-button"
            >
              Let's Get On a Discovery Call
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
