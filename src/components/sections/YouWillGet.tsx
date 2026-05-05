import { motion } from 'motion/react';
import { BookOpen, Users, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function YouWillGet() {
  const features = [
    {
      icon: BookOpen,
      title: "Bilingual Medical Assistants",
      desc: "Communicate seamlessly with a diverse patient base using our fluent, professionally trained bilingual experts."
    },
    {
      icon: Users,
      title: "US-based Certified Assistants",
      desc: "Leverage the expertise of certified professionals who understand the nuances of the US healthcare system."
    },
    {
      icon: Award,
      title: "Medical Graduates",
      desc: "Work with highly educated medical graduates who bring deep clinical knowledge to your administrative tasks."
    }
  ];

  return (
    <section className="py-[30px] bg-section-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Image with Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://www.ecallcenterservices.com/theme/gallery_images/Virtual-medical-assistant-.webp" 
                alt="Professional Virtual Medical Assistant" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Experience Badge */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-6 -right-6 md:right-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 min-w-[160px] text-center"
            >
              <div className="text-2xl font-black text-navy-dark tracking-tighter">25+ Years</div>
              <div className="text-[11px] font-bold text-primary uppercase tracking-widest mt-1">Of Experience</div>
            </motion.div>

            {/* Awards Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -left-6 md:left-10 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 min-w-[160px] text-center"
            >
              <div className="text-2xl font-black text-navy-dark tracking-tighter">45+</div>
              <div className="text-[11px] font-bold text-primary uppercase tracking-widest mt-1">Awards Winning</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-6 text-primary">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="font-bold uppercase tracking-[0.2em] text-sm">You Will Get</span>
            </div>

            <h2 className="mb-8 leading-[1.1]">
              Is Your Practice <br />
              <span className="text-primary italic">Struggling With...</span>
            </h2>

            <p className="text-slate-muted text-lg leading-relaxed mb-10 max-w-xl">
              We are dedicated to transforming medicine admin through expert, HIPAA-compliant virtual staffing, making healthcare practice management more efficient and patient-focused for everyone.
            </p>

            <div className="space-y-8 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col group">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="icon-box-styled shrink-0">
                      <feature.icon className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    <h3 className="mb-0 text-navy-dark">{feature.title}</h3>
                  </div>
                  <p className="text-slate-muted leading-relaxed card-p ml-[70px]">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>

            <Link 
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-black rounded-full shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all group relative overflow-hidden"
            >
              <span className="relative z-10">Know More</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
