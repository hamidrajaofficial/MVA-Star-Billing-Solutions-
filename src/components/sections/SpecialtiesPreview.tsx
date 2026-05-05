import { motion } from 'motion/react';
import { specialties } from '@/src/data/specialties';
import { Link } from 'react-router-dom';

interface Props {
  bgColor?: string;
}

export default function SpecialtiesPreview({ bgColor = "bg-section-bg" }: Props) {
  return (
    <section className={`py-[60px] overflow-hidden ${bgColor}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Content (50%) */}
          <div className="lg:sticky lg:top-10">
            <div className="badge-teal mb-6 mt-0">
              Specialized Care Solutions
            </div>
            <h2 className="mb-8 text-left leading-tight">
              Comprehensive <span className="text-primary italic">Healthcare Virtual Office Assistance</span>
            </h2>
            <p className="text-slate-muted text-lg leading-relaxed font-medium mb-8">
              We provide <span className="font-bold text-navy-dark">virtual healthcare assistants</span> across 25+ medical specialties, ensuring your practice receives specialized care solutions and absolute courteous support.
            </p>
            <Link 
              to="/specialties" 
              className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group"
            >
              Explore All Specialties
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* Right Column: Specialties Grid (50%) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
            {specialties.map((specialty, index) => {
              const Icon = specialty.icon;
              return (
                <motion.div
                  key={specialty.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex justify-center"
                >
                  <Link 
                    to={`/specialties/${specialty.slug}`}
                    className="flex flex-col items-center group w-full max-w-[130px] aspect-square rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 justify-center p-2"
                  >
                    <div className="p-2 rounded-lg text-primary mb-1 sm:mb-2 group-hover:scale-110 transition-transform bg-slate-50">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 stroke-[2]" />
                    </div>
                    <h4 className="text-navy-dark font-bold text-center text-[8px] sm:text-[10px] md:text-[11px] leading-tight group-hover:text-primary transition-colors px-1 uppercase tracking-tighter">
                      {specialty.name}
                    </h4>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
