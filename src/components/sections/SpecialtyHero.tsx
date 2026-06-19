import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Activity, ChevronRight } from 'lucide-react';

interface SpecialtyHeroProps {
  badge?: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function SpecialtyHero({
  badge = "DME BILLING SERVICES",
  titleLine1,
  titleLine2,
  description,
  ctaText = "Let's Get Started",
  ctaHref = "/contact"
}: SpecialtyHeroProps) {
  return (
    <section className="relative bg-navy-dark pt-[110px] pb-[30px]">
      {/* Background Section - Full Width Visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#0A192F]" /> {/* Darker navy base */}
        <div 
          className="absolute inset-0 opacity-[0.4] bg-cover bg-center"
          style={{ backgroundImage: `url('https://www.planstreet.com/img/blog/robust-case-management-img.jpeg')` }}
        />
        {/* Gradient to ensure text readability while showing image */}
        <div className="absolute inset-0 bg-navy-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/80 to-navy-dark/10" />
      </div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-[2px] w-12 bg-primary" />
            <Activity className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-white font-black text-sm tracking-wide">
              {badge}
            </span>
            <div className="h-[2px] w-12 bg-primary" />
          </div>

          <h1 className="text-white text-3xl md:text-[37px] font-black mb-10 max-w-6xl mx-auto leading-[1.1] tracking-tighter">
            {titleLine1} <br />
            <span className="text-primary italic inline-block mt-2">{titleLine2}</span>
          </h1>

          <p className="text-slate-300 text-xl md:text-2xl leading-relaxed mb-14 max-w-4xl mx-auto font-medium">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center px-16 py-6 bg-[#00BCD4] text-white text-lg font-black rounded-full hover:bg-[#00ACC1] transition-all shadow-2xl shadow-cyan-500/40 hover:scale-105 active:scale-95 group"
            >
              {ctaText}
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
