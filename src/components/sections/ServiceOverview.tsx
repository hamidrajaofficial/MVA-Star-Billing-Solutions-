import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface Props {
  bgColor?: string;
  title?: string;
  headingHighlight?: string;
  description?: string;
}

export default function ServiceOverview({ 
  bgColor = "bg-white",
  title = "Refocus on Patients with ",
  headingHighlight = "Virtual Medical Assistants",
  description
}: Props) {
  return (
    <section className={`py-[30px] ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-3">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              {title}<span className="text-primary italic">{headingHighlight}</span>
            </motion.h2>
            
            <div className="space-y-6 text-slate-body text-lg leading-relaxed mb-10">
              {description ? (
                <p>{description}</p>
              ) : (
                <>
                  <p>
                    Are endless admin tasks drowning your healthcare practice? Are you spending more time handling paperwork than caring for patients? This constant juggling act makes it impossible to provide your patients with the attentive, quality care they deserve. What if you had a support team using the latest technology to handle your routine tasks?
                  </p>
                  <p>
                    That's precisely what our medical virtual assistant offers. We handle all your practice-related duties, enabling you to concentrate on patient care.
                  </p>
                </>
              )}
            </div>

            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center px-10 py-4 bg-[#cc0000] text-white font-bold rounded-full hover:bg-[#b30000] transition-colors shadow-lg shadow-red-500/20 uppercase tracking-wide text-sm"
            >
              Get in Touch!
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative pt-8 lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl translate-y-8"
            >
              <img 
                src="https://gmva.com/hs-fs/hubfs/Untitled%20design%20-%202025-01-03T142950.803%20(1).png?width=400&height=480&name=Untitled%20design%20-%202025-01-03T142950.803%20(1).png" 
                alt="Smiling Virtual Assistant" 
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
