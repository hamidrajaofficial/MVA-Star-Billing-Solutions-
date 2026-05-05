import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

interface CTAProps {
  title?: React.ReactNode;
  subtitle?: string;
  bgColor?: string;
  primaryCTA?: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
}

export default function CTASection({ 
  title = <>Reclaim Your Time And <span className="text-primary italic">Boost Your Practice Revenue</span></>,
  subtitle = "Join hundreds of healthcare leaders who have optimized their administrative workflows with HealAssist.",
  bgColor = "bg-white",
  primaryCTA = { text: "Book My Discovery Call", link: "/contact" },
  secondaryCTA = { text: "View Pricing Plans", link: "/pricing" }
}: CTAProps) {
  return (
    <section className={`${bgColor} min-h-[300px] flex items-center relative overflow-hidden py-[60px] border-t border-slate-50`}>
      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center justify-between gap-12"
        >
          <div className="max-w-2xl text-center lg:text-left">
            <h2 className="text-navy-dark mb-6 leading-tight whitespace-pre-line">
              {title}
            </h2>
            <p className="text-slate-muted text-lg max-w-2xl">
              {subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            <Link to={primaryCTA.link} className="btn-primary min-w-[240px] justify-center">
              {primaryCTA.text} <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to={secondaryCTA.link} className="text-navy-dark hover:text-primary font-bold transition-all flex items-center gap-2 group">
              {secondaryCTA.text}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
