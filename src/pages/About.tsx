import { motion } from 'motion/react';
import { Target, Eye, Users2, Award, ShieldCheck, Heart } from 'lucide-react';
import FAQ from '../components/sections/FAQ';
import CTASection from '../components/sections/CTASection';
import LocationSection from '../components/sections/LocationSection';
import SoftwareWeUse from '../components/sections/SoftwareWeUse';
import Stats from '../components/sections/Stats';

export default function About() {
  return (
    <div className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="py-[30px] bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="mb-8">
              Human Expertise, <br /> <span className="text-primary italic">Virtual Convenience</span>
            </h1>
            <p className="text-xl text-slate-body max-w-3xl mx-auto leading-relaxed">
              Star Billing Solutions was founded on a simple mission: to help healthcare providers 
              focus on what matters most—their patients. By providing world-class 
              revenue cycle support, we help practices thrive in a complex medical landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-[30px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="icon-box-styled shrink-0">
                  <Target className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h2 className="mb-0">Our <span className="text-primary">Mission</span></h2>
              </div>
              <p className="text-lg text-slate-body leading-relaxed">
                To revolutionize healthcare administration by connecting providers with 
                certified, HIPAA-compliant virtual professionals who deliver unparalleled 
                accuracy and compassionate support to every patient interaction.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-navy-dark p-12 rounded-[40px] text-white overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl" />
              <div className="flex items-center gap-4 mb-8">
                <div className="icon-box-styled shrink-0 !bg-white/10 !text-white">
                  <Eye className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h2 className="mb-0 text-white">Our <span className="text-primary">Vision</span></h2>
              </div>
              <p className="text-lg text-slate-muted leading-relaxed">
                To be the global leader in medical virtual solutions, creating a 
                healthcare world where administrative burdens no longer exist, 
                and clinical breakthroughs are the primary focus of every medical practitioner.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-[30px] bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-8">The Values That <span className="text-primary">Drive Us</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: ShieldCheck, title: 'Uncompromising Security', desc: 'Patient privacy is our north star. We exceed HIPAA standards.' },
              { icon: Heart, title: 'Patient-First Mindset', desc: 'Every virtual interaction is handled with empathy and professional care.' },
              { icon: Award, title: 'Operational Excellence', desc: 'We don\'t just fill seats; we optimize your practice\'s financial health.' }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="icon-box-styled shrink-0">
                    <value.icon className="w-7 h-7 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-dark leading-tight">{value.title}</h3>
                </div>
                <p className="text-slate-body leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <Stats />

      <FAQ bgColor="bg-white" />

      <SoftwareWeUse bgColor="bg-section-bg" />
      <LocationSection bgColor="bg-white" />

      <CTASection 
        bgColor="bg-section-bg"
        title={<>Ready to Optimize Your <span className="text-primary italic">Practice Operations?</span></>}
        subtitle="Experience the Star Billing Solutions difference with our dedicated medical virtual assistants."
      />
    </div>
  );
}
