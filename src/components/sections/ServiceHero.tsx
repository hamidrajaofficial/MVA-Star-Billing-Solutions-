import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { LucideIcon, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

interface HeroFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceHeroProps {
  title: string;
  highlightedTitle: string;
  subtitle: string;
  description: string;
  ctaPrimary?: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageSrc: string;
  heroFeatures?: HeroFeature[];
}

const defaultFeatures: HeroFeature[] = [
  {
    icon: ShieldCheck,
    title: "Complete",
    description: "EMR, billing & practice management"
  },
  {
    icon: Zap,
    title: "All Specialties",
    description: "Tailored for every medical field"
  },
  {
    icon: Clock,
    title: "Ready Now",
    description: "Implement in days, not months"
  }
];

export default function ServiceHero({
  title,
  highlightedTitle,
  subtitle,
  description,
  ctaPrimary = { label: "Get a Demo", href: "/contact" },
  ctaSecondary = { label: "Explore Solutions", href: "#details" },
  imageSrc,
  heroFeatures = defaultFeatures
}: ServiceHeroProps) {
  return (
    <section className="relative bg-white pt-[110px] pb-[30px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-[0.4] bg-cover bg-center"
          style={{ backgroundImage: `url('https://img.freepik.com/premium-photo/closeup-medical-expenses-concept-with-stethoscope-calculator-us-dollar-bills-medical-billing-statement-depicting-financial-aspect-healthcare_132358-89205.jpg')` }}
        />
        {/* Gradient to ensure text readability while showing image */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-white/10" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">
              {title && <>{title} </>}
              <span className="text-primary">{highlightedTitle}</span><br />
              {subtitle}
            </h1>
            
            <p className="text-lg text-slate-body mb-10 max-w-xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to={ctaPrimary.href} className="btn-primary shine-button border border-transparent hover:border-primary/50">
                {ctaPrimary.label} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to={ctaSecondary.href} className="btn-secondary">
                {ctaSecondary.label}
              </Link>
            </div>

            {/* Bottom Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {heroFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-primary">
                      <feature.icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-[15px] font-bold text-navy-dark uppercase tracking-tight">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[14px] text-slate-muted leading-tight">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Area - Restored Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative lg:block"
          >
            <div className="relative z-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10" />
              <img
                src={imageSrc}
                alt="Medical Professional"
                className="w-full h-auto object-contain max-h-[600px] mx-auto relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
