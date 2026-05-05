import { motion } from 'motion/react';
import { MapPin, ArrowRight } from 'lucide-react';

const states = [
  { name: 'California', code: 'us-ca' },
  { name: 'Texas', code: 'us-tx' },
  { name: 'New York', code: 'us-ny' },
  { name: 'Florida', code: 'us-fl' },
  { name: 'Illinois', code: 'us-il' },
  { name: 'Washington', code: 'us-wa' },
  { name: 'Pennsylvania', code: 'us-pa' },
];

interface Props {
  bgColor?: string;
}

export default function LocationSection({ bgColor = "bg-white" }: Props) {
  return (
    <section className={`py-[30px] overflow-hidden ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-0.5 bg-primary rounded-full"></div>
                <span className="text-primary font-bold uppercase tracking-widest text-xs">
                  Perfect Match For
                </span>
              </div>
              <h2 className="mb-8">
                Looking for Professional <br className="hidden md:block" />
                <span className="text-primary italic">Virtual Assistants Healthcare</span> Near You?
              </h2>
              <p className="text-[#425466] text-lg leading-relaxed mb-10 max-w-xl">
                We provides dedicated <span className="font-bold text-navy-dark underline decoration-primary/30 text-lg">healthcare virtual assistants</span> across all 50 states. Our professionals are committed to staying ahead of clinical trends by embracing digital innovations in modern medicine.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                {states.map((state, i) => (
                  <motion.div 
                    key={state.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-3 bg-[#F0FBFC] px-5 py-3 rounded-xl border border-[#D1F2F5] hover:bg-[#E0F7F9] transition-all group cursor-default"
                  >
                    <img src={`https://flagcdn.com/w40/${state.code}.png`} alt={`${state.name} Flag`} className="w-[22px] h-[16px] rounded-[2px]" />
                    <span className="font-bold text-[#0A2540] text-[15px]">{state.name}</span>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-10 py-5 bg-[#00BCD4] text-white font-black uppercase tracking-widest text-sm rounded-xl hover:bg-[#00ACC1] transition-all shadow-xl shadow-cyan-500/20 gap-2"
              >
                View All 50 States <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>

          {/* Map Interactive Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Interactive Map Embed */}
            <div className="relative z-10 w-full overflow-hidden p-2 md:p-6">
              <div className="relative pb-[70%] h-0 overflow-hidden">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full border-0" 
                  src="https://www.fla-shop.com/visited-states/embed/?vc=1ca032&uc=90cfea&hc=40bfa6&bc=ffffff&sl=on" 
                  scrolling="no"
                  title="USA Nationwide Coverage Map"
                ></iframe>
              </div>
              <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[9px] text-slate-300 uppercase tracking-widest font-bold">
                  Interactive Coverage Map
                </span>
                <span className="text-[9px] text-slate-300 font-medium">
                  Source: Fla-shop.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
